import Swal from 'sweetalert2';
import $ from 'jquery';

//踩點－會員只能點擊一次
let spotImgHereList = document.getElementById("spotImgHereList");
var hereAddBtn = document.querySelector(".hereAddBtn");
let spotPepRow = document.getElementById("spotPepRow");

function doFirst(){
    
    let html ="";
    let xhr = new XMLHttpRequest();
    //－－－－－－踩點人數
        //－－－－－－show 多少人
        function showPeps(){
            html = "";
            html +=`<h3>目前有${spotPepRow.length}人踩過此點</h3>`;
            spotPepSum.innerHTML = html;
            console.log(html);
        }
        function showPepsRow(){
            html = "";
            for(let i=0; i< spotPepRow.length; i++){
                html +=`<li><img src="./img/member/member/${spotPepRow[i].memAvatar}" alt=""></li>`;
            }
            console.log(html);
            let spotImgHereList =document.getElementById("spotImgHereList");
            console.log(spotImgHereList);
    
            spotImgHereList.innerHTML = html;
        }
        //－－－－－－取得資料庫
        // console.log(spotPepRow);
        xhr = new XMLHttpRequest();
        xhr.onload = function(){
            spotPepRow = JSON.parse(xhr.responseText);
            showPepsRow();
            showPeps();
        }
        xhr.open("get", "../app/getSpotPep.php", false);
        xhr.send(null);
    
        //－－－－－－點擊alert 增加一名照片
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

};            

window.addEventListener("load", doFirst,false);





