// import * Swal from 'sweetalert2';
// import * as Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@10";
// import * as $ from "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";

//踩點－會員只能點擊一次
var hereAddBtn = document.querySelector(".hereAddBtn");
function doFirst(){
    
    let html ="";
    let spotPepRow; //踩點人數
    
    //－－－－－－踩點人數
        //－－－－－－show 多少人
        function showPeps(){
            let spotPepSum = document.getElementById("spotPepSum");

            html +=`<h3>目前有${spotPepRow.length}人踩過此點</h3>`;
            spotPepSum.innerHTML = html;
            showPepsRow();

        }
        
        function showPepsRow(){
            html ="";
            for(let i=0; i< spotPepRow.length; i++){
                html +=`<li><img src="./img/member/member/${spotPepRow[i].memAvatar}" alt=""></li>`;
            }
            let spotImgHereList =document.getElementById("spotImgHereList");
            spotImgHereList.innerHTML = html;
        }
        
        
        //－－－－－－取得資料庫
        function getSpotPep(){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                spotPepRow = JSON.parse(xhr.responseText);
                showPeps();
            }
            xhr.open("get", "../spotGetPep.php", false);
            xhr.send(null);

        }
    
        //－－－－－－點擊alert 增加一名照片
        function addHerePic(){
            hereAddBtn.addEventListener("click",function(){
            // if(window.getComputedStyle(hereAddBtn).backgroundColor == "rgb(34, 24, 20)"){
                let newLi = document.createElement('li');
                let image = document.createElement('img');
                image.src = `./img/member/member/${spotPepRow[spotPepRow.length-1].memAvatar}`;
                // alert(spotPepRow.length-1)
                newLi.appendChild(image);
                spotImgHereList.appendChild(newLi);
            
                hereAddBtn.style.backgroundColor += "#221814";
                hereAddBtn.style.border = "#221814";
                
                Swal.fire("感謝您的點擊", "讓此潛點更加熱門", "success");
                
                $(".hereAddBtn").css("pointer-events","none");
                hereAddBtn.innerHTML = "完成<br>踩點";
            // }else{
                // alert()
            // }   
            },false);
        }
    
    getSpotPep();
    addHerePic();


};            

window.addEventListener("load", doFirst,false);





