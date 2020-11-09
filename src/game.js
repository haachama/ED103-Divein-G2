import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';


//↓宣告要用到的全域變數
var myGamePiece;

var canvasWidth = 700;
var canvasHeight = window.innerHeight -= 85; //螢幕高度減Header高度

let postSign = true;
var myObstacles = [];
// var myObstaclesTwo = [];
var obstacleSize = (canvasWidth/8); //障礙物尺寸
var obstaclesSpace = 350;
let life = 3; //血量上限(套血量變數)
let heart = [];
let hit = false;

let yellowScore = false; //
let doubleScore = 1; //分數加快速度，預設為不加快
var myScore;

var myBackground;

let keyDown = false;//防止按鍵重複觸發用
let myObstaclesSpeed = -10;//障礙物起始速度
let Case = 1; //石塊排列方式初值

let rockOne = 1; //石塊圖樣初值
let rockTwo = 2; //石塊圖樣初值
let rockThree = 1; //石塊圖樣初值
let rockFour = 2; //石塊圖樣初值

function startGame() {
    myGamePiece = new component(54, 70, "./img/game/playRole.png", (canvasWidth/2 - 15), (canvasHeight/12), "image"); // ←調整角色圖片
    myScore = new component("20px", "Consolas", "black", (canvasWidth - 160), 40, "text"); //←調整分數字體大小
    myBackground = new component(1920, 3000, "./img/game/gameBackgroundBlack.jpg", 0, 0, "background"); //←調整背景圖片
    myGameArea.start();
}



var myGameArea = {
    canvas: document.getElementById('canvas'), //定位畫布在html的位置

    start: function () {
        this.canvas.width = canvasWidth; //套全域變數
        this.canvas.height = canvasHeight; //套全域變數

        //數值重設
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);

        window.addEventListener('keydown', function (e) { //聆聽鍵盤按下事件
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) { //聆聽鍵盤放開事件，取消按下事件
            myGameArea.key = false;
            keyDown = false;  
        })
    },

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); //去除動畫舊畫面
    },
    stop: function () { //  血量歸零時的行為
        
        clearInterval(this.interval);//停止遊戲
        // alert(myScore.text);//顯示分數(開發用)
        localStorage.setItem('myScore', parseInt(myGameArea.frameNo * 0.1));//儲存分數(這裡要接後端)
        // window.open("game.html", "_self"); //重新整理(開發用)
        window.open("gameResult.html", "_self"); //打開排行榜頁
    }
}

function component(width, height, color, x, y, type) {
    //根據屬性生成物件
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;

    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.angle = 0;

    this.update = function () {
        var ctx = myGameArea.context;
        if (type == "image" || type == "background") {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.drawImage(this.image, this.width / -2, this.height / -2, this.width, this.height);
            ctx.restore();

            if (type == "background") {
                ctx.drawImage(this.image,
                    this.x,
                    this.y + this.height, //設定高度，讓背景循環播放時能無縫接軌
                    this.width, this.height);
            }
        } else if (this.type == "text") {
            
            if (yellowScore == false){
                ctx.fillStyle = "#FEFEFE"; //調整字體顏色
                ctx.font = this.width + " " + this.height;
                ctx.fillText(this.text, this.x, this.y);
            }else{
                ctx.fillStyle = "#E6AE2C"; //調整字體顏色
                ctx.font = this.width + " " + this.height;
                ctx.fillText(this.text, this.x, this.y);
            }
            

        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        } 
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") { 
            if (this.y == -(this.height)) { //←判定背景圖片播放完畢
                this.y = 0; //←生成背景到下方
            }
        }
    }
    this.crashWith = function (otherobj) { //判定撞擊

        //↓判定角色大小
        var myleft = this.x  - (this.width/2);
        var myright = this.x + (this.width/2);
        var mytop = this.y - (this.height/2);
        var mybottom = this.y + (this.height/2);

        //↓判定角色是否碰到障礙物邊緣
        var otherleft = otherobj.x - (otherobj.width/2);
        var otherright = otherobj.x + (otherobj.width/2);
        var othertop = otherobj.y - (otherobj.height/2);
        var otherbottom = otherobj.y + (otherobj.height/2 - 5);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        // if ((mybottom > othertop) || (mytop < otherbottom) || (myright > otherleft) || (myleft < otherright)) {
        //     hit = false;
        // }
        //↓回報撞擊
        return crash;
    }

    if (myObstaclesSpeed == -25){ //速度達上限時的行為
        doubleScore = 3;
        yellowScore = true;
    }
}

//動畫更新處，所有要動的東西都要放這。
function updateGameArea() {

    myGameArea.clear(); //清除上一格畫面

    this.canvas.width = canvasWidth; //代入全域變數
    this.canvas.height = canvasHeight; //代入全域變數

    var x

    if (life <= 0){
        myGameArea.stop();
        return;
    }

    for (var i = 0; i < myObstacles.length; i += 1) {
        
        myObstacles[i].angle += 1 * Math.PI / 180;

        if (myGamePiece.crashWith(myObstacles[i]) && hit == false) {

            --life;
            hit = true;
            setTimeout(function(){
                hit = false;
            },500); //無敵時間
        } 

        if ((myObstacles[i].y) < (canvasHeight - obstaclesSpace)) { //判定生成新障礙物
            postSign = true;
        }else {
            postSign = false
        }
    }
    
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    
    if (myGameArea.key && myGameArea.key == 37 ) {
        // if( keyDown == false && (myGamePiece.x) >= (canvasWidth/2 -145)){ //正常程式碼
        if( keyDown == false){  //突破系統限制用(開發者模式)
            myGamePiece.speedX = -200;
            // alert(myGamePiece.speedX);
            keyDown = true;            
        }

    } //【←】

    if (myGameArea.key && myGameArea.key == 39 ) {
        if( keyDown == false && (myGamePiece.x) <= (canvasWidth/2 )){
            myGamePiece.speedX = 200;
            keyDown = true;            
        }

    } //【→】

    if (myGameArea.key && myGameArea.key == 65 ) {
        if( keyDown == false && (myGamePiece.x) >= (canvasWidth/2 -145)){
            myGamePiece.speedX = -200;
            // alert(myGamePiece.speedX);
            keyDown = true;            
        }

    } //【A】

    if (myGameArea.key && myGameArea.key == 68 ) {
        if( keyDown == false && (myGamePiece.x) <= (canvasWidth/2 )){
            myGamePiece.speedX = 200;
            keyDown = true;            
        }

    } //【D】

    myBackground.speedY = -0; //代裝備變數 -速度
    myBackground.newPos();
    myBackground.update();

    myGameArea.frameNo += doubleScore; //增加格數

    //產生障礙物
    if (postSign == true) {
        var x = myGameArea.canvas.width;

        Case = parseInt(Math.random() * 2) + 1;

        rockOne = parseInt(Math.random() * 2) + 1;
        rockTwo = parseInt(Math.random() * 2) + 1;
        rockThree = parseInt(Math.random() * 2) + 1;
        rockFour = parseInt(Math.random() * 2) + 1;

        switch(Case){
            case 1:
                switch(rockOne){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", (x / 2 - 200), canvasHeight, "image")); //左
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", (x / 2 - 200), canvasHeight, "image")); //左 
                        break;

                };

                switch(rockTwo){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", (x / 2 + 200), canvasHeight, "image")); //右
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", (x / 2 + 200), canvasHeight, "image")); //右
                        break;
                        
                };

                switch(rockThree){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", (x / 2 ), (canvasHeight + obstaclesSpace), "image"));  //中
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", (x / 2 ), (canvasHeight + obstaclesSpace), "image"));  //中
                        break;
                        
                };

                switch(rockFour){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", (x / 2 + 200), (canvasHeight + obstaclesSpace), "image")); //右
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", (x / 2 + 200), (canvasHeight + obstaclesSpace), "image")); //右
                        break;
                        
                };
                
                postSign = false;
                break;

            case 2:
                switch(rockOne){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", (x / 2 - 200), canvasHeight, "image")); //左
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", (x / 2 - 200), canvasHeight, "image")); //左 
                        break;

                };

                switch(rockTwo){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", (x / 2 + 200), canvasHeight, "image")); //右
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", (x / 2 + 200), canvasHeight, "image")); //右
                        break;
                        
                };

                switch(rockThree){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", (x / 2), (canvasHeight + obstaclesSpace), "image"));  //中
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", (x / 2 ), (canvasHeight + obstaclesSpace), "image"));  //中
                        break;
                        
                };

                switch(rockFour){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", (x / 2 - 200), (canvasHeight + obstaclesSpace), "image")); //右
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", (x / 2 - 200), (canvasHeight + obstaclesSpace), "image")); //右
                        break;
                        
                };
                
                postSign = false;
                break;

        };
        
    }

    if ( (myGameArea.frameNo == 1 || everyinterval(150) ) && myObstaclesSpeed >= -25 ) { //多久加快一次 / 上限
        myObstaclesSpeed -= 1;
    }

    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].speedY = myObstaclesSpeed;//代裝備變數
        myObstacles[i].newPos();
        myObstacles[i].update();
    }

    for(var i=1; i < (life + 1); i++){
        heart.push(new component(30, 30, "./img/game/heart.png", 35*i, 35, "image")); //血量
        heart[i].update();
    }

    if(myObstaclesSpeed <= -30){
        myScore.text = "生存分數:" + parseInt(myGameArea.frameNo * 0.1); //調整分數增加速度
        myScore.update();
        myGamePiece.newPos();
        myGamePiece.update();
    }else {
        myScore.text = "生存分數:" + parseInt(myGameArea.frameNo * 0.1); //調整分數增加速度
        myScore.update();
        myGamePiece.newPos();
        myGamePiece.update();
    }

}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
    return false;
}

function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}

//↓啟動程式
var main = document.getElementsByTagName("main")[0];
main.onload = startGame(); 







//rwd
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

    // lightbox 5-1
    // 開啟 Modal 彈跳視窗
    $(".mainBtn_1").on("click", function () {
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


    // bubbleBtn
    $('.button--bubble').each(function () {
        var $circlesTopLeft = $(this).parent().find('.circle.top-left');
        var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

        var tl = new TweenMax();
        var tl2 = new TweenMax();

        var btTl = new TweenMax({
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

        var tlBt1 = new TweenMax();
        var tlBt2 = new TweenMax();

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

})

