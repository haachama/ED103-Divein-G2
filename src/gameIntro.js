
"use strict";//嚴格模式

//↓關閉規則說明
var rulebtn = document.getElementById("rulebtn");
var rulebtnX = document.getElementById("rulebtnX");
var ruleD = document.getElementById("ruleD");

rulebtn.addEventListener("click", function () {
    ruleD.style.display = "none";
}, false);

rulebtnX.addEventListener("click", function () {
    ruleD.style.display = "none";
}, false);


//按下「開始遊戲」的行為

var startBtn = document.getElementById("startBtn");
var mywin = window.open("about:blank", "redirect");
var openGame = false;
startBtn.addEventListener("click", function () {

    switch(role){
        case 1:
            localStorage.setItem('roleColor', 1);
            break;
        case 2:
            localStorage.setItem('roleColor', 2);
            break;
        case 3:
            localStorage.setItem('roleColor', 3);
            break;
    };

    if(mask10Display == true){
        localStorage.setItem('mask', 10);
    };
    if(mask20Display == true){
        localStorage.setItem('mask', 20);
    };
    if(mask40Display == true){
        localStorage.setItem('mask', 40);
    };
    if(mask10Display == false && mask20Display == false && mask40Display == false){
        localStorage.setItem('mask', 0);
    };

    if(air10Display == true){
        localStorage.setItem('air', 10);
    };
    if(air20Display == true){
        localStorage.setItem('air', 20);
    };
    if(air40Display == true){
        localStorage.setItem('air', 40);
    };
    if(air10Display == false && air20Display == false && air40Display == false){
        localStorage.setItem('air', 0);
    };

    if(shoe10Display == true){
        localStorage.setItem('shoe', 10);
    };
    if(shoe20Display == true){
        localStorage.setItem('shoe', 20);
    };
    if(shoe40Display == true){
        localStorage.setItem('shoe', 40);
    };
    if(shoe10Display == false && shoe20Display == false && shoe40Display == false){
        localStorage.setItem('shoe', 0);
    };

    openGame = true;
});

if(openGame == true){
    window.open("game.html", "_self");
};

//↓點擊裝備的行為

var total = 50;
var totalPrice = document.getElementById("totalPrice");

//宣告函數
function shake (){
    totalPrice.style.transform = "rotate(-4deg)";
    setTimeout(function(){ 
        totalPrice.style.transform = "rotate(4deg)"; 
        setTimeout(function(){ totalPrice.style.transform = "rotate(0deg)"; }, 100);
    }, 100);
};

function mask10Block (){
    mask10.style.display = "block";
    mask20.style.display = "none";
    mask40.style.display = "none";
        
    mask10Btn.style.border = "5px solid rgb(255,0,0)";
    mask20Btn.style.border = "0px solid rgb(255,0,0)";
    mask40Btn.style.border = "0px solid rgb(255,0,0)";

    mask10Display = true;
    mask20Display = false;
    mask40Display = false;
};

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
//切換角色
var role = 1;

var greenRole = document.getElementById("greenRole");
var pinkRole = document.getElementById("pinkRole");
var orangeRole = document.getElementById("orangeRole");
    greenRole.style.display= "block";
    pinkRole.style.display= "none";
    orangeRole.style.display= "none";
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

var mask10Display = false; 
var mask20Display = false;
var mask40Display = false;
var air10Display = false;
var air20Display = false;
var air40Display = false;
var shoe10Display = false;
var shoe20Display = false;
var shoe40Display = false;

//↓切換角色

changeRoleBtnLeft.addEventListener("click", function(){
    role -= 1;
    if(role < 1){
        role = 3;
    }
    switch(role){
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
    if(role > 3){
        role = 1;
    }
    switch(role){
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
        if(mask10Display == false && mask20Display == true){
            if((total + 20 -10) >= 0){
                total += 20;
                total -= 10;
                totalPrice.innerHTML = "$" + total;
                
                mask10Block();
            } else {
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

    } else {
        total += 10;
        document.getElementById("totalPrice").innerHTML = "$" + total;

        mask10.style.display = "none";
        mask10Btn.style.border = "0px solid rgb(255,0,0)";
        mask10Display = false;
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