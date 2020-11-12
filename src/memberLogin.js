import $ from "jquery";

$(function () {
//登入&註冊切換
var mfc = $(".memberFromChangeBtn");
var mfa = $(".memberFromArea");
var mltOne = $(".mltOne");
var mltTwo =  $(".mltTwo");

$("#memberRegistered").click(function(){
  $(".memLogRegArea").addClass("memberMove");
    mfc.removeClass("memberMove");
    mfc.removeClass("memberPasForgot");
    mfa.removeClass("memberFromMove");
    mfa.removeClass("memberFromPasMove");
    mltOne.removeClass("memberPasForgot");
    mltTwo.removeClass("memberPasForgot");
});
$("#memberLogin").click(function(){
  $(".memLogRegArea").removeClass("memberMove");
});
$("#ml").click(function(){
    mfc.removeClass("memberMove");
    mfc.removeClass("memberPasForgot");
    mfa.removeClass("memberFromMove");
    mfa.removeClass("memberFromPasMove");
    mltOne.removeClass("memberPasForgot");
    mltTwo.removeClass("memberPasForgot");

  });
  $("#tl").click(function(){
    mfc.addClass("memberMove");
    mfc.removeClass("memberPasForgot");
    mfa.addClass("memberFromMove");
    mfa.removeClass("memberFromPasMove");
    mltOne.removeClass("memberPasForgot");
    mltTwo.removeClass("memberPasForgot");
  });
  $("#memberPasForgot").click(function(){
    mfc.removeClass("memberFromMove");
    mfc.addClass("memberPasForgot");
    mfa.removeClass("memberFromMove");
    mfa.addClass("memberFromPasMove");
    mltOne.addClass("memberPasForgot");
    mltTwo.addClass("memberPasForgot");
  });
});

//------------------------------------------------------------------------------------------

$(function () {
  //header
  // hamburger icon 的切換
  $("button.hamburger").on("click", function () {
      $(this).toggleClass("is-active");
      $('.nav').slideToggle("show");
      $('.memCart li').toggleClass("show");
      $('header').toggleClass("bg")
  });
  // RWD導覽列
  $(window).resize(function () {
      var $pixel = document.body.clientWidth;

      if ($pixel > 991) {
          $('.nav').removeClass('hide')
          $('.nav').addClass('show')
      } else {
          $('.nav').removeClass('show')
          $('.nav').addClass('hide')
      }
  });
});

//------------------------------------------------------------------------------------------
$(function () {
  //輪播圖
  var index=0;
    var imgnum=$('.memberLoginBanner ul li').length;
    function pic(){ 
      p=setInterval(function(){
          index++;
          if(index>=imgnum){
              index=0; 
          }
          selectimg(index); 
      },5000);
  }
  function selectimg(index){ 
      $('.memberLoginBanner ul li').eq(index).fadeIn(600).siblings().fadeOut(600);  
  }
  pic();
});

//------------------------------------------------------------------------------------------

$(function () {
  // function $id(id){
  //   return document.getElementById(id);
  // }	
  //============查詢密碼============
  // function memberPswChick(){
  //   let CheckMemId = $id("CheckMemId").value;
  //   let CheckMemMail = $id("CheckMemMail").value;
  //   let mpc = new XMLHttpRequest();

  //   mpc.open("Post", "memberPswCheck.php", true);
  //   mpc.setRequestHeader("content-type","application/x-www-form-urlencoded");
  //   let data_info = `memId=${CheckMemId}&memMail=${CheckMemMail}`;
  //   mpc.send(data_info);
  // }
  // window.addEventListener("load", function(){
  //   document.getElementById("CheckMemPsw").addEventListener("click", memberPswChick, false);
  // }, false)

  //============註冊帳號============
  function memberRag(){
    var RegMemId = $("#RegMemId").val();
    var RegMemPsw = $("#RegMemPsw").val();
    var RegMemName = $("#RegMemName").val();
    var RegMemNickName = $("#RegMemNickName").val();
    var RegMemMail = $("#RegMemMail").val();

    $.ajax({
      url:"./memberRag.php",
      type: 'GET',
      data: {
        memId:RegMemId,
        memPsw:RegMemPsw,
        memName:RegMemName,
        memNickName:RegMemNickName,
        memMail:RegMemMail,
      },
      dataType: 'json',
      // success:function(){
      //   alert("成功");
      // },
      // error:function(){
      //   alert("失敗");
      // }, 
    });
  }

  var RMP = $("#RegMemPsw").val();
  var RMC = $("#RegMemIdCheck").val();
  $("#btnReg").click(function(){
    
    if(RMC /= RMP){
      $("#pswMsg").html("密碼不相同！");}
    // }else{
    //   $("#pswMsg").innerHTML = '';
    //   memberRag();
    // }
  });
  

  

  //============註冊-檢查帳號是否重複============

  function memberRegCheckId(){
    //產生XMLHttpRequest物件
    let mric = new XMLHttpRequest();

    //註冊callback function 
    mric.onload = function(){
        if( mric.status == 200){ //status : OK
            document.getElementById("idMsg").innerText = mric.responseText;
        }else{
            alert( mric.status);
        }
    }  
    //設定好所要連結的程式
    mric.open("post", "memberRegIdCheck.php", true);
    mric.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //送出資料
    let data_info =`memId=${document.getElementById("RegMemId").value}`;
    mric.send(data_info);
  } 
  //點擊查詢動作
  window.addEventListener("load", function(){
    document.getElementById("btnCheckId").addEventListener("click", memberRegCheckId, false);
  }, false)
});