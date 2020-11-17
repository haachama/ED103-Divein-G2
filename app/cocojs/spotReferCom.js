// import $ from 'jquery';
// import Swal from 'sweetalert2';

let showComRows = document.getElementById("showComRows");
let spotComRow; //留言php回來的變數陣列
let num = 0;
let sumCom;  
let comNo = 0;  //被檢舉的留言
//----檢舉留言 lightbox
// 開啟 Modal 彈跳視窗
function openLigBox(){
   
    $("i.fa-exclamation-circle").on("click", function(){
        $(".lightbox-block3").addClass("-openbox");
        comNo = $(this).attr("data-comNo");
        document.getElementById("formComNo").value = comNo;
        sendspotReport;
    });

    // 關閉 Modal
    $(".btn_modal_close").on("click", function(){
        $(".lightbox-block3").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function(){
            $(".lightbox-block3").removeClass("-openbox -opacity-zero");
        }, 1000);
    });
    $(".submitbtn3").on("click", function(){
        $(".lightbox-block3").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function(){
            $(".lightbox-block3").removeClass("-openbox -opacity-zero");
        }, 1000);
    });
}
//傳送檢舉表單
function sendspotReport(){
    
    var formData = new FormData(document.getElementById("sendReportForm"));
    // formData.append('comNo',comNo);
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if( xhr.status == 200){
    
            if(xhr.responseText == "error"){
                alert("Error");
            }else{

                Swal.fire("感謝您提出檢舉", "我們將盡快處理", "success");
            }

        }else{
            alert(xhr.status)
        }
    }
    xhr.open("Post", `spotSendReport.php`, true);
    xhr.send(formData);
    
}


//-------讀取更多
function showMoreMsg(){
    //------要再次查看資料 重新計算陣列數量
    console.log("讀取更多");
    let html ="";
    let count = spotComRow.length; 
    sumCom = showComRows.childNodes.length +3;
    if(sumCom >= count ){
        
        console.log("讀取剩餘");
        for( let i = num; i < count; i ++){
            html = `
                    <img src="./img/member/member/${spotComRow[i].memAvatar}" alt="">
                    <div class="spotComText">
                        <div>
                            <h5>${spotComRow[i].memName}</h5>
                            <span>${spotComRow[i].comTime}</span>
                        </div>
                        <p>${spotComRow[i].content}</p>
                    </div>
                    <div class="spotComText">
                        <i class="fas fa-exclamation-circle" data-comNo="${spotComRow[i].comNo}" ></i>
                    </div>
                `;
            let comDom = document.createElement('div');
            comDom.className='spotCom';
            comDom.innerHTML = html;
            showComRows.appendChild(comDom);

            //按鈕顯示沒有更多 留言
            $id("getMsgBtn").style.pointerEvents="none";
            $id("getMsgBtnText").innerHTML="沒有更多";
        }
        openLigBox();
    }else{
        console.log("讀取其他更多");

        for( let i = num; i < (num + 3); i++ ){
        html = `
                    <img src="./img/member/member/${spotComRow[i].memAvatar}" alt="">
                    <div class="spotComText">
                        <div>
                            <h5>${spotComRow[i].memName}</h5>
                            <span>${spotComRow[i].comTime}</span>
                        </div>
                        <p>${spotComRow[i].content}</p>
                    </div>
                    <div class="spotComText">
                    <i class="fas fa-exclamation-circle" data-comNo="${spotComRow[i].comNo}" ></i>
                    </div>
                `;
            var dom = document.createElement('div');
            dom.className='spotCom';
            dom.innerHTML = html;
            showComRows.appendChild(dom);
            // console.log(i);
        }
        console.log(num);
        num = num + 3 ;
        
    }
    openLigBox();
    console.log(sumCom);

}

//----顯示留言
function showSpotCom(){
    sumCom = showComRows.childNodes.length+3;
    let html ="";
    for( let i = 0; i < num ; i++ ){
        html += `<div class="spotCom">

                    <img src="./img/member/member/${spotComRow[i].memAvatar}" alt="">
                    <div class="spotComText">
                        <div>
                            <h5>${spotComRow[i].memName}</h5>
                            <span>${spotComRow[i].comTime}</span>
                        </div>
                        <p>${spotComRow[i].content}</p>
                    </div>
                    <div class="spotComText">
                    <i class="fas fa-exclamation-circle" data-comNo="${spotComRow[i].comNo}" ></i>
                    </div>
                </div>`;

        }
        showComRows.innerHTML = html;
    openLigBox();
}
     
//－－－－－－送出留言  
//html页面调用js文件里的函数，
//写法必须为dosave = function (){}形式
function sendSpotComs (){
    console.log("送出留言");
    let message = $id("message").value;
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(message !=''){
            getSpotComs();
        }else{
            alert("請輸入內容");
            return false;
        }
        
    };
    xhr.open("Post", "spotInsertCom.php", true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    // let messageObj = { message };
    // let messageStr = JSON.stringify(messageObj);
    let msg_infor = `msgInfor=${message}&diveNo=${spotDiveNO}`;
    xhr.send(msg_infor);
    

    //－－－－－－清空表單
    $id('message').value = '';
    console.log("送出留言end");
    num = num +1;
}


//各式各樣的監聽事件
function spotReferCom(){
    document.getElementById("sendBtn").onclick = sendSpotComs;
    document.getElementById("getMsgBtn").onclick = showMoreMsg;
    $id("sendReportBtn").onclick = function(){
        sendspotReport();
    };
}






//－－－－－－從資料庫取得留言
function getSpotComs(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        spotComRow = JSON.parse(xhr.responseText);
        console.log(spotComRow.length);
        if(num == 0 ){
            let html ="";
            for( let i = 0; i < 3 ; i++ ){
                html += `<div class="spotCom">
                            <img src="./img/member/member/${spotComRow[i].memAvatar}" alt="">
                            <div class="spotComText">
                                <div>
                                    <h5>${spotComRow[i].memName}</h5>
                                    <span>${spotComRow[i].comTime}</span>
                                </div>
                                <p>${spotComRow[i].content}</p>
                            </div>
                            <div class="spotComText">
                            <i class="fas fa-exclamation-circle" data-comNo="${spotComRow[i].comNo}" ></i>
                            </div>
                        </div>`;
    
                showComRows.innerHTML = html;
            };
            openLigBox();
            // console.log("取資料Ａ");
            num = num +3; 
        }else{
            showSpotCom();
        }

    }
    xhr.open("get", `spotGetComs.php?spotDiveNO=${spotDiveNO}`, false);
    xhr.send(null);


    //各式各樣的監聽事件
    spotReferCom();
}


