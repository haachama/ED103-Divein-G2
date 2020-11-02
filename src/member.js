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
        $('#mapIdSLC').height(window.innerHeight);
        $('#mapIdKD').height(window.innerHeight);
        $('#mapIdLD').height(window.innerHeight);
        $('#mapIdLU').height(window.innerHeight);
        $('#mapIdDBG').height(window.innerHeight);

        var mapIdSLC = new ol.Map({
            target: 'mapIdSLC',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([120.381201, 22.354354]),
              zoom: 13.5
            })
        });
        var mapIdKD = new ol.Map({
            target: 'mapIdKD',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([120.797, 21.98]),
              zoom: 12
            })
        });
        var mapIdLD = new ol.Map({
            target: 'mapIdLD',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([121.47500, 22.65889]),
              zoom: 13
            })
        });
        var mapIdLU = new ol.Map({
            target: 'mapIdLU',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([121.5324732, 22.0567358]),
              zoom: 12
            })
        });
        var mapIdDBG = new ol.Map({
            target: 'mapIdDBG',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([121.944693, 25.016698]),
              zoom: 12
            })
        });


        // var mapIdSLC = L.map('mapIdSLC').setView([22.3386444, 120.3698176], 9); 
        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		// attribution: '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> | <a href="https://noob.tw/openstreetmap/">Tutorial 教學</a>',
		// maxZoom: 18,
        // }).addTo(mapIdSLC);

        
        // var mapIdSLC = L.map('mapIdSLC', {
        //     center: [22.354354, 120.381201],
        //     zoom: 14
        // });
        // var mapIdKD = L.map('mapIdKD', {
        //     center: [21.98, 120.797],
        //     zoom: 14
        // });
        // var mapIdLD = L.map('mapIdLD', {
        //     center: [22.65889, 121.47500],
        //     zoom: 14
        // });
        // var mapIdLU = L.map('mapIdLU', {
        //     center: [22.0567358, 121.5324732],
        //     zoom: 14
        // });
        // var mapIdDBG = L.map('mapIdDBG', {
        //     center: [25.016698, 121.944693],
        //     zoom: 14
        // });

        // var mapIdSLC = L.map('mapIdSLC', {
        //     center: [22.3386444, 120.3698176], // 中心點座標
        //     zoom: 14, // 0 - 18
        //     attributionControl: true, // 是否秀出「leaflet」的貢獻標記
        //     zoomControl: true , // 是否秀出 - + 按鈕
        //   });

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapIdSLC);

        // L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        // maxZoom: 18,
        // attribution: 'Map data: © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        // }).addTo(mapIdSLC);
        // L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        // maxZoom: 18,
        // attribution: 'Map data: © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        // }).addTo(mapIdKD);
        // L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        // maxZoom: 18,
        // attribution: 'Map data: © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        // }).addTo(mapIdLD);
        // L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        // maxZoom: 18,
        // attribution: 'Map data: © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        // }).addTo(mapIdLU);
        // L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        // maxZoom: 18,
        // attribution: 'Map data: © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: © <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        // }).addTo(mapIdDBG);

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
        });
   })($)