// import $ from 'jquery';

function getSpotReferWeatherAPI (){

    // var spotStationId_sea = $('#spotReferIntor').prev().attr("data-spotStationIdSea");

    spotStationId_sea = document.querySelector('.spotRefer_weather >h3').getAttribute('data-spotstationidsea');

    spotStationId = document.querySelector('.spotRefer_weather >h3').getAttribute('data-spotStationId');
    
    $.ajax({
        // O-A0003-001即時現象 找天氣現象weather、風向wdir、溫度temp、累積雨量24R、紫外線指數Ｈ_UVI
        // stationId 蘭嶼 467620 , 蘭嶼
        // stationId 台東 467660 , 綠島
        // stationId 恆春 467590 , 墾丁
        // stationId 恆春 467590 , 小琉球
        // stationId 淡水 466900 , 東北角
        //
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-D686A3C5-20C3-4D99-8F69-3FC7C831D0CA&format=JSON&elementName=TIME,WDIR,TEMP,24R,H_UVI,Weather',
        type: 'GET',
        dataType: 'json',
        success: getInfoONE,
        error() {
            alert('Oops!');
        },
    });

    $.ajax({
        // O-A0018-001 即時浮標站監測資料，找浪高 海溫
        // stationId 蘭嶼 C6S94 , 蘭嶼浮標
        // stationId 台東 WRA007 , 臺東浮標
        // stationId 恆春 46759A , 鵝鑾鼻浮標
        // stationId 恆春 46714D , 小琉球浮標
        // stationId 淡水 46694A , 龍洞浮標
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0018-001?Authorization=CWB-D686A3C5-20C3-4D99-8F69-3FC7C831D0CA&format=JSON&elementName=&sort=obsTime',
        type: 'GET',
        dataType: 'json',
        success: getInfoTWO,
        error() {
            alert('Oops!');
        },

    });

}

    //印出今日日期
    var timeN = new Date();
    var timeFormat =`${timeN.getFullYear()}&nbsp;/&nbsp;${timeN.getMonth()+1}&nbsp;/&nbsp;${timeN.getDate()}`;
   
    $('#today').html("今日是"+ "&nbsp;" + timeFormat);


    //印出資料來源
    var timeN = new Date();
    var timeFormat =
        `${timeN.getFullYear()}/${timeN.getMonth()+1}/${timeN.getDate()} ${timeN.getHours()}:${timeN.getMinutes()}:${timeN.getSeconds()}`;
    $('#timeNow').html(timeFormat);

    //第一區  天氣  氣溫 風戲 紫外線指數 累積雨量
    function getInfoONE(data){
        let location = data.records.location;
            
        for (var i = 0; i < location.length; i++) {

            if (location[i].stationId == spotStationId) { 
                // alert(location[i].locationName);

                let weatherElement = location[i].weatherElement;  
                for (var j = 0; j < weatherElement.length; j++) { 
                    
                    
                    //如果是天氣現象的話
                    if (weatherElement[j].elementName == "Weather") {    

                        var weatherString = weatherElement[j].elementValue; 

                        // 檢查回傳的值是晴雨雲陰哪種天氣，加上對應的fontawesome圖示
                        if (weatherString.indexOf("晴") >= 0) {  
                            $(".weatherString").addClass("fa-sun")
                        } else if (weatherString.indexOf("雨") >= 0) {
                            $(".weatherString").addClass("fa-cloud-showers-heavy")
                        } else if (weatherString.indexOf("雲") >= 0) {
                            $(".weatherString").addClass("fa-cloud")
                        } else if (weatherString.indexOf("陰") >= 0) {
                            $(".weatherString").addClass("fa-cloud")
                        }
                        $(".spotWeatherText_right h5").html("&nbsp;" + weatherString)

                    }
                    //如果是風向wdir的話
                    if (weatherElement[j].elementName == "WDIR") {  

                        var faWind = weatherElement[j].elementValue;
                        if (faWind <=10  ) {
                            $(".WDIR h5").text("偏北風")
                        }else if (faWind>10 && faWind<= 70){
                            $(".WDIR h5").text("東北風")
                        }else if (faWind>80 && faWind<= 100){
                            $(".WDIR h5").text("偏東風")
                        }else if (faWind>100 && faWind<= 160){
                            $(".WDIR h5").text("東南風")
                        }else if (faWind>170 && faWind<= 190){
                            $(".WDIR h5").text("偏南風")
                        }else if (faWind>190 && faWind<= 250){
                            $(".WDIR h5").text("西南風")
                        }else if (faWind>260 && faWind<= 280){
                            $(".WDIR h5").text("偏西風")
                        }else if (faWind>280 && faWind<= 340){
                            $(".WDIR h5").text("西北風")
                        }else if (faWind>350){
                            $(".WDIR h5").text("偏北風")
                        }
                    }

                    //如果是溫度temp的話
                    if (weatherElement[j].elementName == "TEMP") {   

                        var faTemperatureHigh = Math.round(weatherElement[j].elementValue);

                        $(".TEMP h5").html(faTemperatureHigh + "&#8451;")
                    }

                    //如果是累積雨量24R的話
                    if (weatherElement[j].elementName == "24R") {   

                        var fatint = weatherElement[j].elementValue;
                        if(fatint < 0){
                            $(".24R h5").html( "0 mm")
                        
                        }else{
                            $(".24R h5").html(fatint +"mm")
                        }
                    }

                    //如果是紫外線指數的話
                    if (weatherElement[j].elementName == "H_UVI") {

                        var uv = weatherElement[j].elementValue;
                        if (uv <= 2 ) {
                            $(".UV h5").html("低量");
                        }else if (uv>2 && uv<= 5){
                            $(".UV h5").html("中量 <br><span>*注意防曬<span>");
                            $(".UV h5 span").css('fontSize','10px');
                            $(".UV h5 span").css('background','#FF5511');
                        }else if (uv>5 && uv<= 7){
                            $(".UV h5").html("高量 <br><span>*加強防曬<span>");
                            $(".UV h5 span").css('fontSize','10px');
                            $(".UV h5 span").css('background','#CC0000');
                        }else if (uv>7 && uv<= 10){
                            $(".UV h5").html("過浪 <br><span>*嚴加防曬<span>");
                            $(".UV h5 span").css('fontSize','10px');
                            $(".UV h5 span").css('background','#CC0000');
                        }else if (uv>10){
                            $(".UV h5").html("危險 <br><span>*避免曝曬<span>");
                            $(".UV h5 span").css('fontSize','10px');
                            $(".UV h5 span").css('background','#CC0000');
                        }
                    }
                    
                }

            }
        }
    }
    
    //第二區 浪高 海溫
    function getInfoTWO(data){

        let location = data.records.location;   

        for (let i = 0; i < location.length; i++) {
            if (location[i].stationId == spotStationId_sea) {

                let locationName = data.records.location[i];  
                let weatherElement = locationName.time[0].weatherElement; 

                for(let j = 0; j<weatherElement.length; j++){
                    if(weatherElement[j].elementName == "浪高"){
                        let faWater = weatherElement[j].elementValue / 100;
                        if ( faWater <= 1.5 ) {
                            $(".water h5").html("小浪");
                        }else if (faWater>1.5 && faWater<= 3){
                            $(".water h5").html("中浪 <br><span>*建議不宜潛水<span>");
                            // $(".water h5 span").css('color','#FF5511');
                            $(".water h5 span").css('fontSize','12px');
                            $(".water h5 span").css('background','#FF5511');

                        }else if (faWater>3){
                            $(".water h5").html("大浪 <br><span>*建議不宜潛水<span>");
                            $(".water h5 span").css('background','#FF5511');
                            $(".water h5 span").css('fontSize','12px');

                        }
                    }

                    if(weatherElement[j].elementName == "海溫"){

                        var seaTmp = Math.round(weatherElement[j].elementValue/10);
                        if(weatherElement[j].elementValue < 0 || isNaN(weatherElement[j].elementValue) === true){
                            $(".sea_tmp h5").html( "25 &#8451;");
                        }else{
                            $(".sea_tmp h5").html(seaTmp + "&#8451;");
                        }

                    }
                }
            }
        }
    }




