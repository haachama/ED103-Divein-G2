
"use strict";//嚴格模式

//↓關閉規則
var rulebtn = document.getElementById("rulebtn");
var rulebtnX = document.getElementById("rulebtnX");
var ruleD = document.getElementById("ruleD");

rulebtn.addEventListener("click", function () {
    ruleD.style.display = "none";
}, false);

rulebtnX.addEventListener("click", function () {
    ruleD.style.display = "none";
}, false);

var total = 50;//設定起始金額
var totalPrice = document.getElementById("totalPrice");//抓取金額顯示處

//切換角色↓
var role = 1; //角色預設為 1 (1→綠色 2→粉紅色 3→橘色)

//抓取角色
var greenRole = document.getElementById("greenRole");
var pinkRole = document.getElementById("pinkRole");
var orangeRole = document.getElementById("orangeRole");

    //預設只顯示角色1(不寫這段的話，會預設顯示角色3)
    greenRole.style.display= "block";
    pinkRole.style.display= "none";
    orangeRole.style.display= "none";

//抓取切換角色按鈕
var changeRoleBtnLeft = document.getElementById("changeRoleBtnLeft");
var changeRoleBtnRight = document.getElementById("changeRoleBtnRight");

//↓抓取要點擊的區域(泡泡)
var mask10Btn = document.getElementById("mask10Btn");
var mask20Btn = document.getElementById("mask20Btn");
var mask40Btn = document.getElementById("mask40Btn");

var air10Btn = document.getElementById("air10Btn");
var air20Btn = document.getElementById("air20Btn");
var air40Btn = document.getElementById("air40Btn");

var shoe10Btn = document.getElementById("shoe10Btn");
var shoe20Btn = document.getElementById("shoe20Btn");
var shoe40Btn = document.getElementById("shoe40Btn");

//抓取要顯示的圖片
var mask10 = document.getElementById("mask10");
var mask20 = document.getElementById("mask20");
var mask40 = document.getElementById("mask40");

var air10 = document.getElementById("air10");
var air20 = document.getElementById("air20");
var air40 = document.getElementById("air40");

var shoe10 = document.getElementById("shoe10");
var shoe20 = document.getElementById("shoe20");
var shoe40 = document.getElementById("shoe40");

//所有裝備狀態預設為「未購買」
var mask10Display = false; 
var mask20Display = false;
var mask40Display = false;
var air10Display = false;
var air20Display = false;
var air40Display = false;
var shoe10Display = false;
var shoe20Display = false;
var shoe40Display = false;

//宣告函數

//函數:搖晃剩餘金額(餘額不足時呼叫)
function shake (){
    totalPrice.style.transform = "rotate(-4deg)";
    setTimeout(function(){ 
        totalPrice.style.transform = "rotate(4deg)"; 
        setTimeout(function(){ totalPrice.style.transform = "rotate(0deg)"; }, 100);
    }, 100);
};

//函數:顯示該裝備，並關閉其他裝備(點擊該裝備時呼叫)

//顯示$10面鏡↓
function mask10Block (){
    //顯示該面鏡，關閉其他面鏡↓
    mask10.style.display = "block";
    mask20.style.display = "none";
    mask40.style.display = "none";

    //顯示該面鏡邊框，關閉其他面鏡邊框↓
    mask10Btn.style.border = "5px solid rgb(255,0,0)";
    mask20Btn.style.border = "0px solid rgb(255,0,0)";
    mask40Btn.style.border = "0px solid rgb(255,0,0)";

    //將該面鏡狀態設為true(顯示中)，將其他面鏡狀態設為false(未顯示)↓
    mask10Display = true; 
    mask20Display = false;
    mask40Display = false;
};

//顯示$20面鏡
function mask20Block (){
    mask10.style.display = "none";
    mask20.style.display = "block";
    mask40.style.display = "none";
        
    mask10Btn.style.border = "0px solid rgb(255,0,0)";
    mask20Btn.style.border = "5px solid rgb(255,0,0)";
    mask40Btn.style.border = "0px solid rgb(255,0,0)";

    mask10Display = false;
    mask20Display = true;
    mask40Display = false;
};

//顯示$40面鏡
function mask40Block (){
    mask10.style.display = "none";
    mask20.style.display = "none";
    mask40.style.display = "block";

    mask10Btn.style.border = "0px solid rgb(255,0,0)";
    mask20Btn.style.border = "0px solid rgb(255,0,0)";
    mask40Btn.style.border = "5px solid rgb(255,0,0)";

    mask10Display = false;
    mask20Display = false;
    mask40Display = true;
};

//顯示$10氣瓶
function air10Block (){
    air10.style.display = "block";
    air20.style.display = "none";
    air40.style.display = "none";

    air10Btn.style.border = "5px solid rgb(255,0,0)";
    air20Btn.style.border = "0px solid rgb(255,0,0)";
    air40Btn.style.border = "0px solid rgb(255,0,0)";

    air10Display = true;
    air20Display = false;
    air40Display = false;
};

//顯示$20氣瓶
function air20Block (){
    air10.style.display = "none";
    air20.style.display = "block";
    air40.style.display = "none";
    
    air10Btn.style.border = "0px solid rgb(255,0,0)";
    air20Btn.style.border = "5px solid rgb(255,0,0)";
    air40Btn.style.border = "0px solid rgb(255,0,0)";

    air10Display = false;
    air20Display = true;
    air40Display = false;
};

//顯示$40氣瓶
function air40Block (){
    air10.style.display = "none";
    air20.style.display = "none";
    air40.style.display = "block";
    
    air10Btn.style.border = "0px solid rgb(255,0,0)";
    air20Btn.style.border = "0px solid rgb(255,0,0)";
    air40Btn.style.border = "5px solid rgb(255,0,0)";

    air10Display = false;
    air20Display = false;
    air40Display = true;
};

//顯示$10蛙鞋
function shoe10Block (){
    shoe10.style.display = "block";
    shoe20.style.display = "none";
    shoe40.style.display = "none";
    
    shoe10Btn.style.border = "5px solid rgb(255,0,0)";
    shoe20Btn.style.border = "0px solid rgb(255,0,0)";
    shoe40Btn.style.border = "0px solid rgb(255,0,0)";

    shoe10Display = true;
    shoe20Display = false;
    shoe40Display = false;
};


//顯示$20蛙鞋
function shoe20Block (){
    shoe10.style.display = "none";
    shoe20.style.display = "block";
    shoe40.style.display = "none";
    
    shoe10Btn.style.border = "0px solid rgb(255,0,0)";
    shoe20Btn.style.border = "5px solid rgb(255,0,0)";
    shoe40Btn.style.border = "0px solid rgb(255,0,0)";

    shoe10Display = false;
    shoe20Display = true;
    shoe40Display = false;
};


//顯示$40蛙鞋
function shoe40Block (){
    shoe10.style.display = "none";
    shoe20.style.display = "none";
    shoe40.style.display = "block";
    
    shoe10Btn.style.border = "0px solid rgb(255,0,0)";
    shoe20Btn.style.border = "0px solid rgb(255,0,0)";
    shoe40Btn.style.border = "5px solid rgb(255,0,0)";

    shoe10Display = false;
    shoe20Display = false;
    shoe40Display = true;
};



//↓切換角色

changeRoleBtnLeft.addEventListener("click", function(){
    role -= 1;
    if(role < 1){//設定迴圈，角色1再往左就是角色3
        role = 3;
    }
    switch(role){//切換角色
        case 1:
            greenRole.style.display= "block";
            pinkRole.style.display= "none";
            orangeRole.style.display= "none";
            break;
        case 2:
            greenRole.style.display= "none";
            pinkRole.style.display= "block";
            orangeRole.style.display= "none";
            break;
        case 3:
            greenRole.style.display= "none";
            pinkRole.style.display= "none";
            orangeRole.style.display= "block";
            break;
    }
},false);
changeRoleBtnRight.addEventListener("click", function(){
    role += 1;
    if(role > 3){//設定迴圈，角色3再往右就是角色1
        role = 1;
    }
    switch(role){//切換角色
        case 1:
            greenRole.style.display= "block";
            pinkRole.style.display= "none";
            orangeRole.style.display= "none";
            break;
        case 2:
            greenRole.style.display= "none";
            pinkRole.style.display= "block";
            orangeRole.style.display= "none";
            break;
        case 3:
            greenRole.style.display= "none";
            pinkRole.style.display= "none";
            orangeRole.style.display= "block";
            break;
    }
},false);

//點擊面鏡的行為

mask10Btn.addEventListener("click", function(){
    if(mask10Display == false){
        if(mask10Display == false && mask20Display == true){//從$20面鏡切換到$10面鏡
            if((total + 20 -10) >= 0){//判定是否能夠購買

                total += 20;//取消購買$20面鏡，恢復原本金額(退費)
                total -= 10;//購買$10面鏡，扣除對應金額

                totalPrice.innerHTML = "$" + total;//更新html顯示的金額
                
                mask10Block();//呼叫「顯示」函數，顯示該裝備

            } else {//如果餘額不足，則呼叫「搖動剩餘金額」函數
                shake();
            }   
        }

        if(mask10Display == false && mask40Display == true){
            if((total + 40 - 10) >= 0){
                total += 40;
                total -= 10;
                totalPrice.innerHTML = "$" + total;

                mask10Block();
            } else {
                shake();
            } 
        }

        if(mask10Display == false && mask20Display == false && mask40Display == false){
            if((total - 10) >= 0){
                total -= 10;
                totalPrice.innerHTML = "$" + total;

                mask10Block();
            } else {
                shake();
            }
        }

    } else { //己顯示後再點一次 = 取消購買
        total += 10; //恢復原本金額(退費)
        document.getElementById("totalPrice").innerHTML = "$" + total;

        mask10.style.display = "none";//取消顯示
        mask10Btn.style.border = "0px solid rgb(255,0,0)";
        mask10Display = false;//狀態更新為，未購買
    }
},false);

mask20Btn.addEventListener("click", function(){
    if(mask20Display == false){
        if(mask20Display == false && mask10Display == true){
            if((total + 10 -20) >= 0){
                total += 10;
                total -= 20;
                
                mask20Block();
            } else{
                shake();
            }
        }

        if(mask20Display == false && mask40Display == true){
            if((total + 40 -20) >= 0){
                total += 40;
                total -= 20;
                totalPrice.innerHTML = "$" + total;
                
                mask20Block();
            } else{
                shake();
            }
        }

        if(mask10Display == false && mask20Display == false && mask40Display == false){
            if((total -20) >= 0){
                total -= 20;
                totalPrice.innerHTML = "$" + total;
                
                mask20Block();
            } else{
                shake();
            }
        }
    } else {
        total += 20;
        document.getElementById("totalPrice").innerHTML = "$" + total;

        mask20.style.display = "none";
        mask20Btn.style.border = "0px solid rgb(255,0,0)";
        mask20Display = false;
    }
},false);

mask40Btn.addEventListener("click", function(){
    if(mask40Display == false){
        if(mask40Display == false && mask10Display == true){
            if((total + 10 - 40 )>= 0){
                total += 10;
                total -= 40;
                totalPrice.innerHTML = "$" + total;

                mask40Block();
            } else {
                shake();
            }
        }

        if(mask40Display == false && mask20Display == true){
            if((total + 20 - 40) >= 0){
                total += 20;
                total -= 40;
                totalPrice.innerHTML = "$" + total;
                
                mask40Block();
            } else{
                shake();
            }
        }

        if(mask10Display == false && mask20Display == false && mask40Display == false){
            if((total - 40) >= 0){
                total -= 40;
                totalPrice.innerHTML = "$" + total;
                
                mask40Block();
            } else{
                shake();
            }
        }

    } else {
        total += 40;
        document.getElementById("totalPrice").innerHTML = "$" + total;

        mask40.style.display = "none";
        mask40Btn.style.border = "0px solid rgb(255,0,0)";
        mask40Display = false;
    }
},false);

//點擊氣瓶的行為

air10Btn.addEventListener("click", function(){
    if(air10Display == false){
        if(air10Display == false && air20Display == true){
            if((total + 20 -10) >= 0){
                total += 20;
                total -= 10;
                totalPrice.innerHTML = "$" + total;
                
                air10Block();
            } else{
                shake();
            }
        }

        if(air10Display == false && air40Display == true){
            if((total + 40 - 10) >= 0){
                total += 40;
                total -= 10;
                totalPrice.innerHTML = "$" + total;
                
                air10Block();
            } else{
                shake();
            }
        }

        if(air10Display == false && air20Display == false && air40Display == false){
            if((total - 10) >= 0){
                total -= 10;
                totalPrice.innerHTML = "$" + total;
                
                air10Block();
            } else{
                shake();
            }
        }

        
    } else {
        total += 10;
        document.getElementById("totalPrice").innerHTML = "$" + total;

        air10.style.display = "none";
        air10Btn.style.border = "0px solid rgb(255,0,0)";
        air10Display = false;
    }
},false);

air20Btn.addEventListener("click", function(){
    if(air20Display == false){
        if(air20Display == false && air10Display == true){
            if((total + 10 - 20) >= 0){
                total += 10;
                total -= 20;
                totalPrice.innerHTML = "$" + total;
                
                air20Block();
            } else{
                shake();
            }
        }

        if(air20Display == false && air40Display == true){
            if((total + 40 - 20) >= 0){
                total += 40;
                total -= 20;
                totalPrice.innerHTML = "$" + total;
                
                air20Block();
            } else{
                shake();
            }
        }

        if(air10Display == false && air20Display == false && air40Display == false){
            if((total - 20) >= 0){
                total -= 20;
                totalPrice.innerHTML = "$" + total;
                
                air20Block();
            } else{
                shake();
            }
        }
        
    } else {
        total += 20;
        document.getElementById("totalPrice").innerHTML = "$" + total;

        air20.style.display = "none";
        air20Btn.style.border = "0px solid rgb(255,0,0)";
        air20Display = false;
    }
},false);

air40Btn.addEventListener("click", function(){
    if(air40Display == false){
        if(air40Display == false && air10Display == true){
            if((total + 10 - 40) >= 0){
                total += 10;
                total -= 40;
                totalPrice.innerHTML = "$" + total;
                
                air40Block();
            } else{
                shake();
            }
        }

        if(air40Display == false && air20Display == true){
            if((total + 20 - 40) >= 0){
                total += 20;
                total -= 40;
                totalPrice.innerHTML = "$" + total;
                
                air40Block();
            } else{
                shake();
            }
        }

        if(air10Display == false && air20Display == false && air40Display == false){
            if((total - 40 ) >= 0){
                total -= 40;
                totalPrice.innerHTML = "$" + total;
                
                air40Block();
            } else{
                shake();
            }
        }

    } else {
        total += 40;
        document.getElementById("totalPrice").innerHTML = "$" + total;

        air40.style.display = "none";
        air40Btn.style.border = "0px solid rgb(255,0,0)";
        air40Display = false;
    }
},false);

//點擊蛙鞋的行為

shoe10Btn.addEventListener("click", function(){
    if(shoe10Display == false){
        if(shoe10Display == false && shoe20Display == true){
            if((total + 20 -10) >= 0){
                total += 20;
                total -= 10;
                totalPrice.innerHTML = "$" + total;
                
                shoe10Block();
            } else{
                shake();
            }
        }

        if(shoe10Display == false && shoe40Display == true){
            if((total + 40 - 10) >= 0){
                total += 40;
                total -= 10;
                totalPrice.innerHTML = "$" + total;
                
                shoe10Block();
            } else{
                shake();
            }
        }

        if(shoe10Display == false && shoe20Display == false && shoe40Display == false){
            if((total - 10) >= 0){
                total -= 10;
                totalPrice.innerHTML = "$" + total;
                
                shoe10Block();
            } else{
                shake();
            }
        }

    } else {
        total += 10;
        document.getElementById("totalPrice").innerHTML = "$" + total;

        shoe10.style.display = "none";
        shoe10Btn.style.border = "0px solid rgb(255,0,0)";
        shoe10Display = false;
    }
},false);

shoe20Btn.addEventListener("click", function(){
    if(shoe20Display == false){
        if(shoe20Display == false && shoe10Display == true){
            if((total + 10 - 20) >= 0){
                total += 10;
                total -= 20;
                totalPrice.innerHTML = "$" + total;
                
                shoe20Block();
            } else{
                shake();
            }
        }

        if(shoe20Display == false && shoe40Display == true){
            if((total + 40 - 20) >= 0){
                total += 40;
                total -= 20;
                totalPrice.innerHTML = "$" + total;
                
                shoe20Block();
            } else{
                shake();
            }
        }

        if(shoe10Display == false && shoe20Display == false && shoe40Display == false){
            if((total - 20 ) >= 0){
                total -= 20;
                totalPrice.innerHTML = "$" + total;
                
                shoe20Block();
            } else{
                shake();
            }
        }

    } else {
        total += 20;
        document.getElementById("totalPrice").innerHTML = "$" + total;

        shoe20.style.display = "none";
        shoe20Btn.style.border = "0px solid rgb(255,0,0)";
        shoe20Display = false;
    }
},false);

shoe40Btn.addEventListener("click", function(){
    if(shoe40Display == false){
        if(shoe40Display == false && shoe10Display == true){
            if((total + 10 - 40) >= 0){
                total += 10;
                total -= 40;
                totalPrice.innerHTML = "$" + total;
                
                shoe40Block();
            } else{
                shake();
            }
        }

        if(shoe40Display == false && shoe20Display == true){
            if((total + 20 -40) >= 0){
                total += 20;
                total -= 40;
                totalPrice.innerHTML = "$" + total;
                
                shoe40Block();
            } else{
                shake();
            }
        }

        if(shoe10Display == false && shoe20Display == false && shoe40Display == false){
            if((total - 40) >= 0){
                total -= 40;
                totalPrice.innerHTML = "$" + total;
                
                shoe40Block();
            } else{
                shake();
            }
        }

    } else {
        total += 40;
        document.getElementById("totalPrice").innerHTML = "$" + total;

        shoe40.style.display = "none";
        shoe40Btn.style.border = "0px solid rgb(255,0,0)";
        shoe40Display = false;
    }
},false);

//canvas能力圖動畫

var basicSpeed = 0;
var basicLife = 0;
var basicView = 0;

var equipSpeed = 0;
var equipLife = 0;
var equipView = 0;

var myGamePiece;
var ctx;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
}

var myGameArea = {
    canvas: document.getElementById('canvas'),

    start : function() {
        this.canvas.width = 103;
        this.canvas.height = 103;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    
    this.update = function(){
        width = myGameArea.canvas.width;
        var triangleValue = 8; //三角形內角，數字越大，內角角度越小

        ctx = myGameArea.context;
        ctx.fillStyle = "#000";//填色
        ctx.strokeStyle = 'gray';//邊框顏色
        ctx.lineWidth = 3; //邊框寬度

        ctx.beginPath();
        ctx.arc((width/2), (width/2), 50, 0, (Math.PI*4)/2, true); //最外圈
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc((width/2), (width/2), 40, 0, (Math.PI*4)/2, true);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc((width/2), (width/2), 30, 0, (Math.PI*4)/2, true);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc((width/2), (width/2), 20, 0, (Math.PI*4)/2, true);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.arc((width/2), (width/2), 10, 0, (Math.PI*4)/2, true); //最內圈
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "red";//填色
        
        ctx.beginPath();
        ctx.moveTo((width/2),(width/2 - (basicSpeed + equipSpeed))); //速度
        ctx.lineTo((width/2 - triangleValue), (width/2));

        ctx.lineTo((width/2 - (basicLife + equipLife) * 0.7),(width/2 + (basicLife + equipLife) * 0.7)); //體力
        ctx.lineTo((width/2), (width/2 + triangleValue));

        ctx.lineTo((width/2 + (basicView + equipView) * 0.7),(width/2 + (basicView + equipView) * 0.7)); //能見度
        ctx.lineTo((width/2 + triangleValue), (width/2));

        ctx.fill();

        
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();

    var addSpeed = 1; //線條改變速度(數字越大，改變越快，快還要更快!)

    //根據接收到的變數改變數值(漸變)
    switch(role){
        case 1: //綠
            if(basicSpeed < 20){
                basicSpeed += addSpeed;
            }
            if(basicLife < 10){
                basicLife += addSpeed;
            }
            if(basicLife > 10){
                basicLife -= addSpeed;
            }
            if(basicView < 10){
                basicView += addSpeed;
            }
            if(basicView > 10){
                basicView -= addSpeed;
            }
            break;
        case 2: //粉紅
            if(basicSpeed < 10){
                basicSpeed += addSpeed;
            }
            if(basicSpeed > 10){
                basicSpeed -= addSpeed;
            }
            if(basicLife < 10){
                basicLife += addSpeed;
            }
            if(basicLife > 10){
                basicLife -= addSpeed;
            }
            if(basicView < 20){
                basicView += addSpeed;
            }
            break;
        case 3: //橘
            if(basicSpeed < 10){
                basicSpeed += addSpeed;
            }
            if(basicSpeed > 10){
                basicSpeed -= addSpeed;
            }
            if(basicLife < 20){
                basicLife += addSpeed;
            }
            if(basicView < 10){
                basicView += addSpeed;
            }
            if(basicView > 10){
                basicView -= addSpeed;
            }
            break;
    }
    if(mask10Display == true){
        if(equipView < 10){
            equipView += addSpeed;
        }
        if(equipView > 10){
            equipView -= addSpeed;
        }
    }
    if(mask20Display == true){
        if(equipView < 20){
            equipView += addSpeed;
        }
        if(equipView > 20){
            equipView -= addSpeed;
        }
    }
    if(mask40Display == true){
        if(equipView < 30){
            equipView += addSpeed;
        }
        if(equipView > 30){
            equipView -= addSpeed;
        }
    }
    if(mask10Display == false && mask20Display == false && mask40Display == false){
        if(equipView > 0){
            equipView -= addSpeed;
        }
    }
    if(air10Display == true){
        if(equipLife < 10){
            equipLife += addSpeed;
        }
        if(equipLife > 10){
            equipLife -= addSpeed;
        }
    }
    if(air20Display == true){
        if(equipLife < 20){
            equipLife += addSpeed;
        }
        if(equipLife > 20){
            equipLife -= addSpeed;
        }
    }
    if(air40Display == true){
        if(equipLife < 30){
            equipLife += addSpeed;
        }
        if(equipLife > 30){
            equipLife -= addSpeed;
        }
    }
    if(air10Display == false && air20Display == false && air40Display == false){
        if(equipLife > 0){
            equipLife -= addSpeed;
        }
    }
    if(shoe10Display == true){
        if(equipSpeed < 10){
            equipSpeed += addSpeed;
        }
        if(equipSpeed > 10){
            equipSpeed -= addSpeed;
        }
    }
    if(shoe20Display == true){
        if(equipSpeed < 20){
            equipSpeed += addSpeed;
        }
        if(equipSpeed > 20){
            equipSpeed -= addSpeed;
        }
    }
    if(shoe40Display == true){
        if(equipSpeed < 30){
            equipSpeed += addSpeed;
        }
        if(equipSpeed > 30){
            equipSpeed -= addSpeed;
        }
    }
    if(shoe10Display == false && shoe20Display == false && shoe40Display == false){
        if(equipSpeed > 0){
            equipSpeed -= addSpeed;
        }
    }
}

var main = document.getElementsByTagName("main")[0];
main.onload = startGame(); 
//按下「開始遊戲」後傳值給遊戲頁

var startBtn = document.getElementById("startBtn");//抓取按鈕

var view;
var life;
var speed;

startBtn.addEventListener("click", function () {

    //判定使用者選擇什麼角色，並傳送角色顏色
    switch(role){
        case 1: //綠色
            localStorage.setItem('roleColor', 1);
            speed = 2;
            life = 1;
            view = 1;
            break;
        case 2: //粉紅色
            localStorage.setItem('roleColor', 2);
            speed = 1;
            life = 1;
            view = 2;
            break;
        case 3: //橘色
            localStorage.setItem('roleColor', 3);
            speed = 1;
            life = 2;
            view = 1;
            break;
    };

    //判定使用者選擇什麼面鏡，並傳送面鏡值
    if(mask10Display == true){
        localStorage.setItem('mask', 10);
        view += 1;
        localStorage.setItem('view', view);
    };
    if(mask20Display == true){
        localStorage.setItem('mask', 20);
        view += 2;
        localStorage.setItem('view', view);
    };
    if(mask40Display == true){
        localStorage.setItem('mask', 40);
        view += 3;
        localStorage.setItem('view', view);
    };
    if(mask10Display == false && mask20Display == false && mask40Display == false){
        localStorage.setItem('mask', 0);//空值
        localStorage.setItem('view', view);
    };

    //判定使用者選擇什麼氣瓶，並傳送氣瓶值
    if(air10Display == true){
        localStorage.setItem('air', 10);
        life += 1;
        localStorage.setItem('life', life);
    };
    if(air20Display == true){
        localStorage.setItem('air', 20);
        life += 2;
        localStorage.setItem('life', life);
    };
    if(air40Display == true){
        localStorage.setItem('air', 40);
        life += 3;
        localStorage.setItem('life', life);
    };
    if(air10Display == false && air20Display == false && air40Display == false){
        localStorage.setItem('air', 0);//空值
        localStorage.setItem('life', life);
    };

    //判定使用者選擇什麼蛙鞋，並傳送蛙鞋值
    if(shoe10Display == true){
        localStorage.setItem('shoe', 10);
        speed += 1;
        localStorage.setItem('speed', speed);
    };
    if(shoe20Display == true){
        localStorage.setItem('shoe', 20);
        speed += 2;
        localStorage.setItem('speed', speed);
    };
    if(shoe40Display == true){
        localStorage.setItem('shoe', 40);
        speed += 3;
        localStorage.setItem('speed', speed);
    };
    if(shoe10Display == false && shoe20Display == false && shoe40Display == false){
        localStorage.setItem('shoe', 0);//空值
        localStorage.setItem('speed', speed);
    };
});