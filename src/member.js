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
});

$(function () {
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
});
$(function () {
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
});

$(function () {
    //刪除
    $(".DelDia").click(function(){
        $(this).parent('div').parent('div').parent('div').remove();
    });

    $(".DelFav").click(function(){
        $(this).parent('div').parent('div').parent('div').remove();
    });
});


//map
(function($){
    $(document).ready(function(){
        //標註
        var layer = new ol.layer.Vector({
            source: new ol.source.Vector()
        })
        // 創建一個Feature，並設好在地圖上的位置
        var anchor = new ol.Feature({
            geometry: new ol.geom.Point([120.365428, 22.344879])
        });
        // 設置樣式，在樣式中設置圖標
        anchor.setStyle(new ol.style.Style({
            image: new ol.style.Icon({
            src: './img/member/tag/Shinnosuke4.png',
            // anchor: [0.5, 0.9],  //錨點位置
            // rotation: Math.PI / 4,   //傾斜
            })
        }));

        // var i = 0;
        // var j = 45;

        // iconFeature.setStyle(function () {
        //     var x = Math.sin((i * Math.PI) / 180) * 3;
        //     var y = Math.sin((j * Math.PI) / 180) * 4;
        //     anchor.getImage().setScale([x, y]);
        //     anchor.getText().setScale([x, y]);
        //     return anchor;
        // });
        
        // 添加到之前的創建的layer中去
        layer.getSource().addFeature(anchor);


        //地圖位置
        $('#mapIdSLC').height(window.innerHeight);
        $('#mapIdKD').height(window.innerHeight);
        $('#mapIdLD').height(window.innerHeight);
        $('#mapIdLU').height(window.innerHeight);
        $('#mapIdDBG').height(window.innerHeight);

        //小琉球
        var mapIdSLC = new ol.Map({
            target: 'mapIdSLC',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              }),
              layer
            ],
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [120.375456, 22.329162],
                zoom: 13.5
            })
        });

        // 墾丁
        var mapIdKD = new ol.Map({
            target: 'mapIdKD',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([120.797, 21.917294]),
              zoom: 11.5
            })
        });

        // 綠島
        var mapIdLD = new ol.Map({
            target: 'mapIdLD',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([121.492165, 22.642492]),
              zoom: 13
            })
        });

        // 蘭嶼
        var mapIdLU = new ol.Map({
            target: 'mapIdLU',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([121.546533, 22.012993]),
              zoom: 12
            })
        });

        // 東北角
        var mapIdDBG = new ol.Map({
            target: 'mapIdDBG',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([121.944693, 24.968898]),
              zoom: 10
            })
        });

        //讓頁簽中的地圖顯示
        $(".memberTab").click(function(){
            mapIdSLC.hidden = false;
            mapIdKD.hidden = false;
            mapIdLD.hidden = false;
            mapIdLU.hidden = false;
            mapIdDBG.hidden = false;

            mapIdSLC.updateSize();
            mapIdKD.updateSize();
            mapIdLD.updateSize();
            mapIdLU.updateSize();
            mapIdDBG.updateSize();
        });

        $(".memberTagTab.SLC").click(function(){
            mapIdSLC.hidden = false;
            mapIdSLC.updateSize();
        });
        $(".memberTagTab.KD").click(function(){
            mapIdKD.hidden = false;
            mapIdKD.updateSize();
        });
        $(".memberTagTab.LD").click(function(){
            mapIdLD.hidden = false;
            mapIdLD.updateSize();
        });
        $(".memberTagTab.LU").click(function(){
            mapIdLU.hidden = false;
            mapIdLU.updateSize();
        });
        $(".memberTagTab.DBG").click(function(){
            mapIdDBG.hidden = false;
            mapIdDBG.updateSize();
        });

        //標註
    });
})($)

   $(function () {
       //課程評鑑星星

        $(".StarOne").click(function(){
            $(".pointCheckColor").css("width","40px");
        });

        $(".StarTwo").click(function(){
            $(".pointCheckColor").css("width","80px");
        });

        $(".StarThree").click(function(){
            $(".pointCheckColor").css("width","120px");
        });

        $(".StarFour").click(function(){
            $(".pointCheckColor").css("width","160px");
        });

        $(".StarFive").click(function(){
            $(".pointCheckColor").css("width","198px");
        });

        $(".btn_modal_close").click(function(){
            setTimeout(function(){
                $(".pointCheckColor").css("width","0px");
            },1000);
        });
   });