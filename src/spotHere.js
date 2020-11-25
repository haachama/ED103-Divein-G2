// import Swal from 'sweetalert2';
// import $ from 'jquery';

let hereAddBtn = document.querySelector(".hereAddBtn");
let spotPepRow; //踩點人數接收資訊php回來的變數陣列
let sumPep = 0;
let spotPepRowAgain;//點擊再次送出取回







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
    let xhr = new XMLHttpRequest();
    if($id('spanLogin').innerHTML == "&nbsp;登出"){   //如果我在登入的情況下

        xhr.onload = function(){
            getSpotPep(spotDiveNO);
            addHerePic();
        }
        sumPep += 2;
    }else{
        Swal.fire("哈囉！請先登入會員");
    }
    xhr.open("Post", "spotInsertPep.php", true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let Pep_infor = `diNo=${spotDiveNO}`;
    xhr.send(Pep_infor);
}



//－－－－－－show 多少人 總數
function showPeps(){
    let html ="";

    let htmlPic =""
    html =`<h3>目前有${spotPepRow[0].length}人踩過此點</h3>`;

    $id("spotPepSum").innerHTML = html;

    for(let i=0; i< spotPepRow[0].length; i++){
        htmlPic +=`<li><img src="./img/member/member/${spotPepRow[0][i]["memAvatar"]}" alt=""></li>`;
    }
    $id("spotImgHereList").innerHTML = htmlPic;

}


//－－－－－－取得資料庫
function getSpotPep(e){

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        spotPepRow = JSON.parse(xhr.responseText);
        let html ="";
        let htmlPic =""
        html =`<h3>目前有${spotPepRow[0].length}人踩過此點</h3>`;
        $id("spotPepSum").innerHTML = html;
    
        for(let i=0; i< spotPepRow[0].length; i++){
            htmlPic +=`<li><img src="./img/member/member/${spotPepRow[0][i]["memAvatar"]}" alt=""></li>`;
        }
        $id("spotImgHereList").innerHTML = htmlPic;

        if(spotPepRow[1].memId){  //表示會員有來過
            hereAddBtn.style.backgroundColor = "#221814";
            hereAddBtn.style.border = "#221814";
        
            hereAddBtn.innerHTML = "完成<br>踩點";
            $(".hereAddBtn").css("pointer-events","none");
            

        }else{
 
            showPeps();
        }


    }

    let url = `spotGetPep.php?spotDiveNO=${e}`;
    xhr.open("get", url, false);
    xhr.send(null);

}

//各式各樣的點擊事件
function spotHereInit(){
    $id("hereAddBtn").addEventListener("click",sendSpotPeps,false);

}

