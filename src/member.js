// import $ from "jquery";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

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

//map
(function($){
    $(document).ready(function(){

        //標註
        //座標 經緯度
        var LD = [[121.492165, 22.642492],[121.471200, 22.642000]];
        var LU = [[121.546533, 22.012993],[121.535600, 22.011200]];
        var KD = [[120.795, 21.917000],[120.720, 21.917294],[120.797, 21.89000]];
        var SLC = [[120.365428, 22.344879],[120.362428, 22.344879]];
        var DBG = [[121.944693, 24.968898],[121.943693, 24.948050]];
        
        //創建一個Feature，並設好在地圖上的位置
        var LDLayer = new ol.layer.Vector({
            source: new ol.source.Vector()
        })
        for(var a = 0; a < LD.length; a++){
            var LDAnchor = new ol.Feature({
                geometry: new ol.geom.Point(LD[a]),
                name: 'test',
            });
            LDAnchor.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                src: './img/member/tag/Shinnosuke4.png',
                scale: 0.1,
                })
            }));
            LDLayer.getSource().addFeature(LDAnchor);
        }

        var LuLayer = new ol.layer.Vector({
            source: new ol.source.Vector()
        })
        for(var b = 0; b < LU.length; b++){
            var LUAnchor = new ol.Feature({
                geometry: new ol.geom.Point(LU[b]),
                name: 'test',
            });
            LUAnchor.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                src: './img/member/tag/Shinnosuke4.png',
                scale: 0.1,
                })
            }));
            LuLayer.getSource().addFeature(LUAnchor);
        }

        var KDLayer = new ol.layer.Vector({
            source: new ol.source.Vector()
        })
        for(var c = 0; c < KD.length; c++){
            var KDAnchor = new ol.Feature({
                geometry: new ol.geom.Point(KD[c]),
                name: 'test',
            });
            KDAnchor.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                src: './img/member/tag/Shinnosuke4.png',
                scale: 0.1,
                })
            }));
            KDLayer.getSource().addFeature(KDAnchor);
        }

        var SLCLayer = new ol.layer.Vector({
            source: new ol.source.Vector()
        })
        for(var d = 0; d < SLC.length; d++){
            var SLCAnchor = new ol.Feature({
                geometry: new ol.geom.Point(SLC[d]),
                name: 'test',
            });
            // 設置樣式，在樣式中設置圖標
            SLCAnchor.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                src: './img/member/tag/Shinnosuke4.png',
                scale: 0.1,
                // anchor: [0.5, 0.9],  //錨點位置
                // rotation: Math.PI / 4,   //傾斜
                })
            }));
            // 添加到之前的創建的layer中去
            SLCLayer.getSource().addFeature(SLCAnchor);
        }

        var DBGLayer = new ol.layer.Vector({
            source: new ol.source.Vector()
        })
        for(var e = 0; e < DBG.length; e++){
            var DBGAnchor = new ol.Feature({
                geometry: new ol.geom.Point(DBG[e]),
                name: 'test',
            });
            DBGAnchor.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                src: './img/member/tag/Shinnosuke4.png',
                scale: 0.1,
                })
            }));
            DBGLayer.getSource().addFeature(DBGAnchor);
        }

        //地圖位置
        $('#mapIdLD').height(window.innerHeight);
        $('#mapIdLU').height(window.innerHeight);
        $('#mapIdKD').height(window.innerHeight);
        $('#mapIdSLC').height(window.innerHeight);
        $('#mapIdDBG').height(window.innerHeight);
        
        // 綠島
        var mapIdLD = new ol.Map({
            target: 'mapIdLD',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              }),
              LDLayer
            ],
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [121.492165, 22.642492],
                zoom: 13
            })
        });

        // 蘭嶼
        var mapIdLU = new ol.Map({
            target: 'mapIdLU',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              }),
              LuLayer
            ],
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [121.546533, 22.012993],
                zoom: 12
            })
        });

        // 墾丁
        var mapIdKD = new ol.Map({
            target: 'mapIdKD',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              }),
              KDLayer
            ],
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [120.797, 21.917294],
                zoom: 11.5
            })
        });

        //小琉球
        var mapIdSLC = new ol.Map({
            target: 'mapIdSLC',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              }),
              SLCLayer
            ],
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [120.375456, 22.329162],
                zoom: 13.5
            })
        });

        // 東北角
        var mapIdDBG = new ol.Map({
            target: 'mapIdDBG',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              }),
              DBGLayer
            ],
            view: new ol.View({
                projection: 'EPSG:4326',
                center: [121.944693, 24.968898],
                zoom: 10
            })
        });

        //讓頁簽中的地圖顯示
        $(".memberTab").click(function(){
            mapIdLD.hidden = false;
            mapIdLU.hidden = false;
            mapIdKD.hidden = false;
            mapIdSLC.hidden = false;
            mapIdDBG.hidden = false;

            mapIdLD.updateSize();
            mapIdLU.updateSize();
            mapIdKD.updateSize();
            mapIdSLC.updateSize();
            mapIdDBG.updateSize();
        });

        $(".memberTagTab.LD").click(function(){
            mapIdLD.hidden = false;
            mapIdLD.updateSize();
        });
        $(".memberTagTab.LU").click(function(){
            mapIdLU.hidden = false;
            mapIdLU.updateSize();
        });
        $(".memberTagTab.KD").click(function(){
            mapIdKD.hidden = false;
            mapIdKD.updateSize();
        });
        $(".memberTagTab.SLC").click(function(){
            mapIdSLC.hidden = false;
            mapIdSLC.updateSize();
        });
        $(".memberTagTab.DBG").click(function(){
            mapIdDBG.hidden = false;
            mapIdDBG.updateSize();
        });

        //點擊
        // mapIdSLC.on('click', function (evt) {
        //     var feature = mapIdSLC.forEachFeatureAtPixel(evt.pixel, function (feature) {
        //       return feature;
        //     });
        //     $(element).popover('dispose');
        //     if (feature) {
        //       var coordinates = feature.getGeometry().getCoordinates();
        //       popup.setPosition(coordinates);
        //       $(element).popover({
        //         placement: 'top',
        //         html: true,
        //         animation: false,
        //         content: feature.get('name'),
        //       });
        //       $(element).popover('show');
        //     }
        //   });
    });
})($)

let app = new Vue({
    el: "#app",
    data: {
        users: [],
        diary: [],
        diveClass: [],
        orders: [],

        favs: [],

        newUser: {memId: "", memPsw: "", memName: "", memMail: "",memAvatar: ""},
        currentUser: {},
    },
    mounted: function(){
        this.getAllUsers();
        this.getAllDiary();
        this.getAllClass();

        this.getAllOrder();
        this.getAllFavorite();
    },
    methods:{
        //顯示會員個資
        getAllUsers(){
            axios.get("./member.php?action=memberRead").then(function(response){
                app.users = response.data.users;
            });
        },

        //修改會員資料與密碼(未完成)
        updateUsers(){
            var formData = app.toFormData(app.currentUser);
            axios.get("./member.php?action=updateUsers", formData).then(function(){
                app.currentUser = {};
                app.getAllUsers();
            });
        },

        toFormData(obj){
            var fd = new FormData();
            for(var i in obj){
                fd.append(i,obj[i]);
            }
            return fd;
        },
        selectUser(user){
            app.currentUser = user;
        },

        //顯示日誌
        getAllDiary(){
            axios.get("./member.php?action=diaryRead").then(function(response){
                app.diary = response.data.diary;
            });
        },

        //顯示課程
        getAllClass(){
            axios.get("./member.php?action=classRead").then(function(response){
                app.diveClass = response.data.diveClass;
            });
        },

        //顯示踩點
        // getAllClass(){
        //     axios.get("./member.php?action=classRead").then(function(response){
        //         app.diveClass = response.data.diveClass;
        //     });
        // },

        //顯示訂單
        getAllOrder(){
            axios.get("./member.php?action=Order").then(function(response){
                app.orders = response.data.orders;
            });
        },

        //顯示收藏
        getAllFavorite(){
            axios.get("./member.php?action=favorite").then(function(response){
                app.favs = response.data.favs;
            });
        },
    },
});
