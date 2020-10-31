$(function(){

    // 開啟 Modal 彈跳視窗
    $(".sent").on("click", function(){
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