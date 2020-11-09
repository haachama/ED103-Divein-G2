import $ from "jquery";
import { TweenMax, TimelineMax } from "gsap";


var storage = sessionStorage;

function doFirst() {
    if (storage['addItemList'] == null) {
        // 等同於設置一個 key為 addItemList，值為空字串
        storage['addItemList'] = '';    // storage.setItem('addItemList','');
    }

    //幫每個按鈕add cart 建事件聆聽
    let list = document.querySelectorAll('.addCart');

    for (let i = 0; i < list.length; i++) {

        list[i].addEventListener('click', function () {

            // 獲取商品的資訊 value="水中看的清|mask1@2x.png|8700
            let diveInfo = document.querySelector(`#${this.id} input`).value;
            // 執行addItem函數，傳入id值、商品的資訊
            addItem(this.id, diveInfo);
        });
    }
}
// 按下加入購物車按鈕時，會於左上角顯示商品圖片、資訊
// 動態新增商品圖片與資訊
function addItem(itemId, itemValue) {
    let newItem = document.getElementById('newItem');

    let image = document.createElement('img');
    image.src = './img/shop/' + itemValue.split('|')[1];

    let title = document.createElement('span');
    title.innerText = itemValue.split('|')[0];

    let price = document.createElement('span');
    // 字串切割成陣列，還是字串型態，若要加總需轉型成數字
    price.innerText = parseInt(itemValue.split('|')[2]);

    // // 判斷顯示處是否已有商品資訊(孫子標籤，包含換行的空格)，若有要先刪除
    // if (newItem.hasChildNodes()) {
    //     while (newItem.childNodes.length >= 1) {
    //         // 使用while迴圈，只要大於1就刪掉，程式一次一次運行就可以完全清除包含空格節點
    //         newItem.removeChild(newItem.firstChild);
    //     }
    // }

    // 再顯示新加入的商品資訊
    // newItem.appendChild(image);
    // newItem.appendChild(title);
    // newItem.appendChild(price);

    // 存入storage
    if (storage[itemId]) {
        alert('You have checked.');
    } else {
        // storage['addItemList'] += itemId + ',';
        // 另外創建一個真正的購買順序
        storage['addItemList'] += `${itemId}, `;
        // 將商品資訊存入storage
        storage.setItem(itemId, itemValue);
    }

    // 計算購買數量和小計
    let itemString = storage.getItem('addItemList'); //給key值，傳回value
    // alert(itemString); "A1001, A1005, A1006, A1002";
    // substr 返回擷取的字串，四個分隔號會分割成五個值的陣列，故最後的分隔號不計算，就可避免多一個空值
    let items = itemString.substr(0, itemString.length - 2).split(', ');
    //console.log(items);  // [A1001,A1005,A1006,A1002]

    subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        let itemInfo = storage.getItem(items[i]);  // A1001、A1005、A1006、A1002，傳回key值對應的value值給itemInfo
        // 字串切割成陣列，還是字串，要做轉型才加總
        let itemPrice = parseInt(itemInfo.split('|')[2]);  //value="Formosa|formosa.jpg|5000" 價格的部分

        subtotal += itemPrice;

    }


    // document.getElementById('itemCount').innerText = items.length;
    // document.getElementById('subtotal').innerText = subtotal;
}

window.addEventListener('load', doFirst);


$(function () {

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

    // 5-1  查看詳情
    // 開啟 Modal 彈跳視窗
    var mainButton = document.getElementsByClassName("mainBtn_1");
    var lightbox = document.getElementsByClassName("lightbox-block1")[0];

    var lightboxH3 = lightbox.getElementsByTagName("h3")[0];
    var lightboxP = lightbox.getElementsByTagName("p")[0];

    for (var i = 0; i < mainButton.length; i++) {
        mainButton[i].addEventListener("click", openLightbox, false);
    }

    function openLightbox() {
        lightbox.classList.add("-openbox");
        console.log(this)
        var parent = this.parentNode.parentNode;

        let title = parent.children[0].innerText;

        lightboxH3.innerHTML = title;
        lightboxP.innerHTML = title;
    }

    // $(".mainBtn_1").on("click", function(){
    //     $(".lightbox-block1").addClass("-openbox");
    // });

    // 關閉 Modal
    $(".btn_modal_close").on("click", function () {
        $(".lightbox-block1").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $(".lightbox-block1").removeClass("-openbox -opacity-zero");
        }, 1000);
    });





    // bubbleBtn
    $('.button--bubble').each(function () {
        var $circlesTopLeft = $(this).parent().find('.circle.top-left');
        var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

        var tl = new TimelineMax();
        var tl2 = new TimelineMax();

        var btTl = new TimelineMax({
            paused: true
        });

        tl.to($circlesTopLeft, 1.2, {
            x: -25,
            y: -25,
            scaleY: 2,
            ease: SlowMo.ease.config(0.1, 0.7, false)
        });
        tl.to($circlesTopLeft.eq(0), 0.1, {
            scale: 0.2,
            x: '+=6',
            y: '-=2'
        });
        tl.to($circlesTopLeft.eq(1), 0.1, {
            scaleX: 1,
            scaleY: 0.8,
            x: '-=10',
            y: '-=7'
        }, '-=0.1');
        tl.to($circlesTopLeft.eq(2), 0.1, {
            scale: 0.2,
            x: '-=15',
            y: '+=6'
        }, '-=0.1');
        tl.to($circlesTopLeft.eq(0), 1, {
            scale: 0,
            x: '-=5',
            y: '-=15',
            opacity: 0
        });
        tl.to($circlesTopLeft.eq(1), 1, {
            scaleX: 0.4,
            scaleY: 0.4,
            x: '-=10',
            y: '-=10',
            opacity: 0
        }, '-=1');
        tl.to($circlesTopLeft.eq(2), 1, {
            scale: 0,
            x: '-=15',
            y: '+=5',
            opacity: 0
        }, '-=1');

        var tlBt1 = new TimelineMax();
        var tlBt2 = new TimelineMax();

        tlBt1.set($circlesTopLeft, {
            x: 0,
            y: 0,
            rotation: -45
        });
        tlBt1.add(tl);

        tl2.set($circlesBottomRight, {
            x: 0,
            y: 0
        });
        tl2.to($circlesBottomRight, 1.1, {
            x: 30,
            y: 30,
            ease: SlowMo.ease.config(0.1, 0.7, false)
        });
        tl2.to($circlesBottomRight.eq(0), 0.1, {
            scale: 0.2,
            x: '-=6',
            y: '+=3'
        });
        tl2.to($circlesBottomRight.eq(1), 0.1, {
            scale: 0.8,
            x: '+=7',
            y: '+=3'
        }, '-=0.1');
        tl2.to($circlesBottomRight.eq(2), 0.1, {
            scale: 0.2,
            x: '+=15',
            y: '-=6'
        }, '-=0.2');
        tl2.to($circlesBottomRight.eq(0), 1, {
            scale: 0,
            x: '+=5',
            y: '+=15',
            opacity: 0
        });
        tl2.to($circlesBottomRight.eq(1), 1, {
            scale: 0.4,
            x: '+=7',
            y: '+=7',
            opacity: 0
        }, '-=1');
        tl2.to($circlesBottomRight.eq(2), 1, {
            scale: 0,
            x: '+=15',
            y: '-=5',
            opacity: 0
        }, '-=1');

        tlBt2.set($circlesBottomRight, {
            x: 0,
            y: 0,
            rotation: 45
        });
        tlBt2.add(tl2);

        btTl.add(tlBt1);
        btTl.to($(this).parent().find('.button.effect-button'), 0.8, {
            scaleY: 1.1
        }, 0.1);
        btTl.add(tlBt2, 0.2);
        btTl.to($(this).parent().find('.button.effect-button'), 1.8, {
            scale: 1,
            ease: Elastic.easeOut.config(1.2, 0.4)
        }, 1.2);

        btTl.timeScale(2.6);

        $(this).on('mouseover', function () {
            btTl.restart();
        });
    });
});

$(function () {

    // 開啟 Modal 彈跳視窗
    $(".sent").on("click", function () {
        $(".lightbox-block1").addClass("-openbox");
    });

    // 關閉 Modal
    $(".btn_modal_close").on("click", function () {
        $(".lightbox-block1").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $(".lightbox-block1").removeClass("-openbox -opacity-zero");
        }, 1000);
    });
});