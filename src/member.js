// import $ from "jquery";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// sessionStorage["where"] = "./member.html";

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

//會員資料頁簽
$(function () {
    var memberIF = $(".memberIF");
    var memberIFC = $(".memberIFC");
    var memberPSC = $(".memberPSC");
    var memberLIC = $(".memberLIC");

    $('.show_mif').on("click", function(){
        if(memberIF.hide()){
            memberIF.show();
            memberIFC.hide();
            memberPSC.hide();
            memberLIC.hide();
            $("a.memberTab").removeClass("-on");
            $("div.memberTab").removeClass("-on");
        }
    })
    $('.show_cmif').on("click", function(){
        if(memberIFC.hide()){
            memberIF.hide();
            memberIFC.show();
            memberPSC.hide();
            memberLIC.hide();
            $("a.memberTab").removeClass("-on");
            $("div.memberTab").removeClass("-on");
        }
    })
    $('.show_cpw').on("click", function(){
        if(memberIFC.hide()){
            memberIF.hide();
            memberIFC.hide();
            memberPSC.show();
            memberLIC.hide();
            $("a.memberTab").removeClass("-on");
            $("div.memberTab").removeClass("-on");
        }
    })
    $('.show_cli').on("click", function(){
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




//map
(function($){
    $(document).ready(function(){
        //執行AJAX或axios
        //取值放入經緯度
        
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
        $(".memberTab").on("click",function(){
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

        $(".memberTagTab.LD").on("click",function(){
            mapIdLD.hidden = false;
            mapIdLD.updateSize();
        });
        $(".memberTagTab.LU").on("click",function(){
            mapIdLU.hidden = false;
            mapIdLU.updateSize();
        });
        $(".memberTagTab.KD").on("click",function(){
            mapIdKD.hidden = false;
            mapIdKD.updateSize();
        });
        $(".memberTagTab.SLC").on("click",function(){
            mapIdSLC.hidden = false;
            mapIdSLC.updateSize();
        });
        $(".memberTagTab.DBG").on("click",function(){
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
        showPointCheck: false,
        
        users: [],
        diary: [],
        diveClass: [],
        orders: [],
        favs: [],
        image : '',

        newUser: {memId: "", memPsw: "", memName: "", memMail: "",memAvatar: ""},
        currentUser: {},
        currentDiary: {},
        currentClass: {},
        currentFavorite: {},
    },
    mounted: function(){
        this.page();
        this.getAllUsers();
        this.getAllDiary();
        this.getAllClass();
        this.getAllOrder();
        this.getAllFavorite();
        this.starChange();
    },
    methods:{
        //頁簽
        page(){
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
        },

        //顯示會員個資
        getAllUsers(){
            axios.get("./member.php?action=memberRead").then(function(response){
                app.users = response.data.users;
            });
        },

        //修改會員資料
        updateUsers(){
            var formData = app.toFormData(app.currentUser);
            axios.post("./member.php?action=updateUsers", formData).then(function(response){
                app.currentUser = {};
                app.getAllUsers();
            });
        },

        //密碼修改
        updateUserPsw(){
            let params = new URLSearchParams();
            var oldPsw = $('#oldPsw').val();
            var memPsw = $('#newPsw').val();
            var newPswAgain = $('#newPswAgain').val();
            params.append('memPsw',memPsw);
            if(oldPsw == memPsw){
                $("#changePswError").text("新舊密碼不可相同！");
            }else if(oldPsw == newPswAgain){
                $("#changePswError").text("新舊密碼不可相同！");
            }else if(memPsw != newPswAgain){
                $("#changePswError").text("新密碼不相同！");
            }else{
                axios.post("./member.php?action=updateUsersPsw", params).then(function(response){
                    $("#changePswError").text("");
                    $(".memberIF").show();
                    $(".memberIFC").hide();
                    $(".memberPSC").hide();
                    $(".memberLIC").hide();
                    $("a.memberTab").removeClass("-on");
                    $("div.memberTab").removeClass("-on");
                });
            }
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

        //更換頭像
        // updateUsersPic(){
        //     let params = new URLSearchParams();
        //     var memAvatar = $('div.memberFile').children('img').text();
        //     params.append('memAvatar',memAvatar);
        //     // console.log(courseOrderNo);
        //     axios.post("./member.php?action=updateUsersPic", params).then(function(response){
        //         console.log(response.data);
        //         alert('評分完成');
        //     });
        // },
        // memberPhoto(e){
        //     let file = e.target.files[0];
        //     let readFile = new FileReader();
        //     readFile.readAsDataURL(file);
        //     readFile.addEventListener('load',this.loadImage);
        // },
        // loadImage(e){
        //     this.image = e.target.result;
        // },

        //顯示日誌
        getAllDiary(){
            axios.get("./member.php?action=diaryRead").then(function(response){
                app.diary = response.data.diary;
            });
        },

        //刪除日誌
        delDiary(){
            var formData = app.toFormData(app.currentDiary);
            axios.post("./member.php?action=delDiary", formData).then(function(response){
                app.currentDiary = {};
                app.getAllDiary();
            });
        },
        selectDiary(d){
            app.currentDiary = d;
        },

        delDiaryTrue(){
            $(this).parent('form').parent('div').parent('div').parent('div').remove();
        },

        //顯示課程
        getAllClass(){
            axios.get("./member.php?action=classRead").then(function(response){
                app.diveClass = response.data.diveClass;
            });
        },

        //開啟燈箱
        openLightBox(){
            $(".lightbox-block3").addClass("-openbox");
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
        },
        
        // 評分
        coursePoint(){
            let params = new URLSearchParams();
            var courseOrderNo = $('li.courseOrderNo').children('p').text();
            var starPoint = $('input[name*=pl]:checked').val();
            params.append('courseOrderNo',courseOrderNo);
            params.append('starPoint',starPoint);
            // console.log(courseOrderNo);
            axios.post("./member.php?action=coursePoint", params).then(function(response){
                console.log(response.data);
                alert('評分完成');
            });
        },
        selectStar(dc){
            app.currentClass = dc;
        },

        starChange(){
            $(".StarOne").on("click", function(){
                $(".pointCheckColor").css("width","40px");
            });
            $(".StarTwo").on("click", function(){
                $(".pointCheckColor").css("width","80px");
            });
            $(".StarThree").on("click", function(){
                $(".pointCheckColor").css("width","120px");
            });
            $(".StarFour").on("click", function(){
                $(".pointCheckColor").css("width","160px");
            });
            $(".StarFive").on("click", function(){
                $(".pointCheckColor").css("width","198px");
            });
            $(".btn_modal_close").on("click", function(){
                setTimeout(function(){
                    $(".pointCheckColor").css("width","0px");
                },1000);
            });
        },

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

        //刪除日誌
        delFavorite(){
            var formData = app.toFormData(app.currentFavorite);
            axios.post("./member.php?action=delFavorite", formData).then(function(response){
                app.currentFavorite = {};
                app.getAllFavorite();
            });
        },
        selectFavorite(fav){
            app.currentFavorite = fav;
        },
        delFavoriteTrue(){
            $(this).parent('form').parent('div').parent('div').parent('div').remove();
        },
    },
});
