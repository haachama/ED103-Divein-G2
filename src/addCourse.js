import $ from 'jquery';
require("./jquery.ripples.js");
var courseNo = 0;
var computedDate = "";
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

            courseNo = $(this).find('[type="radio"]')[0].value - 1;

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

var courseDate = document.getElementById('courseDate');

courseDate.onchange = function(e){
    
    var cDate = e.target.value;
    computedDate = new Date(cDate);
    
    var finishDate = new Date(computedDate.getFullYear(),computedDate.getMonth(),computedDate.getDate() + parseInt(courseNo));
    
    var endDate = document.getElementById('endDate');
    endDate.value = finishDate.yyyymmdd();
}

var startDate = document.getElementById('startDate');
startDate.onchange = function(e){
    var sDate = e.target.value;
    var computedSDate = new Date(sDate);

    var deadlineDay = new Date(computedSDate.getFullYear(),computedSDate.getMonth(),computedDate.getDate() - 1);

    var deadLine = document.getElementById('deadLine');
    deadLine.value = deadlineDay.yyyymmdd();
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


