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
                areas: [
                    {
                        selected: "1", //綠島
                        diveArea: [{key:"海底教堂",value:"1"},{key:"鋼鐵礁",value:"2"}, {key:"石朗大香菇",value:"3"}, {key:"海底大峽谷",value:"4"}, {key:"雞仔礁",value:"5"}],
                    },
                    {
                        selected: "2", //蘭嶼
                        diveArea: [{key:"母雞岩",value:"6"}, {key:"八代灣沉船",value:"7"}, {key:"椰油斷層",value:"8"}, {key:"野銀小峽谷",value:"9"}, {key:"四條溝",value:"10"}],
                    },
                    {
                        selected: "3", //墾丁
                        diveArea: [{key:"後壁湖",value:"11"}, {key:"出水口",value:"12"}, {key:"雙峰藍洞",value:"13"}, {key:"合界",value:"14"}],
                    },
                    {
                        selected: "4", //小琉球
                        diveArea: [{key:"花瓶岩",value:"15"}, {key:"美人洞",value:"16"}, {key:"衫福沈船",value:"17"}, {key:"鎮海艦",value:"18"}, {key:"厚石礁群",value:"19"}],
                    },
                    {
                        selected: "5", //東北角
                        diveArea: [{key:"和美",value:"20"}, {key:"龍洞",value:"21"}, {key:"潮境公園",value:"22"}, {key:"鼻頭角",value:"23"}],
                    }
                ],
                value: "",
                prodRows: "",  //這是ajax的
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
        methods:{
            // console.log("hi")這是測試的

             //------------------------showProducts
                // function showProducts(){
                // 	let html = "<table align='center'>";
                // 	for(let i=0; i<prodRows.length; i++){
                // 		html += `<tr><td>${prodRows[i].pname}</td><td>${prodRows[i].diarySelect}</td><td>${prodRows[i].author}</td><td><img width="50" src="images/${prodRows[i].image}"></td></tr>`;
                // 	}
                // 	html += "</table>";
                // 	document.getElementById("showPanel").innerHTML = html;
                // }
                //------------------------getProducts
                getProducts(){
                    // alert
                    let diarySelect = document.getElementById("diarySelect").value;
                    let diveid = document.getElementsByClassName("diveclass"); //object
                    //for...in
                    //兩個篩選可能都為空，所以要判斷
                    var diaryQueryString ='';
                    var divedQueryString ='';
                    if(diarySelect != null){
                        diaryQueryString =  `&diarySelect=${diarySelect}`;
                    }
                    if(diveid.length > 0){
                        for(var i = 0; i<diveid.length ; i++){
                            
                            if( diveid[i].checked){
                                divedQueryString = `${divedQueryString}"&diveid[]="${diveid[i].value}` //複選的字串串接
                            }
                        }
                    }

                    for(var i=0;i<diveid.length;i++){
                        console.log(diveid[i]);
                    }
                    let xhr = new XMLHttpRequest();
                    xhr.onload = function(){
                        prodRows = JSON.parse(xhr.responseText);
                        // showProducts();
                        console.log(prodRows);
                    }
                    // let url = `diaryQuery.php?diarySelect=${diarySelect}&diveid[]=${diveid}`; //2
                    let url = `diaryQuery.php?${diaryQueryString}${divedQueryString}`;
                    //?diveNo[]=1&diveNo[]=2  --> 這是網頁會印出的結果
                    // let url = `diaryQuery.php?diarySelect=${diarySelect}`;
                    
                    xhr.open("get", url,false);
                    xhr.send(null);	
                }

                // ------------------------filter diarySelect under ???
                // document.getElementById("diarySelect").onchange = getProducts;
                // console.log('--- paul : ' +  document.getElementById("diarySelect").innerHTML)
                // ------------------------filter diveids
                // document.getElementsByClassName("diveclass").onchange = getProducts; //2
            
                // console.log('size : ' +  document.getElementsByClassName("diveclass").length )
                // document.getElementsByClassName("diveclass").onchange = function(){
                // alert('1')
        }
            // }, false),
    });




// $('#diarySelect').on("change",function(){
//     var diarySelect = this.value;
//     console.log("hih")
//     $.ajax({
//         url:`http://localhost/ED103-Divein-G2/app/diaryQuery.php?diarySelect=${diarySelect}`,
//         // url:'diaryQuery.php?diarySelect=' + diarySelect,
//         type: 'GET',
//         dataType: 'text',
//         success: function(data){
//             // var content = "";
//             // console.log("--- paul data : " + data);
//             var result = JSON.parse(data);
//             // for(var i = 0 ; i<result.length ; i++){

//             //     content += "<option value=" +result[i]['diveNo'] +">" + result[i]['diveName']+"</option>"
//             // }
//             // $('.diveNo').html(content);
//             console.log(result);
//         },
//         error: function (data) {
//             console.log('出錯啦 data : ' + JSON.stringify(data));
//         },
//     })
// })




// document.getElementById('diarySelect').addEventListener('onchange',getJson);

//         function getJson(){
//             let diarySelect = document.getElementById("diarySelect").value;
//             fetch(`diaryQuery.php?diarySelect=${diarySelect}`)
//             .then(function(res){
//                     return res.json();
//                 })
//                 .then(function(data){
//                     console.log(data);
//                 })
//             .catch((err) => {console.log(err)});
//         };