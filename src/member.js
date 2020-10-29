import $ from "jquery";
// import {TweenMax, TimelineMax} from "gsap";

$(function () {
    //導覽頁
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

    //大頁簽
    $("a.memberTab").on("click", function(e){
        e.preventDefault();
        
        $(this).closest("ul").find("a.memberTab").removeClass("-on");
        $(this).addClass("-on");

        $(".memberInfor").hide();
        
        $("div.memberTab").removeClass("-on");
        $("div.memberTab." + $(this).attr("data-target")).addClass("-on");
    });
    
    //小頁簽
    $("a.memberTagTab").on("click", function(e){
        e.preventDefault();

        $(this).closest("ul").find("a.memberTagTab").removeClass("-on");
        $(this).addClass("-on");

        $("div.memberTagTab").removeClass("-on");
        $("div.memberTagTab." + $(this).attr("data-target")).addClass("-on");
    });

    //會員資料頁簽
    var memberIF = $(".memberIF");
    var memberIFC = $(".memberIFC");
    var memberPSC = $(".memberPSC");
    var memberLIC = $(".memberLIC");

    $('.show_mif').click(function(){
        if(memberIF.hide()){
            memberIF.show();
            memberIFC.hide();
            memberPSC.hide();
            memberLIC.hide();
            $("a.memberTab").removeClass("-on");
            $("div.memberTab").removeClass("-on");
        }
    })
    $('.show_cmif').click(function(){
        if(memberIFC.hide()){
            memberIF.hide();
            memberIFC.show();
            memberPSC.hide();
            memberLIC.hide();
            $("a.memberTab").removeClass("-on");
            $("div.memberTab").removeClass("-on");
        }
    })
    $('.show_cpw').click(function(){
        if(memberIFC.hide()){
            memberIF.hide();
            memberIFC.hide();
            memberPSC.show();
            memberLIC.hide();
            $("a.memberTab").removeClass("-on");
            $("div.memberTab").removeClass("-on");
        }
    })
    $('.show_cli').click(function(){
        if(memberIFC.hide()){
            memberIF.hide();
            memberIFC.hide();
            memberPSC.hide();
            memberLIC.show();
            $("a.memberTab").removeClass("-on");
            $("div.memberTab").removeClass("-on");
        }
    })

    //燈箱
    // 開啟 Modal 彈跳視窗
    $(".mainBtn_3").on("click", function(){
        $(".lightbox-block3").addClass("-openbox");
    });
    // 關閉 Modal
    $(".btn_modal_close").on("click", function(){
        $(".lightbox-block3").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function(){
            $(".lightbox-block3").removeClass("-openbox -opacity-zero");
        }, 1000);
    });
    $(".submitbtn3").on("click", function(){
        $(".lightbox-block3").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function(){
            $(".lightbox-block3").removeClass("-openbox -opacity-zero");
        }, 1000);
    });

    //bubble按鈕
    // $('.button--bubble').each(function () {
    //     var $circlesTopLeft = $(this).parent().find('.circle.top-left');
    //     var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');
    
    //     var tl = new TimelineMax();
    //     var tl2 = new TimelineMax();
    
    //     var btTl = new TimelineMax({
    //         paused: true
    //     });
    
    //     tl.to($circlesTopLeft, 1.2, {
    //         x: -25,
    //         y: -25,
    //         scaleY: 2,
    //         ease: SlowMo.ease.config(0.1, 0.7, false)
    //     });
    //     tl.to($circlesTopLeft.eq(0), 0.1, {
    //         scale: 0.2,
    //         x: '+=6',
    //         y: '-=2'
    //     });
    //     tl.to($circlesTopLeft.eq(1), 0.1, {
    //         scaleX: 1,
    //         scaleY: 0.8,
    //         x: '-=10',
    //         y: '-=7'
    //     }, '-=0.1');
    //     tl.to($circlesTopLeft.eq(2), 0.1, {
    //         scale: 0.2,
    //         x: '-=15',
    //         y: '+=6'
    //     }, '-=0.1');
    //     tl.to($circlesTopLeft.eq(0), 1, {
    //         scale: 0,
    //         x: '-=5',
    //         y: '-=15',
    //         opacity: 0
    //     });
    //     tl.to($circlesTopLeft.eq(1), 1, {
    //         scaleX: 0.4,
    //         scaleY: 0.4,
    //         x: '-=10',
    //         y: '-=10',
    //         opacity: 0
    //     }, '-=1');
    //     tl.to($circlesTopLeft.eq(2), 1, {
    //         scale: 0,
    //         x: '-=15',
    //         y: '+=5',
    //         opacity: 0
    //     }, '-=1');
    
    //     var tlBt1 = new TimelineMax();
    //     var tlBt2 = new TimelineMax();
    
    //     tlBt1.set($circlesTopLeft, {
    //         x: 0,
    //         y: 0,
    //         rotation: -45
    //     });
    //     tlBt1.add(tl);
    
    //     tl2.set($circlesBottomRight, {
    //         x: 0,
    //         y: 0
    //     });
    //     tl2.to($circlesBottomRight, 1.1, {
    //         x: 30,
    //         y: 30,
    //         ease: SlowMo.ease.config(0.1, 0.7, false)
    //     });
    //     tl2.to($circlesBottomRight.eq(0), 0.1, {
    //         scale: 0.2,
    //         x: '-=6',
    //         y: '+=3'
    //     });
    //     tl2.to($circlesBottomRight.eq(1), 0.1, {
    //         scale: 0.8,
    //         x: '+=7',
    //         y: '+=3'
    //     }, '-=0.1');
    //     tl2.to($circlesBottomRight.eq(2), 0.1, {
    //         scale: 0.2,
    //         x: '+=15',
    //         y: '-=6'
    //     }, '-=0.2');
    //     tl2.to($circlesBottomRight.eq(0), 1, {
    //         scale: 0,
    //         x: '+=5',
    //         y: '+=15',
    //         opacity: 0
    //     });
    //     tl2.to($circlesBottomRight.eq(1), 1, {
    //         scale: 0.4,
    //         x: '+=7',
    //         y: '+=7',
    //         opacity: 0
    //     }, '-=1');
    //     tl2.to($circlesBottomRight.eq(2), 1, {
    //         scale: 0,
    //         x: '+=15',
    //         y: '-=5',
    //         opacity: 0
    //     }, '-=1');
    
    //     tlBt2.set($circlesBottomRight, {
    //         x: 0,
    //         y: 0,
    //         rotation: 45
    //     });
    //     tlBt2.add(tl2);
    
    //     btTl.add(tlBt1);
    //     btTl.to($(this).parent().find('.button.effect-button'), 0.8, {
    //         scaleY: 1.1
    //     }, 0.1);
    //     btTl.add(tlBt2, 0.2);
    //     btTl.to($(this).parent().find('.button.effect-button'), 1.8, {
    //         scale: 1,
    //         ease: Elastic.easeOut.config(1.2, 0.4)
    //     }, 1.2);
    
    //     btTl.timeScale(2.6);
    
    //     $(this).on('mouseover', function () {
    //         btTl.restart();
    //     });
    // });
});