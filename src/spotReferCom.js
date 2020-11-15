import $ from 'jquery';
import Swal from 'sweetalert2';

   
function $id(id){
    return document.getElementById(id);
};

let showComRows = document.getElementById("showComRows");
let spotComRow; //留言
let num = 0;
let sumCom;
let comNo;
//----檢舉留言 lightbox
function openLigBox(){
    // 開啟 Modal 彈跳視窗 取其data-comNo
    $("i.fa-exclamation-circle").on("click", function(){
        $(".lightbox-block3").addClass("-openbox");
        comNo = $(this).attr("data-comNo");
    });
    // 關閉 Modal
    $(".btn_modal_close").on("click", function(){
        $(".lightbox-block3").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function(){
            $(".lightbox-block3").removeClass("-openbox -opacity-zero");
        }, 1000);
    });

    //檢舉燈箱
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

function sendspotReport(){
    alert(comNo);
    // let xhr = new XMLHttpRequest();
    // xhr.onload = function(){
        
    //     Swal.fire("感謝您的點擊", "讓此潛點更加熱門", "success");

    // };
    // xhr.open("Post", "spotSendReport.php", true);
    // xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    // // let messageObj = { message };
    // // let messageStr = JSON.stringify(messageObj);
    // let msg_infor = `msgInfor=${message}&comNo=${comNo}`;
    // // let report_infor = new FormData(document.getElementById("sendReportForm"));
    // xhr.send(report_infor);
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
    // let msg_infor = `msgInfor=${message}&dog=${sdsd}`;
    let msg_infor = `msgInfor=${message}`;
    xhr.send(msg_infor);
    

    //－－－－－－清空表單
    $id('message').value = '';
    console.log("送出留言end");
    num = num +1;
};

//－－－－－－從資料庫取得留言
function getSpotComs(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        spotComRow = JSON.parse(xhr.responseText);
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
            // console.log("取資料Ｂ");

        }

    }
    xhr.open("get", "spotGetComs.php", false);
    xhr.send(null);

};

function spotInit(){
    getSpotComs();

    document.getElementById("sendBtn").onclick = sendSpotComs;
    document.getElementById("getMsgBtn").onclick = showMoreMsg;
    document.getElementById("sendReportBtn").onclick = sendspotReport;

};

window.addEventListener("load", spotInit,false);

