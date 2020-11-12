// import $ from "jquery";

let showComRows = document.getElementById("showComRows");
let spotComRow; //留言

function doFirst2(){

    //－－－－－－show 留言
    function showSpotCom(){
        let html ="";
        for(let i=0; i< spotComRow.length; i++){
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
                            <i class="fas fa-exclamation-circle" ></i>
                        </div>
                    </div>`;
        }
        showComRows.innerHTML = html;
        //----檢舉留言
        // 開啟 Modal 彈跳視窗
        $("i.fa-exclamation-circle").on("click", function(){  
            $(".lightbox-block3").addClass("-openbox");
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

    };
    
    //－－－－－－取得留言
    function getSpotComs(){
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            spotComRow = JSON.parse(xhr.responseText);
            showSpotCom();
        }
        xhr.open("get", "../spotGetComs.php", false);
        xhr.send(null);
    }
    getSpotComs();

};

window.addEventListener("load", doFirst2,false);