// import Swal from 'sweetalert2';
// import $ from 'jquery';

let hereAddBtn = document.querySelector(".hereAddBtn");
let spotPepRow; //踩點人數接收資訊php回來的變數陣列
let sumPep = 0;

//－－－－－－show 多少人 總數
function showPeps(){
    let html ="";
    html =`<h3>目前有${spotPepRow.length}人踩過此點</h3>`;
    $id("spotPepSum").innerHTML = html;
    console.log("show 多少人 總數");

    let htmlPic ="";
    for(let i=0; i< spotPepRow.length; i++){
        htmlPic +=`<li><img src="./img/member/member/${spotPepRow[i]["memAvatar"]}" alt=""></li>`;
    }

    $id("spotImgHereList").innerHTML = htmlPic;
    
}


//－－－－－更改踩點按鈕樣式
function addHerePic(){

    hereAddBtn.style.backgroundColor = "#221814";
    hereAddBtn.style.border = "#221814";

    hereAddBtn.innerHTML = "完成<br>踩點";
    $(".hereAddBtn").css("pointer-events","none");
    Swal.fire("感謝您的點擊", "讓此潛點更加熱門", "success");

}

//－－－－－－點擊 送出資訊
function sendSpotPeps (){
    console.log("送出資訊");
    let diveNo111 = $id("spotImgHereList").dataset.spot;

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        getSpotPep();
    };
    xhr.open("Post", "spotInsertPep.php", true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let Pep_infor = `diNo=${diveNo111}`;
    xhr.send(Pep_infor);
    
    console.log("送出資訊end");
    sumPep = sumPep + 1;
}



//－－－－－－取得資料庫
function getSpotPep(){
    console.log("取得資料");
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        spotPepRow = JSON.parse(xhr.responseText);

        if(sumPep == 0 ){
            //照片牆
            let html ="";
            for(let i=0; i< spotPepRow.length; i++){
                html +=`<li><img src="./img/member/member/${spotPepRow[i]["memAvatar"]}" alt=""></li>`;
            }
            $id("spotImgHereList").innerHTML = html;

            //總人數
            let htmlsum ="";
            htmlsum =`<h3>目前有${spotPepRow.length}人踩過此點</h3>`;
            $id("spotPepSum").innerHTML = htmlsum;

        }else{
            showPeps();
            addHerePic();
        }
    }
    xhr.open("get", `spotGetPep.php?spotDiveNO=${spotDiveNO}`, false);
    xhr.send(null);
}

//各式各樣的點擊事件
function spotHereInit(){
    $id("hereAddBtn").addEventListener("click",sendSpotPeps,false);

}

