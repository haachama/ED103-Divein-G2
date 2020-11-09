import $ from 'jquery';

$(document).ready(function(){

    var spotgecode ='467660';

    // stationId 蘭嶼 467620 , 蘭嶼
    // stationId 台東 467660 , 綠島
    // stationId 恆春 467590 , 墾丁
    // stationId 恆春 467660 , 小琉球
    // stationId 淡水 466900 , 東北角
    
    $('.weathers').on('click',function(){
        spotgecode = $(this).attr('value'); //將後台撈到的數字存成一個＄spotStationId變數 
        $.ajax({
            url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-D686A3C5-20C3-4D99-8F69-3FC7C831D0CA&format=JSON&locationName=%E8%87%BA%E6%9D%B1%E7%B8%A3,%E6%96%B0%E5%8C%97%E5%B8%82,%E5%B1%8F%E6%9D%B1%E7%B8%A3&sort=time',
            type: 'GET',
            dataType: 'json',
            success: getInfo,
            error() {
                alert('Oops!');
            },
            complete(){

            },
        
        });
        
    });


    function getInfo(data) {

        let location = data.records.locations[0].location;
        let today = new Date(location[0].weatherElement[0].time[0]['endTime']);
        let todayHour = today.getHours();

        //week範圍
        let weekStar = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + (today.getDate() + 1);
        let weekEnd = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + (today.getDate() + 7);
        $('#weekDay').html(`${weekStar} to ${weekEnd}`);

        $('#spotWeatherfuture').empty();

        
        //印出日期
        var dayData = '<ul id="dayData">';
        dayData += `<li class="titleTR"> 日期 </li>`;
        for (let i = 1; i <= 7; i++){
            let mmdd = (today.getMonth() + 1) + '/' + (today.getDate() + i );
            dayData += `<li> ${mmdd} </li>`;
        }
        dayData += '</ul>';


        //篩選氣象條件
        for(let i = 0; i < location.length; i++){
            
            if(location[i].geocode == spotgecode){
                let weatherElement = location[i].weatherElement;
                let time = weatherElement[i].time;

                for(var j = 0; j < weatherElement.length; j++){   //15個

                    //溫度
                    if (weatherElement[j].elementName == "T"){    //第幾個的elementName == T
                        var tempData = '<ul id="tempData">';
                        tempData += '<li class="titleTR"><i class="fas fa-temperature-high"></i></li>';
                            
                        var tempTime = weatherElement[j].time;
                        
                        for( let k = 0; k < tempTime.length; k++){

                            if(tempTime[k].endTime.substring(11,13) == todayHour){
                                let tempvalue = tempTime[k].elementValue[0].value;
                                tempData += `<li> ${tempvalue}&#8451 </li>`;
                                
                            };

                        };
                        
                        tempData += '</ul>';
                    };

                    
                    //風向
                    if (weatherElement[j].elementName == "WD"){
                        var windData = '<ul id="windData">';
                            windData += `<li class="titleTR"><i class="fas fa-wind"></i></li>`;
                            
                            var windTime = weatherElement[j].time;
                        
                        for( let k = 0; k < windTime.length; k++){

                            if(windTime[k].endTime.substring(11,13) == todayHour){
                                let windvalue = windTime[k].elementValue[0].value;
                                windData += `<li> ${windvalue} </li>`;
                                
                            };

                        };
                        windData += '</ul>';

                    };

                    //濕度
                    if (weatherElement[j].elementName == "RH"){
                        var rainData = '<ul id="rainData">';
                            rainData += `<li class="titleTR"><i class="fas fa-umbrella "></i></li>`;
                            
                            var rainTime = weatherElement[j].time;
                        
                        for( let k = 0; k < rainTime.length; k++){

                            if(rainTime[k].endTime.substring(11,13) == todayHour){
                                let rainvalue = rainTime[k].elementValue[0].value;
                                rainData += `<li> ${rainvalue}% </li>`;
                                
                            };

                        };
                        windData += '</ul>';

                    };

                }

                $('#spotWeatherfuture').append(dayData);
                $(tempData).insertAfter('#dayData');
                $(windData).insertAfter('#tempData');
                $(rainData).insertAfter('#windData');


            };
                

        };
        
    };



    //印出資料來源
    var timeN = new Date();
    var timeFormat =
        `${timeN.getFullYear()}/${timeN.getMonth()+1}/${timeN.getDate()} ${timeN.getHours()}:${timeN.getMinutes()}:${timeN.getSeconds()}`;
    $('#timeNow').html(timeFormat);


});

