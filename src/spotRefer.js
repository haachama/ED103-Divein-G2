import $ from 'jquery';
import {TweenMax,TimelineMax} from 'gsap';
import Swal from 'sweetalert2';

$(function(){

    //bubbleBtn
    $('.button--bubble').each(function () {
        var $circlesTopLeft = $(this).parent().find('.circle.top-left');
        var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');
    
        var tl = new TimelineMax();
        var tl2 = new TimelineMax();
    
        var btTl = new TimelineMax({
            paused: true
        });
    
        tl.to($circlesTopLeft, 1.2, {
            x: -25,
            y: -25,
            scaleY: 2,
            ease: SlowMo.ease.config(0.1, 0.7, false)
        });
        tl.to($circlesTopLeft.eq(0), 0.1, {
            scale: 0.2,
            x: '+=6',
            y: '-=2'
        });
        tl.to($circlesTopLeft.eq(1), 0.1, {
            scaleX: 1,
            scaleY: 0.8,
            x: '-=10',
            y: '-=7'
        }, '-=0.1');
        tl.to($circlesTopLeft.eq(2), 0.1, {
            scale: 0.2,
            x: '-=15',
            y: '+=6'
        }, '-=0.1');
        tl.to($circlesTopLeft.eq(0), 1, {
            scale: 0,
            x: '-=5',
            y: '-=15',
            opacity: 0
        });
        tl.to($circlesTopLeft.eq(1), 1, {
            scaleX: 0.4,
            scaleY: 0.4,
            x: '-=10',
            y: '-=10',
            opacity: 0
        }, '-=1');
        tl.to($circlesTopLeft.eq(2), 1, {
            scale: 0,
            x: '-=15',
            y: '+=5',
            opacity: 0
        }, '-=1');
    
        var tlBt1 = new TimelineMax();
        var tlBt2 = new TimelineMax();
    
        tlBt1.set($circlesTopLeft, {
            x: 0,
            y: 0,
            rotation: -45
        });
        tlBt1.add(tl);
    
        tl2.set($circlesBottomRight, {
            x: 0,
            y: 0
        });
        tl2.to($circlesBottomRight, 1.1, {
            x: 30,
            y: 30,
            ease: SlowMo.ease.config(0.1, 0.7, false)
        });
        tl2.to($circlesBottomRight.eq(0), 0.1, {
            scale: 0.2,
            x: '-=6',
            y: '+=3'
        });
        tl2.to($circlesBottomRight.eq(1), 0.1, {
            scale: 0.8,
            x: '+=7',
            y: '+=3'
        }, '-=0.1');
        tl2.to($circlesBottomRight.eq(2), 0.1, {
            scale: 0.2,
            x: '+=15',
            y: '-=6'
        }, '-=0.2');
        tl2.to($circlesBottomRight.eq(0), 1, {
            scale: 0,
            x: '+=5',
            y: '+=15',
            opacity: 0
        });
        tl2.to($circlesBottomRight.eq(1), 1, {
            scale: 0.4,
            x: '+=7',
            y: '+=7',
            opacity: 0
        }, '-=1');
        tl2.to($circlesBottomRight.eq(2), 1, {
            scale: 0,
            x: '+=15',
            y: '-=5',
            opacity: 0
        }, '-=1');
    
        tlBt2.set($circlesBottomRight, {
            x: 0,
            y: 0,
            rotation: 45
        });
        tlBt2.add(tl2);
    
        btTl.add(tlBt1);
        btTl.to($(this).parent().find('.button.effect-button'), 0.8, {
            scaleY: 1.1
        }, 0.1);
        btTl.add(tlBt2, 0.2);
        btTl.to($(this).parent().find('.button.effect-button'), 1.8, {
            scale: 1,
            ease: Elastic.easeOut.config(1.2, 0.4)
        }, 1.2);
    
        btTl.timeScale(2.6);
    
        $(this).on('mouseover', function () {
            btTl.restart();
        });
    });

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



    //即時氣象頁籤功能
    $("a.weathers").on("click", function(w){
        w.preventDefault();
    
        $(this).closest(".weather_list").find("a.weathers").removeClass("-iAmHere");
        $(this).addClass("-iAmHere");
        
        $("div.weather_block").removeClass("-iAmHere");
        $("div.weather_block." + $(this).attr("data-target")).addClass("-iAmHere");
    });


    //踩點－會員只能點擊一次
    var spotImgHereList = document.getElementById("spotImgHereList");
    var hereAddBtn = document.querySelectorAll(".hereAddBtn");

    function addOneImg(index){
        let newLi = document.createElement('li');
        let image = document.createElement('img');
        image.src = `../../img/spot/spotGiLittle-03.png`;
        newLi.appendChild(image);
        spotImgHereList.appendChild(newLi);
        hereAddBtn[index].style.backgroundColor = "#221814";
        hereAddBtn[index].style.border = "#221814";
        Swal.fire("感謝您的點擊", "讓此潛點更加熱門", "success");
        hereAddBtn.removeEventListener("click",addOneImg ,false);
    };

    for(let i =0;i<hereAddBtn.length;i++){
        hereAddBtn[i].addEventListener("click",function(){
            addOneImg(i)
        });
    }

    //潛點內頁-rwd 頁籤介紹
    $("a.spotRefrList").on("click", function(rs){
        rs.preventDefault();
    
        $(this).closest(".spotRefreTab_rwd").find("a").removeClass("spotShow");
        $(this).closest("a").addClass("spotShow");
        
        $("section").removeClass("spotShow");
        $("section." + $(this).attr("data-target")).addClass("spotShow");
    });

    //檢舉燈箱
     // 開啟 Modal 彈跳視窗
    $("i.fa-exclamation-circle").on("click", function(){
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


    //載入更多按鈕
    // $(function(){
    //     /*初始化*/
    //     var counter = 0; /*計數器*/
    //     var pageStart = 0; /*offset*/
    //     var pageSize = 4; /*size*/
    //     /*首次載入*/
    //     getData(pageStart, pageSize);
    //     /*監聽載入更多*/
    //     $(document).on('click', '.js-load-more', function(){
    //     counter   ;
    //     pageStart = counter * pageSize;
    //     getData(pageStart, pageSize);
    //     });
    // });

});