import $ from 'jquery';

$(function () {
    // 導覽列頁籤
    $("a.tab").on("click", function (e) {
        e.preventDefault();

        /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
        $(this).closest("ul").find("a.tab").removeClass("-on");
        $(this).addClass("-on");

        /* 找到對應的頁籤內容，加上 -on 來顯示 */
        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
    });

    //潛域頁籤
    $("a.spotArae_each").on("click", function (e) {
        e.preventDefault();

        /* 將頁籤列表移除所有 -spoton，再將指定的加上 -spoton */
        $(this).closest("ul").find("a.spotArae_each").removeClass("-spoton");
        $(this).addClass("-spoton");

        /* 找到對應的頁籤內容，加上 -spoton 來顯示 */
        $("table.spot_point").removeClass("-spoton");
        $("table.spot_point." + $(this).attr("data-target")).addClass("-spoton");
    });

    // 5-2 lightbox
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


