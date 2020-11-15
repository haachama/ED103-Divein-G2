import $ from 'jquery';

$(function () {

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

    // 頁籤
    $("a.tab").on("click", function (e) {
        e.preventDefault();

        $(this).closest("ul").find("a.tab").removeClass("-on");
        $(this).addClass("-on");

        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
    });


    // lightbox 5-2  查看名單
    $(".nameBtn").on("click", function () {
        console.log("hhihihihi");
        $(".lightbox-nameList").addClass("-openbox");
    });

    // 關閉 Modal
    $(".nameClose").on("click", function () {
        $(".lightbox-nameList").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $(".lightbox-nameList").removeClass("-openbox -opacity-zero");
        }, 1000);
    });


    // lightbox 5-2  審核名單
    $(".finishBtn").on("click", function () {
        console.log("hhihihihi");
        $(".lightbox-auditList").addClass("-openbox");
    });

    // 關閉 Modal
    $(".auditClose").on("click", function () {
        $(".lightbox-auditList").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $(".lightbox-auditList").removeClass("-openbox -opacity-zero");
        }, 1000);
    });


});