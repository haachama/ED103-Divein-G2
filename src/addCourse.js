import $ from 'jquery';
require("./jquery.ripples.js");

$(function () {
    // hamburger icon 的切換
    $("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $('.nav').toggleClass("show");
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

    // 選擇課程種類
    $('.lessonType div').each(function(){

        $(this).on("click",function(e){

            $('.lessonType div').removeClass("border");
            for (let i = 0; i < $('.lessonType div').find('[type="radio"]').length; i++) {

                $('.lessonType div').find('[type="radio"]')[i].checked = false;    
            }
            $(this).toggleClass("border");
            $(this).find('[type="radio"]')[0].checked = true;  
        })
    })




    // ripples套件
    $('body').ripples({
        resolution: 1280,
        dropRadius: 20,
        perturbance: 0.01,
    });

    $('canvas').css({
        position:"fixed",
    })


})

var courseNo = 0;
Date.prototype.yyyymmdd = function() {
var mm = this.getMonth() + 1; 
var dd = this.getDate();

return [this.getFullYear(),
        "/",
        (mm>9 ? '' : '0') + mm,
        "/",
        (dd>9 ? '' : '0') + dd
        ].join('');
};

var startDate = document.getElementById('startDate');

startDate.onchange = function(e){

    var sDate = e.target.value;
    var computedDate = new Date(sDate);
// todo 天數變數
    var endDate = new Date(computedDate.getFullYear(),computedDate.getMonth(),computedDate.getDate()+2);

    var finishDate = document.getElementById('finishDate');
    finishDate.value = endDate.yyyymmdd();
}



// 課程名額
var coursePlus = document.getElementsByClassName("coursePlus")[0];
var courseMinus = document.getElementsByClassName("courseMinus")[0];
var classQuota = document.getElementsByName("classQuota")[0];

coursePlus.addEventListener("click",function(){
    var curNumber = classQuota.value;

    var addNum = ++curNumber;

    classQuota.value = addNum;

},false)


courseMinus.addEventListener("click",function(){
    var curNumber = classQuota.value;
    var minusNum = --curNumber;
    if(minusNum <= 0){
        minusNum = 0;
    }
    classQuota.value = minusNum;

},false)