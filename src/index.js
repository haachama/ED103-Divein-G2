import $ from 'jquery';
import Parallax from 'parallax-js';
import TimelineMax from 'gsap';


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

    $('.memCart li:first-child').addClass("hide");


    // bubbleBtn

    const {
        TweenMax,
        TimelineMax
    } = require("gsap");

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


    // courseList
    $('.post-module').hover(function () {
        $(this).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
        }, 100);
    });

});

// detectLight
var light = document.getElementsByClassName("light")[0];
var courseBox = document.getElementsByClassName("courseBox");

function stopAnimation(){
    light.style.animationPlayState = 'paused';
}

courseBox[0].addEventListener("mouseenter", function () {
    light.style.height = "85%";
    light.style.transform = "rotate(50deg)";
    stopAnimation()
}, false)

courseBox[1].addEventListener("mouseenter", function () {
    light.style.height = "65%";
    light.style.transform = "rotate(30deg)";
    stopAnimation()
}, false)

courseBox[2].addEventListener("mouseenter", function () {
    light.style.height = "65%";
    light.style.transform = "rotate(-5deg)";
    stopAnimation()
}, false)

courseBox[3].addEventListener("mouseenter", function () {
    light.style.height = "72%";
    light.style.transform = "rotate(-35deg)";
    stopAnimation()
}, false)


for (let i = 0; i < courseBox.length; i++) {
    courseBox[i].addEventListener("mouseleave", function () {
        light.style.animationPlayState = 'running';
    }, false)
}


// parallax fish
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

$('.fishBallon').css({
    top: '130px',
    left: '30px',
    display: 'inline-block'
})

$('.fishTurtle').css({
    top: '100px',
    left: '350px',
})

$('.fishGold').css({
    top: '190px',
    left: '150px',
})

$('.fishNemo').css({
    top: '200px',
    left: '450px',
})

var pixel = document.body.clientWidth;

window.addEventListener('resize', mobileFish());

function mobileFish() {
    if (pixel < 991) {
        $('.fishNemo').css({
            display: 'none',
        })
        $('.fishTurtle').css({
            top: '150px',
            left: '250px'
        })
    }
}

mobileFish();