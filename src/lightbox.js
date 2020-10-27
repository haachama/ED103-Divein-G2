//5-1-----------
$(function(){

    // 開啟 Modal 彈跳視窗
    $(".mainBtn_1").on("click", function(){
        $(".lightbox-block1").addClass("-openbox");
    });

    // 關閉 Modal
    $(".btn_modal_close").on("click", function(){
        $(".lightbox-block1").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function(){
            $(".lightbox-block1").removeClass("-openbox -opacity-zero");
        }, 1000);
    });
});


//5-2-----------
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


//5-3-----------
$(function(){

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