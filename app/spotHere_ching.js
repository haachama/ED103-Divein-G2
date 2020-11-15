import Swal from 'sweetalert2';

window.addEventListener("load", spotHereInit,false);

function spotHereInit(){

    $id("hereAddBtn").addEventListener("click",sendSpotPeps,false);
    
    //－－－－－－點擊 送出資訊
    function sendSpotPeps (){

        let diveNo = $id("spotImgHereList").dataset.spot;
    
        let xhr = new XMLHttpRequest();

        xhr.onload = function(data){
            // getSpotPep();
            // addHerePic();

            let result = JSON.parse(data);

            for (let i = 0; i < result.length; i++) {


                if(diveNo == result[i]['diveNo']){
                    //刪除踩點紀錄

                    let xhrDel = new XMLHttpRequest();

                    xhr.onload = function(data){
                        // 更新踩點人數 ＋輸出會員照片
                    }
                    xhr.open("Post", "delSpotPeople.php", true);
                    xhr.send();


                }else{   //新增踩點紀錄
                    let Pep_infor = `diNo=${diveNo}`;
                    let xhrDel = new XMLHttpRequest();

                    xhr.onload = function(data){
                        // 更新踩點人數 ＋輸出會員照片
                    }
                    xhr.open("Get", `addSpotPeople.php?diveNo=${Pep_infor}`, true);
                    xhr.send();

                }          
            }
        };

        xhr.open("Post", "spotPeople.php", true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send();
        console.log("sendSpotPeps送出資訊end");
        
    };
}



function $id(id){
    return document.getElementById(id);
};







