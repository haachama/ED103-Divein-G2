import $ from "jquery";
// import {TweenMax, TimelineMax} from "gsap";

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

$(function () {
  //會員登入

  //教練登入

  //查詢密碼

  //註冊帳號

  //註冊檢查帳號是否重複
  function checkId(){
    //產生XMLHttpRequest物件
    let xhr = new XMLHttpRequest();

    //註冊callback function 
    xhr.onload = function(){
        if( xhr.status == 200){ //status : OK
            document.getElementById("idMsg").innerText = xhr.responseText;
        }else{
            alert( xhr.status);
        }
    }  
    //設定好所要連結的程式
    xhr.open("post", "memberRegIdCheck.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //送出資料
    let data_info =`memId=${document.getElementById("memId").value}`;
    xhr.send(data_info);
  } 
  //點擊查詢動作
  window.addEventListener("load", function(){
    document.getElementById("btnCheckId").addEventListener("click", checkId, false);
  }, false)
});
