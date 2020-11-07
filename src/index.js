import $ from 'jquery';
import Parallax from 'parallax-js';
import TimelineMax from 'gsap';
import ScrollMagic from 'scrollmagic';

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


    // 天氣API
    $.ajax({
        // 鄉鎮天氣預報 台東未來兩天，找天氣現象、風向、溫度
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-037?Authorization=CWB-C6DB23CC-726E-4EC0-A9D4-D9549C2F2C12&format=JSON',
        type: 'GET',
        dataType: 'json',
        success: function (data) { // request成功取得回應後執行

            let location = data.records.locations[0].location; //找到location這個陣列，為什麼要找location? 因為他有台東縣各個鄉鎮的資料

            for (var i = 0; i < location.length; i++) {    //跑迴圈找location陣列的第幾個房間是綠島鄉的

                if (location[i].geocode == "1001411") {    //如果是綠島鄉的話

                    let weatherElement = location[i].weatherElement;    //找到綠島鄉的weatherElement(它是陣列)

                    for (var j = 0; j < weatherElement.length; j++) {   //跑迴圈找weatherElement陣列的第幾個房間是Wx(天氣現象)、WD(風向)、T(溫度)
                        
                        if (weatherElement[j].elementName == "Wx") {    //如果是天氣現象的話

                            var weatherString = weatherElement[j].time[0].elementValue[0].value;   //取出天氣現象物件的time陣列，此API會將送出請求的時間區段的下一個時間區段(預報)擺在第一個房間，所以可寫死time[0]，取出裡面的elementValue陣列的第一個物件的value

                            // 檢查回傳的值是晴雨雲陰哪種天氣，加上對應的fontawesome圖示，
                            if (weatherString.indexOf("晴") >= 0) {  
                                $(".weatherString").addClass("fa-sun")
                            } else if (weatherString.indexOf("雨") >= 0) {
                                $(".weatherString").addClass("fa-cloud-showers-heavy")
                            } else if (weatherString.indexOf("雲") >= 0) {
                                $(".weatherString").addClass("fa-cloud")
                            } else if (weatherString.indexOf("陰") >= 0) {
                                $(".weatherString").addClass("fa-cloud")
                            }

                            $(".weatherString").html("&nbsp;" + weatherString)

                        }


                        if (weatherElement[j].elementName == "WD") {  //如果是風向的話

                            var faWind = weatherElement[j].time[1].elementValue[0].value;

                            $(".fa-wind").html("&nbsp;" + faWind)
                        }

                        if (weatherElement[j].elementName == "T") {   //如果是溫度的話

                            var faTemperatureHigh = weatherElement[j].time[0].elementValue[0].value;

                            $(".fa-temperature-high").html("&nbsp;" + faTemperatureHigh + "&#8451;")
                        }
                    }

                }
            }

        },
        error() {
            $(".weatherString").html("--")
            $(".fa-wind").html("--")
            $(".fa-temperature-high").html("--")
        },
    });

    var timeN = new Date();
    var timeGetTime = timeN.getTime();
    var timeFormat =
        `${timeN.getFullYear()}/${timeN.getMonth()+1}/${timeN.getDate()} ${timeN.getHours()}:${timeN.getMinutes()}:${timeN.getSeconds()}`;
    $('#timeNow').html(timeFormat)


    $.ajax({
        // 浮標站監測資料，找浪高
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0018-001?Authorization=CWB-C6DB23CC-726E-4EC0-A9D4-D9549C2F2C12',
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            let location = data.records.location;   //找到location這個陣列，為什麼要找location? 因為他有各個浮標的資料

            for (var i = 0; i < location.length; i++) {
                if (location[i].stationId == "WRA007") {
                    var taiTung = data.records.location[i];    //找到location裡面放臺東浮標資料的索引，存進 taiTung這個變數
                }
            }

            let observe = taiTung.time;   //找到臺東浮標資料的物件裡面的time(是陣列)，裡面有每個小時的浪高資訊

            var topObserve = null;   //在這邊插一個旗子是空值，之後用來辨識

            // 因為此API回傳的時間沒有排序，我們得自己排序
            observe = observe.sort(function (a, b) {
                return a.obsTime > b.obsTime ? -1 : 1;    //讓他依照obsTime排序，由大到小排
            });
            //**排序後第一個時間為最大，第一個為最靠近現在的時間
            topObserve = observe[0];
   
            if (topObserve != null) {

                let weatherElement = topObserve.weatherElement;   //taiTung.time[0].weatherElement

                for(var j=0; j<weatherElement.length; j++){
                    if(weatherElement[j].elementName == "浪高"){

                        var faWater = topObserve.weatherElement[j].elementValue / 100;
                        $(".fa-water").html("&nbsp;" + faWater + "m");
                    }
                }
            }
        }
    });


    // courseList
    $('.post-module').hover(function () {
        $(this).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
        }, 100);
    });

    // shop lightbox
    // 開啟 Modal 彈跳視窗
    $(".shopBtn").on("click", function(){
        $(".lightbox-block2.shopDemo").addClass("-openbox");
    });

    // 關閉 Modal
    $(".btn_modal_close").on("click", function(){
        $(".lightbox-block2.shopDemo").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
            setTimeout(function(){
            $(".lightbox-block2.shopDemo").removeClass("-openbox -opacity-zero");
            }, 1000);
    });
 

});

// detectLight
var light = document.getElementsByClassName("light")[0];
var courseBox = document.getElementsByClassName("courseBox");

function stopAnimation() {
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


// shop draw line
// var controller = new ScrollMagic.Controller();

// var drawLine = new TimelineMax();
// drawLine.to('.mask .line', 0.5, {
//     backgroundSize: "100% 100%"
// }).to('.watch .line', 0.5, {
//     backgroundSize: "100% 100%"
// }).to('.gloves .line', 0.5, {
//     backgroundSize: "100% 100%"
// }).to('.frogshoes .line', 0.5, {
//     backgroundSize: "100% 100%"
// })

// var scense011 = new ScrollMagic.Scene({
//     triggerElement:'#triggerShop',
//     triggerHook: 0.5,     //調整觸發點的位置，0(top) ~ 1(bottom) 之間，預設是0.5
//     reverse: false,      //動畫執行完不返回原點，預設為true
// }).setTween(drawLine).addIndicators().addTo(controller);