// import $ from 'jquery';
// import { TweenMax, TimelineMax } from 'gsap';

"use strict";//嚴格模式

//↓宣告要用到的全域變數


//接收裝備變數
var roleColorValue = localStorage.getItem('roleColor');
var mask = localStorage.getItem('mask');
var air = localStorage.getItem('air');
var shoe = localStorage.getItem('shoe');

var view = localStorage.getItem('view');
var life = localStorage.getItem('life');
var speed = localStorage.getItem('speed');

// alert("view = " + view);
// alert("life = " + life);
// alert("speed = " + speed);

var myLeftBtn;
var myRightBtn;

var myGamePiece;
var roleHeight = 70;//角色高度
var roleImg = "./img/game/playRole.png";//角色圖片初值

var canvasWidth = 700;
if(window.innerWidth < 700){
    canvasWidth = window.innerWidth;
}
var canvasHeight = window.innerHeight -= 85; //螢幕高度減Header高度

//障礙物
let postSign = true;
var myObstacles = [];
var obstacleSize = 75; //障礙物尺寸(直徑)
if(window.innerWidth < 700){
    obstacleSize = 85;
}
var obstaclesSpace = 300;//障礙物上下間隔
let myObstaclesSpeed = -10;//障礙物起始速度
let myObstaclesMaxSpeed = -25;//障礙物最高速度
let Case = 1; //石塊排列方式初值
let rockOne = 1; //石塊圖樣初值
let rockTwo = 2; //石塊圖樣初值
let rockThree = 1; //石塊圖樣初值
let rockFour = 2; //石塊圖樣初值

let maxLife = life; //血量上限(套血量變數)
let heart = [];
let hit = false;

var myScore;
let yellowScore = false; 
let doubleScore = 1; //分數加快速度，預設為不加快

var myBackground;

let keyDown = false;//防止按鍵重複觸發用
let touch = false;//防止觸控重複觸發用



//↓角色圖片判定

if(roleColorValue == 1){

    if(mask == 10){
        if(air == 10){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-1-1-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/green-1-1-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/green-1-1-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-1-1-0.png";
            }
        }
        if(air == 20){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-1-2-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/green-1-2-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-1-2-0.png";
            }
        }
        if(air == 40){
            roleImg = "./img/game/roleImg/green-1-4-0.png";
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-1-0-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/green-1-0-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/green-1-0-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-1-0-0.png";
            }
        }
    }
    //↓20元面鏡
    if(mask == 20){
        if(air == 10){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-2-1-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/green-2-1-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-2-1-0.png";
            }
        }
        if(air == 20){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-2-2-1.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-2-2-0.png";
            }
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-2-0-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/green-2-0-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-2-0-0.png";
            }
        }
    }
    //↓40元面鏡
    if(mask == 40){
        if(air == 10){
            roleImg = "./img/game/roleImg/green-4-1-0.png";
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-4-0-1.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-4-0-0.png";
            }
        }
    }

    //不戴面鏡
    if(mask == 0){
        if(air == 10){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-0-1-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/green-0-1-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/green-0-1-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-0-1-0.png";
            }
        }
        if(air == 20){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-0-2-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/green-0-2-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-0-2-0.png";
            }
        }
        if(air == 40){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-0-4-1.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-0-4-0.png";
            }
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/green-0-0-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/green-0-0-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/green-0-0-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/green-0-0-0.png";
            }
        }
    }
}; 
if(roleColorValue == 2){
    if(mask == 10){
        if(air == 10){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-1-1-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/pink-1-1-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/pink-1-1-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-1-1-0.png";
            }
        }
        if(air == 20){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-1-2-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/pink-1-2-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-1-2-0.png";
            }
        }
        if(air == 40){
            roleImg = "./img/game/roleImg/pink-1-4-0.png";
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-1-0-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/pink-1-0-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/pink-1-0-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-1-0-0.png";
            }
        }
    }
    //↓20元面鏡
    if(mask == 20){
        if(air == 10){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-2-1-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/pink-2-1-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-2-1-0.png";
            }
        }
        if(air == 20){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-2-2-1.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-2-2-0.png";
            }
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-2-0-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/pink-2-0-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-2-0-0.png";
            }
        }
    }
    //↓40元面鏡
    if(mask == 40){
        if(air == 10){
            roleImg = "./img/game/roleImg/pink-4-1-0.png";
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-4-0-1.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-4-0-0.png";
            }
        }
    }

    //不戴面鏡
    if(mask == 0){
        if(air == 10){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-0-1-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/pink-0-1-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/pink-0-1-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-0-1-0.png";
            }
        }
        if(air == 20){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-0-2-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/pink-0-2-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-0-2-0.png";
            }
        }
        if(air == 40){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-0-4-1.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-0-4-0.png";
            }
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/pink-0-0-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/pink-0-0-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/pink-0-0-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/pink-0-0-0.png";
            }
        }
    }
}; 
if(roleColorValue == 3){
    if(mask == 10){
        if(air == 10){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-1-1-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/orange-1-1-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/orange-1-1-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-1-1-0.png";
            }
        }
        if(air == 20){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-1-2-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/orange-1-2-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-1-2-0.png";
            }
        }
        if(air == 40){
            roleImg = "./img/game/roleImg/orange-1-4-0.png";
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-1-0-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/orange-1-0-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/orange-1-0-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-1-0-0.png";
            }
        }
    }
    //↓20元面鏡
    if(mask == 20){
        if(air == 10){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-2-1-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/orange-2-1-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-2-1-0.png";
            }
        }
        if(air == 20){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-2-2-1.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-2-2-0.png";
            }
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-2-0-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/orange-2-0-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-2-0-0.png";
            }
        }
    }
    //↓40元面鏡
    if(mask == 40){
        if(air == 10){
            roleImg = "./img/game/roleImg/orange-4-1-0.png";
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-4-0-1.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-4-0-0.png";
            }
        }
    }

    //不戴面鏡
    if(mask == 0){
        if(air == 10){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-0-1-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/orange-0-1-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/orange-0-1-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-0-1-0.png";
            }
        }
        if(air == 20){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-0-2-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/orange-0-2-2.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-0-2-0.png";
            }
        }
        if(air == 40){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-0-4-1.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-0-4-0.png";
            }
        }
        if(air == 0){
            if(shoe == 10){
                roleImg = "./img/game/roleImg/orange-0-0-1.png";
            }
            if(shoe == 20){
                roleImg = "./img/game/roleImg/orange-0-0-2.png";
            }
            if(shoe == 40){
                roleImg = "./img/game/roleImg/orange-0-0-4.png";
            }
            if(shoe == 0){
                roleImg = "./img/game/roleImg/orange-0-0-0.png";
            }
        }
    }
};

//遊戲


function startGame() {
    
    myGamePiece = new component(54, roleHeight, roleImg, (canvasWidth/2 - 15), (40 + roleHeight/2), "image"); // ←調整角色圖片
    myLeftBtn = new component((canvasWidth/2), canvasHeight, "rgba(255,255,255,0)", 0 ,0 );
    myRightBtn = new component((canvasWidth/2), canvasHeight, "rgba(255,255,255,0)", (canvasWidth/2),0 );
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

        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);

        window.addEventListener('keydown', function (e) { //聆聽鍵盤按下事件
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) { //聆聽鍵盤放開事件，取消按下事件
            myGameArea.key = false;
            keyDown = false;  
        })

        if( window.innerWidth < 700 ){
            window.addEventListener('mousedown', function (e) {
                myGameArea.x = e.pageX;
                myGameArea.y = e.pageY;
            })
            window.addEventListener('mouseup', function (e) {
                myGameArea.x = false;
                myGameArea.y = false;
                touch = false;
            })
            window.addEventListener('touchstart', function (e) {
                myGameArea.x = e.pageX;
                myGameArea.y = e.pageY;
            })
            window.addEventListener('touchend', function (e) {
                myGameArea.x = false;
                myGameArea.y = false;
                touch = false;
            })
        }
    },

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); //去除動畫舊畫面
    },
    stop: function () { //  血量歸零時的行為
        
        clearInterval(this.interval);//停止遊戲
        // alert(myScore.text);//顯示分數(開發用)
        localStorage.setItem('myScore', parseInt(myGameArea.frameNo * (speed * 0.05)));//儲存分數(這裡要接後端)
        var scoreResult = parseInt(myGameArea.frameNo * (speed * 0.05));
        // function $id(id){
        //     return document.getElementById(id);
        // }
        // alert(scoreResult);
        let xhr = new XMLHttpRequest();
        xhr.open("Post", "#.php", true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        let data_info = `memGamePoint=${scoreResult}`;
        xhr.send(data_info); 

        // localStorage.setItem('roleImg', roleImg);//儲存角色圖片(這裡要接後端)
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

            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            ctx.shadowColor = "rgba(255, 255, 255, 0.5)";//陰影顏色

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
        //↓回報撞擊
        return crash;
    }

    this.clicked = function() {
        var myleft = this.x;
        var myright = this.x + (canvasWidth/2);
        var mytop = this.y;
        var mybottom = this.y + (canvasHeight);
        var clicked = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
          clicked = false;
        }
        return clicked;
    }

    if (myObstaclesSpeed == -18){ //速度達預設值時的行為
        doubleScore = 3;//分數加成速度變快
        yellowScore = true;//分數變黃
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

//動畫更新處(一秒更新50次)，所有要動的東西都要放這。
function updateGameArea() {

    myGameArea.clear(); //清除上一格畫面

    if(window.innerWidth < 700){
        canvasWidth = window.innerWidth - 5;
    } else {
        canvasWidth = 700
    }

    this.canvas.width = canvasWidth; //代入全域變數
    this.canvas.height = canvasHeight; //代入全域變數

    var x

    if (maxLife <= 0){
        myGameArea.stop();
        return;
    }

    for (var i = 0; i < myObstacles.length; i += 1) {
        
        myObstacles[i].angle += 1 * Math.PI / 180;

        if (myGamePiece.crashWith(myObstacles[i]) && hit == false) {

            --maxLife;
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
    
    //【←】↓
    if (myGameArea.key && myGameArea.key == 37 ) {
        if( keyDown == false && (myGamePiece.x) >= (canvasWidth/2 -145)){ //正常程式碼
        // if( keyDown == false){  //突破系統限制用(開發者模式)
            myGamePiece.speedX = -(canvasWidth/3);
            keyDown = true;            
        }

    } 
    //【→】↓
    if (myGameArea.key && myGameArea.key == 39 ) {
        if( keyDown == false && (myGamePiece.x) <= (canvasWidth/2 )){
            myGamePiece.speedX = (canvasWidth/3);
            keyDown = true;            
        }

    } 
    //【A】↓
    if (myGameArea.key && myGameArea.key == 65 ) {
        if( keyDown == false && (myGamePiece.x) >= (canvasWidth/2 -145)){ //正常程式碼
        // if( keyDown == false){  //突破系統限制用(開發者模式)
            myGamePiece.speedX = -(canvasWidth/3);
            keyDown = true;            
        }

    } 
    //【D】↓
    if (myGameArea.key && myGameArea.key == 68 ) {
        if( keyDown == false && (myGamePiece.x) <= (canvasWidth/2 )){
            myGamePiece.speedX = (canvasWidth/3);
            keyDown = true;            
        }

    } 

    //觸控螢幕
    if (myGameArea.x && myGameArea.y) {
        if (myLeftBtn.clicked()) {
            if( touch == false && (myGamePiece.x) >= (canvasWidth/3)){ //正常程式碼
                myGamePiece.speedX = -(canvasWidth/3);
                touch = true;           
            }
        }
        if (myRightBtn.clicked()) {
            if( touch == false && (myGamePiece.x) <= (canvasWidth/3 *2)){
                myGamePiece.speedX = (canvasWidth/3);
                touch = true;            
            }
        }
    }

    myBackground.speedY = -0;
    myBackground.newPos();
    myBackground.update();

    myGameArea.frameNo += doubleScore; //增加格數(計算分數用，當分數達100多時，格數一次會增加兩格)

    //產生障礙物
    if (postSign == true) {//當接收到生成訊號時產生障礙物
        var x = myGameArea.canvas.width;

        Case = parseInt(Math.random() * 2) + 1; //取得隨機數

        rockOne = parseInt(Math.random() * 2) + 1;
        rockTwo = parseInt(Math.random() * 2) + 1;
        rockThree = parseInt(Math.random() * 2) + 1;
        rockFour = parseInt(Math.random() * 2) + 1;

        switch(Case){
            case 1: //生成石頭(⠁⠂⠃)

                switch(rockOne){
                    case 1:
                        //使用石頭圖像一
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", ( x / 2 - x / 3), canvasHeight, "image")); //左
                        break;

                    case 2:
                        //使用石頭圖像二
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", ( x / 2 - x / 3), canvasHeight, "image")); //左 
                        break;

                };

                switch(rockTwo){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", ( x / 2 + x / 3 ), canvasHeight, "image")); //右
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", ( x / 2 + x / 3 ), canvasHeight, "image")); //右
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
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", ( x / 2 + x / 3 ), (canvasHeight + obstaclesSpace), "image")); //右
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", ( x / 2 + x / 3 ), (canvasHeight + obstaclesSpace), "image")); //右
                        break;
                        
                };
                
                postSign = false; //宣告生成完畢
                break;

            case 2://生成石頭(⠃⠂⠁)
                switch(rockOne){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", ( x / 2 - x / 3), canvasHeight, "image")); //左
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", ( x / 2 - x / 3), canvasHeight, "image")); //左 
                        break;

                };

                switch(rockTwo){
                    case 1:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", ( x / 2 + x / 3 ), canvasHeight, "image")); //右
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", ( x / 2 + x / 3 ), canvasHeight, "image")); //右
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
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock1.png", ( x / 2 - x / 3), (canvasHeight + obstaclesSpace), "image")); //右
                        break;

                    case 2:
                        myObstacles.push(new component(obstacleSize, obstacleSize, "./img/game/rock2.png", ( x / 2 - x / 3), (canvasHeight + obstaclesSpace), "image")); //右
                        break;
                        
                };
                
                postSign = false; //宣告生成完畢
                break;

        };
        
    }

    if ( (myGameArea.frameNo == 1 || everyinterval(150) ) && myObstaclesSpeed >= myObstaclesMaxSpeed ) { //多久加快一次 / 上限
        myObstaclesSpeed -= 1;
    }

    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].speedY = myObstaclesSpeed;//代裝備變數
        myObstacles[i].newPos();
        myObstacles[i].update();
    }

    for(var i=1; i <= maxLife; i++){
        heart.push(new component(30, 30, "./img/game/heart.png", 35*i, 35, "image")); //顯示剩餘血量
        heart[i].update();
    }

    if(myObstaclesSpeed <= -30){
        myScore.text = "生存分數:" + parseInt(myGameArea.frameNo * (speed * 0.05)); //調整分數增加速度
        myScore.update();
        myGamePiece.newPos();
        myGamePiece.update();
        myLeftBtn.update();
        myRightBtn.update();
    }else {
        myScore.text = "生存分數:" + parseInt(myGameArea.frameNo * (speed * 0.05)); //調整分數增加速度
        myScore.update();
        myGamePiece.newPos();
        myGamePiece.update();
        myLeftBtn.update();
        myRightBtn.update();
    }

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

// function $id(id){
//     return document.getElementById(id);
// }	
// let member;
// function sendForm(){
    //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
    //   let memId = $id("memId").value;  
    //   let memPsw = $id("memPsw").value; 
    // var point = document.getElementById('myScore').Value();
    // alert(scoreResult);
    // let xhr = new XMLHttpRequest();
    // xhr.onload = function(){
    //     member = JSON.parse(xhr.responseText);
    //     window.alert(member.memGamePoint);
        // if(member.memGamePoint){
        //   window.alert(memGamePoint);
        //   $id('memName').value = '';
        //   $id('memGamePoint').value = '';          
        // }else{
        //     window.alert("帳密錯誤~");
        // }
    // }

    // xhr.open("Post", "ajaxLogin.php", true);
    // xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    // //   let data_info = `memId=${memId}&memPsw=${memPsw}`;
    // xhr.send(data_info); 
// }
