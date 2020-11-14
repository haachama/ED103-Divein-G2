// import $ from "jquery";

$(function () {
    function $id(id){
      return document.getElementById(id);
    }	
    let member;
    // let coach;
  
    //============會員登入============
  
    function memberShowLogin(){
      //登出作業
      //檢查登入bar面版上 spanLogin 的字是登出
      //如果是""，將登入bar面版上，登入者資料清空 
      //spanLogin的字改成登入
      //將頁面上的使用者資料清掉
      if($id('spanLogin').innerHTML == "&nbsp;登出"){
        let memberLogin = new XMLHttpRequest();
        memberLogin.onload = function(){
          $id('memName').innerHTML = '&nbsp';     //header會員名稱顯示
          $id('spanLogin').innerHTML = '';        //header登出顯示   
        }
        memberLogin.open("get", "memberLogout.php", true);
        memberLogin.send(null);
      }
    }
    function memberSendForm(){
      //使用Ajax 回server端,取回登入者姓名, 放到頁面上 
      let memId = $id("LogMemId").value;  
      let memPsw = $id("LogMemPsw").value; 
      let memberLogin = new XMLHttpRequest();
      memberLogin.onload = function(){
        member = JSON.parse(memberLogin.responseText);
        if(member.memId){
          $id("memName").innerText = member.memName;  //header會員匿稱顯示
          $id('spanLogin').innerHTML = '&nbsp;登出';        //header登出顯示
          // window.location.href = "http://localhost/ed103g2/app/memberLogin.html";
          //將登入表單上的資料清空，並隱藏起來
          $id('LogMemId').value = '';
          $id('LogMemPsw').value = '';
          $id('memberIdError').innerHTML = '';         
        }else{
          $id('memberIdError').innerHTML = '帳號密碼錯誤';
        }
      }
      memberLogin.open("Post", "memberLogin.php", true);
      memberLogin.setRequestHeader("content-type","application/x-www-form-urlencoded");
      let data_info = `memId=${memId}&memPsw=${memPsw}`;
      memberLogin.send(data_info); 
    }
  
    function getMemberInfo(){
      let memberLogin = new XMLHttpRequest();
      memberLogin.onload = function(){
        if(memberLogin.status == 200){ //success
          member = JSON.parse(memberLogin.responseText);  //把SESSION值放入member
          if(member.memId){
            $id("memName").innerText = `Hi,${member.memName}`;   //header會員名稱顯示
            $id('spanLogin').innerHTML = '&nbsp;登出';          //header登出顯示 
            sessionMember();                                       //將SESSION傳入指定PHP     
          }
        }else{ //error
          alert(memberLogin.status);
        }
      }
      memberLogin.open("get", "postMemberInfo.php", true);
      memberLogin.send(null);
    }

    
    //將SESSION傳入指定PHP-------------------------
    function sessionMember(){
      let memberLogin = new XMLHttpRequest();
      memberLogin.onload = function(){
        if(memberLogin.status == 200){ //success
          member = JSON.parse(memberLogin.responseText);
        }
      }
      memberLogin.open("Post", "member.php", true);
      memberLogin.setRequestHeader("content-type","application/x-www-form-urlencoded");
      let data_info = `memNo=${member.memNo}`;
      memberLogin.send(data_info); 
    }

    //------------------------------------------------------
  
    function init(){
      //檢查是否已登入
      getMemberInfo();
      //設定spanLogin.onclick 事件處理程序是 showLoginForm
      $id('spanLogin').onclick = memberShowLogin;
      //設定LoginMember.onclick 事件處理程序是 sendForm
      $id('LoginMember').onclick = memberSendForm;
    };
    window.addEventListener("load",init,false);
  
  
    //============教練登入============
  
    // function coachShowLogin(){
    //   //登出作業
    //   //檢查登入bar面版上 spanLogin 的字是登出
    //   //如果是""，將登入bar面版上，登入者資料清空 
    //   //spanLogin的字改成登入
    //   //將頁面上的使用者資料清掉
    //   if($id('spanLogin').innerHTML == "&nbsp;登出"){
    //     let coachLogin = new XMLHttpRequest();
    //     coachLogin.onload = function(){
    //       $id('memName').innerHTML = '&nbsp';     //header教練名稱顯示
    //       $id('spanLogin').innerHTML = '';        //header登出顯示   
    //     }
    //     coachLogin.open("get", "coachLogout.php", true);
    //     coachLogin.send(null);
    //   }
    // }
    // function coachSendForm(){
    //   //使用Ajax 回server端,取回登入者姓名, 放到頁面上 
    //   let trainerId = $id("LoginCoachId").value;  
    //   let trainerPsw = $id("LoginCoachPsw").value; 
    //   let coachLogin = new XMLHttpRequest();
    //   coachLogin.onload = function(){
    //     coach = JSON.parse(coachLogin.responseText);
    //     if(coach.trainerId){
    //       $id("memName").innerText = coach.trainerName;  //header教練名稱顯示
    //       $id('spanLogin').innerHTML = '登出';        //header登出顯示
    //       //將登入表單上的資料清空，並隱藏起來
    //       $id('LoginCoachId').value = '';
    //       $id('LoginCoachPsw').value = '';  
    //       $id('coachIdError').innerHTML = '';        
    //     }else{
    //       $id('coachIdError').innerHTML = '帳號密碼錯誤';
    //     }
    //   }
    //   coachLogin.open("Post", "coachLogin.php", true);
    //   coachLogin.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //   let data_info = `trainerId=${trainerId}&trainerPsw=${trainerPsw}`;
    //   coachLogin.send(data_info); 
    // }
  
    // function getCoachInfo(){
    //   let coachLogin = new XMLHttpRequest();
    //   coachLogin.onload = function(){
    //     if(coachLogin.status == 200){ //success
    //       coach = JSON.parse(coachLogin.responseText);
    //       if(coach.trainerId){
    //         $id("memName").innerText = coach.trainerName;   //header會員名稱顯示
    //         $id('spanLogin').innerHTML = '登出';          //header登出顯示      
    //       }
    //     }else{ //error
    //       alert(coachLogin.status);
    //     }
    //   }
    //   coachLogin.open("get", "postCoachInfo.php", true);
    //   coachLogin.send(null);
    // }
  
    // function init(){
    //   //檢查是否已登入
    //   getCoachInfo();
    //   //設定spanLogin.onclick 事件處理程序是 showLoginForm
    //   $id('spanLogin').onclick = coachShowLogin;
    //   //設定LoginCoach.onclick 事件處理程序是 sendForm
    //   $id('LoginCoach').onclick = coachSendForm;
    // };
    // window.addEventListener("load",init,false);
  });