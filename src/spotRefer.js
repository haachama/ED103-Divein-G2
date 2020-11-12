import * as $ from 'jquery';
import {TweenMax,TimelineMax} from 'gsap';


$(function(){

    //即時氣象頁籤功能
    $("a.weathers").on("click", function(w){
        w.preventDefault();
    
        $(this).closest(".weather_list").find("a.weathers").removeClass("-iAmHere");
        $(this).addClass("-iAmHere");
        
        $("div.weather_block").removeClass("-iAmHere");
        $("div.weather_block." + $(this).attr("data-target")).addClass("-iAmHere");
    });

    //潛點內頁-rwd 頁籤介紹
    $("a.spotRefrList").on("click", function(s){
        s.preventDefault();
    
        $(this).closest(".spotReferTab_rwd").find("a").removeClass("spotShow");
        $(this).closest("a").addClass("spotShow");
        
        $("section").removeClass("spotShow");
        $("section." + $(this).attr("data-target")).addClass("spotShow");
    });

});
    


    //載入更多按鈕
    // $(function(){
    //     /*初始化*/
    //     var counter = 0; /*計數器*/
    //     var pageStart = 0; /*offset*/
    //     var pageSize = 4; /*size*/
    //     /*首次載入*/
    //     getData(pageStart, pageSize);
    //     /*監聽載入更多*/
    //     $(document).on('click', '.js-load-more', function(){
    //     counter   ;
    //     pageStart = counter * pageSize;
    //     getData(pageStart, pageSize);
    //     });
    // });

