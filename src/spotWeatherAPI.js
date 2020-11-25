// import $ from 'jquery';


function getSpotWeatherAPI (spotStationId){
    // spotStationId = document.querySelector('.spotList >li >a').getAttribute('data-spotStationId');
    
    console.log(spotStationId);
    $.ajax({
        // O-A0003-001即時現象 找天氣現象weather、風向wdir、溫度temp、累積雨量24R、紫外線指數Ｈ_UVI
        // stationId 蘭嶼 467620 , 蘭嶼
        // stationId 台東 467660 , 綠島
        // stationId 恆春 467590 , 墾丁
        // stationId 恆春 467660 , 小琉球
        // stationId 淡水 466900 , 東北角
        //
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-D686A3C5-20C3-4D99-8F69-3FC7C831D0CA&format=JSON&elementName=TIME,WDIR,TEMP,24R,H_UVI,Weather',
        type: 'GET',
        dataType: 'json',
        success: getInfoFirst,
        error() {
            alert('Oops!');
        },
    });
}
   

function getInfoFirst(data){
    let location = data.records.location; 
        
    for (var i = 0; i < location.length; i++) {   


        if (location[i].stationId == spotStationId) {    

            $(".spotTitle").html(location[i].locationName);   

            let weatherElement = location[i].weatherElement;   
            for (var j = 0; j < weatherElement.length; j++) {   
                
                
                if (weatherElement[j].elementName == "Weather") {    //如果是天氣現象的話

                    var weatherString = weatherElement[j].elementValue;   //取出天氣現象物件的time陣列，此API會將送出請求的時間區段的下一個時間區段(預報)擺在第一個房間，所以可寫死time[0]，取出裡面的elementValue陣列的第一個物件的value

                    // 檢查回傳的值是晴雨雲陰哪種天氣，加上對應的fontawesome圖示，管他是短暫雨還是短暫陣雨，我只檢查「雨」
                    if (weatherString.indexOf("晴") >= 0) {    //indexOf 方法會檢查字符串，有就回傳該字符第一次出現的索引，可能是0、1...等，沒有就回傳-1
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

                if (weatherElement[j].elementName == "WDIR") {  //如果是風向wdir的話

                    var faWind = weatherElement[j].elementValue;
                    if (faWind <=10  ) {
                        $(".fa-wind").html("&nbsp;" + "偏北風")
                    }else if (faWind>10 && faWind<= 80){
                        $(".fa-wind").html("&nbsp;" + "東北風")
                    }else if (faWind>80 && faWind<= 100){
                        $(".fa-wind").html("&nbsp;" + "偏東風")
                    }else if (faWind>100 && faWind<= 170){
                        $(".fa-wind").html("&nbsp;" + "東南風")
                    }else if (faWind>170 && faWind<= 190){
                        $(".fa-wind").html("&nbsp;" + "偏南風")
                    }else if (faWind>190 && faWind<= 260){
                        $(".fa-wind").html("&nbsp;" + "西南風")
                    }else if (faWind>260 && faWind<= 280){
                        $(".fa-wind").html("&nbsp;" + "偏西風")
                    }else if (faWind>280 && faWind<= 350){
                        $(".fa-wind").html("&nbsp;" + "西北風")
                    }else if (faWind>350){
                        $(".fa-wind").html("&nbsp;" + "偏北風")
                    }
                }

                if (weatherElement[j].elementName == "TEMP") {   //如果是溫度temp的話

                    var faTemperatureHigh = Math.round(weatherElement[j].elementValue);

                    $(".fa-temperature-high").html("&nbsp;" + faTemperatureHigh + "&#8451;")
                }
                
                if (weatherElement[j].elementName == "H_UVI") {   //如果是累積雨量24R的話

                    var uv = weatherElement[j].elementValue;
                    if (uv <= 2 ) {
                        $(".fa-umbrella-beach").html("&nbsp;注意防曬");
                    }else if (uv>2 && uv<= 5){
                        $(".fa-umbrella-beach").html("&nbsp;加強防曬");
                    }else if (uv>5 && uv<= 7){
                        $(".fa-umbrella-beach").html("&nbsp;加強防曬");
                    }else if (uv>7 && uv<= 10){
                        $(".fa-umbrella-beach").html("&nbsp;嚴加防曬");
                    }else if (uv>10){
                        $(".fa-umbrella-beach").html("&nbsp;避免曝曬");
                    }
                }
                
            }

        }
    }
}

    
   


