"use strict";

var score = localStorage.getItem('myScore');

document.getElementById("score").innerHTML = score;

$(document).ready(function(){
    $.ajax({
            url: 'game.php',
            dataType: 'JSON',
            type: 'GET',
            success(data) {
                console.log(data);
            },
    });
});

function $id(id){
	return document.getElementById(id);
}	
let member;

    // function showLoginForm(){
    //   //檢查登入bar面版上 spanLogin 的字是登入或登出
    //   //如果是登入，就顯示登入用的燈箱(lightBox)
    //   //如果是登出
    //   //將登入bar面版上，登入者資料清空 
    //   //spanLogin的字改成登入
    //   //將頁面上的使用者資料清掉
    //   if($id('spanLogin').innerHTML == "登入"){
    //     $id('lightBox').style.display = 'block';
    //   }else{//登出
    //     let xhr = new XMLHttpRequest();
    //     xhr.onload = function(){
    //       $id('memName').innerHTML = '&nbsp';
    //       $id('spanLogin').innerHTML = '登入';          
    //     }
    //     xhr.open("get", "logout.php", true);
    //     xhr.send(null);
    //   }

    // }//showLoginForm

    function sendForm(){
      //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
    //   let memId = $id("memId").value;  
    //   let memPsw = $id("memPsw").value; 
      let xhr = new XMLHttpRequest();
      xhr.onload = function(){
        member = JSON.parse(xhr.responseText);
        if(member.memGamePoint){
          window.alert(memGamePoint);
          $id('memName').value = '';
          $id('memGamePoint').value = '';          
        }else{
            window.alert("帳密錯誤~");
        }
      }

      xhr.open("Post", "ajaxLogin.php", true);
      xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //   let data_info = `memId=${memId}&memPsw=${memPsw}`;
      xhr.send(data_info); 
    }

    // function cancelLogin(){
    //   //將登入表單上的資料清空，並將燈箱隱藏起來
    //   $id('lightBox').style.display = 'none';
    //   $id('memId').value = '';
    //   $id('memPsw').value = '';
    // }

    // function getMemberInfo(){
    //   let xhr = new XMLHttpRequest();
    //   xhr.onload = function(){
    //     if(xhr.status == 200){ //success
    //       member = JSON.parse(xhr.responseText);
    //       if(member.memId){
    //         $id("memName").innerText = member.memName;
    //         $id('spanLogin').innerHTML = '登出';            
    //       }
    //     }else{ //error
    //       alert(xhr.status);
    //     }
    //   }

    //   xhr.open("get", "getMemberInfo.php", true);
    //   xhr.send(null);
    // }

    // function init(){

    //   //-----------------------檢查是否已登入
    //   getMemberInfo();

    //   //===設定spanLogin.onclick 事件處理程序是 showLoginForm

    //   $id('spanLogin').onclick = showLoginForm;

    //   //===設定btnLogin.onclick 事件處理程序是 sendForm
    //   $id('btnLogin').onclick = sendForm;

    //   //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
    //   $id('btnLoginCancel').onclick = cancelLogin;

    // }; //window.onload

    window.addEventListener("load",init,false);

