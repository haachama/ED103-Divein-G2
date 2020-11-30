import $ from 'jquery';


$(function(){
    // hamburger icon 的切換
    $("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $('.nav').toggleClass("show");
        $('.memCart li').toggleClass("show");
        $('header').toggleClass("bg")
    });


    // 回上頁
    $('.cancelBtn').click(function(event){
        event.preventDefault();
        history.back(1);
    })
})

