// import $ from "jquery";
import {TweenMax, TimelineMax} from "gsap";
import Vue from "vue";
// import TimelineMax from "gsap";


$(function () {
    $(function ($) {
    //自己的JS
        "use strict";
        document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
            t.style.left = n.clientX + "px",
                t.style.top = n.clientY + "px",
                e.style.left = n.clientX + "px",
                e.style.top = n.clientY + "px",
                i.style.left = n.clientX + "px",
                i.style.top = n.clientY + "px"
        });
        var t = document.getElementById("cursor"),
            e = document.getElementById("cursor2"),
            i = document.getElementById("cursor3");
        function n(t) {
            e.classList.add("hover"), i.classList.add("hover")
        }
        function s(t) {
            e.classList.remove("hover"), i.classList.remove("hover")
        }
        s();
        for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
            o(r[a])
        }
        function o(t) {
            t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
        }
        $(document).ready(function () {
            /* Hero Case study images */
            $('.case-study-name:nth-child(1)').on('mouseenter', function () {
                $('.case-study-name.active').removeClass('active');
                $('.case-study-images li.show').removeClass("show");
                $('.case-study-images li:nth-child(1)').addClass("show");
                $('.case-study-name:nth-child(1)').addClass('active');
            })
            $('.case-study-name:nth-child(2)').on('mouseenter', function () {
                $('.case-study-name.active').removeClass('active');
                $('.case-study-images li.show').removeClass("show");
                $('.case-study-images li:nth-child(2)').addClass("show");
                $('.case-study-name:nth-child(2)').addClass('active');
            })
            $('.case-study-name:nth-child(3)').on('mouseenter', function () {
                $('.case-study-name.active').removeClass('active');
                $('.case-study-images li.show').removeClass("show");
                $('.case-study-images li:nth-child(3)').addClass("show");
                $('.case-study-name:nth-child(3)').addClass('active');
            })
            $('.case-study-name:nth-child(4)').on('mouseenter', function () {
                $('.case-study-name.active').removeClass('active');
                $('.case-study-images li.show').removeClass("show");
                $('.case-study-images li:nth-child(4)').addClass("show");
                $('.case-study-name:nth-child(4)').addClass('active');
            })
            $('.case-study-name:nth-child(5)').on('mouseenter', function () {
                $('.case-study-name.active').removeClass('active');
                $('.case-study-images li.show').removeClass("show");
                $('.case-study-images li:nth-child(5)').addClass("show");
                $('.case-study-name:nth-child(5)').addClass('active');
            })
            $('.case-study-name:nth-child(1)').trigger('mouseenter')
        });
        //Switch dark/light
        $("#switch").on('click', function () {
            if ($("body").hasClass("light")) {
                $("body").removeClass("light");
                $("#switch").removeClass("switched");
            } else {
                $("body").addClass("light");
                $("#switch").addClass("switched");
            }
        });
    })(jQuery);
});
$(function () {
    // hamburger icon 的切換
    $("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $('.nav').slideToggle("show");
        $('.memCart li').toggleClass("show");
        $('header').toggleClass("bg")
    });
});
$(function () {
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
$(function () {    
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

});
$(function(){
    // 開啟 Modal 彈跳視窗
    $(".mainBtn_2").on("click", function(){
        $(".lightbox-block2").addClass("-openbox");
    });
    // 關閉 Modal
    $(".btn_modal_close").on("click", function(){
        $(".lightbox-block2").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
            setTimeout(function(){
            $(".lightbox-block2").removeClass("-openbox -opacity-zero");
            }, 1000);
        });
    $(".submitbtn2").on("click", function(){
        $(".lightbox-block2").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function(){
            $(".lightbox-block2").removeClass("-openbox -opacity-zero");
        }, 1000);
    });
});
var vm = new Vue({
        el: '.diary_formSelect',
        data() {
            return {
                options: [
                    {
                        value: "東北角",
                        text: "東北角"
                    },
                    {
                        value: "墾丁",
                        text: "墾丁"
                    },
                    {
                        value: "小琉球",
                        text: "小琉球"
                    },
                    {
                        value: "綠島",
                        text: "綠島"
                    },
                    {
                        value: "蘭嶼",
                        text: "蘭嶼"
                    },
                ],
                areas: [{
                        selected: "東北角",
                        diveArea: [{key:"和美",value:"和美"}, {key:"龍洞",value:"龍洞"}, {key:"潮境公園",value:"潮境公園"}, {key:"鼻頭角",value:"鼻頭角"}],
                    },
                    {
                        selected: "墾丁",
                        diveArea: [{key:"後壁湖",value:"後壁湖"}, {key:"出水口",value:"出水口"}, {key:"雙峰藍洞",value:"雙峰藍洞"}, {key:"北岸花園",value:"北岸花園"}],
                    }, {
                        selected: "小琉球",
                        diveArea: [{key:"花瓶岩",value:"花瓶岩"}, {key:"美人洞",value:"美人洞"}, {key:"衫福沈船",value:"衫福沈船"}, {key:"鎮海艦",value:"鎮海艦"}, {key:"厚石礁群",value:"厚石礁群"}],
                    },
                    {
                        selected: "綠島",
                        diveArea: [{key:"海底教堂",value:"海底教堂"},{key:"鋼鐵礁",value:"鋼鐵礁"}, {key:"石朗大香菇",value:"石朗大香菇"}, {key:"海底大峽谷",value:"海底大峽谷"}, {key:"雞仔礁",value:"雞仔礁"}],
                    },
                    {
                        selected: "蘭嶼",
                        diveArea: [{key:"母雞岩",value:"母雞岩"}, {key:"八代灣沉船",value:"八代灣沉船"}, {key:"椰油斷層",value:"椰油斷層"}, {key:"野銀小峽谷",value:"野銀小峽谷"}, {key:"四條溝",value:"四條溝"}],
                    },
                ],
                value: "",
            };
        },
        computed: {
            show() {
                if (this.value == "") {
                    return [];
                } else {

                    // for (let index = 0; index < this.areas.length; index++) {
                    //   const element = this.areas[index];
                    //   if (element.selected == this.value) {
                    //     return element.diveArea;
                    //   }
                    // }
                    return this.areas.filter((x) => x.selected == this.value)[0].diveArea;
                }
            },
        },
    });