// import $ from "jquery";
import {
    TweenMax,
    TimelineMax
} from "gsap";
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
$(function () {
    // 開啟 Modal 彈跳視窗
    $(".mainBtn_2").on("click", function () {
        $(".lightbox-block2").addClass("-openbox");
    });
    // 關閉 Modal
    $(".btn_modal_close").on("click", function () {
        $(".lightbox-block2").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $(".lightbox-block2").removeClass("-openbox -opacity-zero");
        }, 1000);
    });
    $(".submitbtn2").on("click", function () {
        $(".lightbox-block2").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $(".lightbox-block2").removeClass("-openbox -opacity-zero");
        }, 1000);
    });
});
var vm = new Vue({
    el: '.diary_formSelect_vue',
    data() {
        return {
            options: [{
                    value: "1",
                    text: "綠島"
                },
                {
                    value: "2",
                    text: "蘭嶼"
                },
                {
                    value: "3",
                    text: "墾丁"
                },
                {
                    value: "4",
                    text: "小琉球"
                },
                {
                    value: "5",
                    text: "東北角"
                },
            ],
            areas: [{
                    selected: "1", //綠島
                    diveArea: [{
                        key: "海底教堂",
                        value: "1"
                    }, {
                        key: "鋼鐵礁",
                        value: "2"
                    }, {
                        key: "石朗大香菇",
                        value: "3"
                    }, {
                        key: "海底大峽谷",
                        value: "4"
                    }, {
                        key: "雞仔礁",
                        value: "5"
                    }],
                },
                {
                    selected: "2", //蘭嶼
                    diveArea: [{
                        key: "母雞岩",
                        value: "6"
                    }, {
                        key: "八代灣沉船",
                        value: "7"
                    }, {
                        key: "椰油斷層",
                        value: "8"
                    }, {
                        key: "野銀小峽谷",
                        value: "9"
                    }, {
                        key: "四條溝",
                        value: "10"
                    }],
                },
                {
                    selected: "3", //墾丁
                    diveArea: [{
                        key: "後壁湖",
                        value: "11"
                    }, {
                        key: "出水口",
                        value: "12"
                    }, {
                        key: "雙峰藍洞",
                        value: "13"
                    }, {
                        key: "合界",
                        value: "14"
                    }],
                },
                {
                    selected: "4", //小琉球
                    diveArea: [{
                        key: "花瓶岩",
                        value: "15"
                    }, {
                        key: "美人洞",
                        value: "16"
                    }, {
                        key: "衫福沈船",
                        value: "17"
                    }, {
                        key: "鎮海艦",
                        value: "18"
                    }, {
                        key: "厚石礁群",
                        value: "19"
                    }],
                },
                {
                    selected: "5", //東北角
                    diveArea: [{
                        key: "和美",
                        value: "20"
                    }, {
                        key: "龍洞",
                        value: "21"
                    }, {
                        key: "潮境公園",
                        value: "22"
                    }, {
                        key: "鼻頭角",
                        value: "23"
                    }],
                }
            ],
            value: "",
            diveTypeFilter: "",
            diaryCartfor: "",
            diarycountimg:"",
            diveTypes: [{
                    value: "1",
                    type: "旅遊潛水"
                },
                {
                    value: "2",
                    type: "課程潛水"
                },
            ],
            cardData: [{
                courseNo: "1",
                diaryDiveTime: "100",
                diaryName: "四條蘭嶼狂歡夜",
                diaryNo: "1",
                diaryPicsNo: "img/diary/diaryphoto9.png",
                diaryPlayDate: "2020-11-01 17:31:25",
                diaryPoint1: "10",
                diaryPoint2: "45",
                diaryPoint3: "20",
                diaryPoint4: "30",
                diaryPoint5: "5",
                diaryTemp: "18",
                diaryText: "今天的最大重頭戲夜潛看珊瑚產卵，由於下午在眺石看過現場潛伴覺得可能性不高，所以只好轉戰最多人以及最有可能的出水口這個潛點，原本要過來前就覺得應該會是大爆滿的人果真一到現場停車一看就是滿滿像是夜市般的熱鬧，水下更是精彩，從水面上看過去水下的手電筒光芒四射呢，不過也想著這應該會很慘才是，果不其然水下的人太多了，雖然夜潛的能見度本來就不是說多好，但是太多的人就容易揚沙起來，整個畫面都是沙粒。夜潛的許多常見的生物晚上都會出來見個面，寄居蟹、海膽、螺類，最幸福的是又看到一顆大法螺。",
                diaryTimePoint1: "5",
                diaryTimePoint2: "5",
                diaryTimePoint3: "5",
                diaryTimePoint4: "5",
                diaryTimePoint5: "5",
                diaryType: "1",
                diaryVisibility: "20",
                diaryWaterTemp: "31",
                diaryWeather: "1",
                diaryWriteDate: "2020-11-05",
                diveAreaName: "蘭嶼",
                diveName: "四條溝",
                diveNo: "10",
                memAvatar: "testg2.jpg",
                memName: "testg2",
                memNo: "1",
            }]
        };
    },
    mounted() {
        axios.get("diaryQuery.php").then(
            data => {
                console.log(data);
                this.cardData = data.data
            }),
        axios.get("diaryQuerytotal.php").then(
            idata => {
                console.log(idata);
                this.imgData = idata.data
            })
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
    watch: {
        diveTypeFilter: function () {
            console.log("還沒寫完");
        }
    },
    methods: {
        maxDepth() {
            let numMax = [this.cardData.diaryPoint1 , this.cardData.diaryPoint2 , this.cardData.diaryPoint3 , this.cardData.diaryPoint4 , this.cardData.diaryPoint5];
            return Math.max(numMax);
            // console.log(this);
        },
        avgDepth(){
            return (this.cardData.diaryPoint1 + this.cardData.diaryPoint2 + this.cardData.diaryPoint3 + this.cardData.diaryPoint4 + this.cardData.diaryPoint5)/5;
        }
        // console.log("hi")這是測試的
    }

});


