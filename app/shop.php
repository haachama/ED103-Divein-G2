<?php

    require_once("./connectED103g2.php");

?>

<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./img/favicon.ico" type="image/x-icon" />
    <link rel="Shortcut Icon" href="./img/favicon.ico" type="image/x-icon" />

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./fontawesome/css/all.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>海中日子 | 購物商城</title>
</head>

<body class="shop">
    <header>
        <h1 class="logo">海中日子 Divein
            <a href="javascript:;"><img src="./img/header/logo.png" alt="logo"></a>
        </h1>
        <div class="nav">
            <ul>
                <li class="recommend_nav">
                    <a href="./spot.html">潛點推薦</a>
                </li>
                <li class="course_nav">
                    <a href="./course.html">潛水課程</a>
                </li>
                <li class="shop_nav">
                    <a href="./shop.html">潛水商城</a>
                </li>
                <li class="blog_nav">
                    <a href="./diary.html">潛水日誌</a>
                </li>
                <li class="game_nav">
                    <a href="./gameIntro.html">下潛遊戲</a>
                </li>
            </ul>
        </div>
        <div class="memCart">
            <ul>
                <li>HI,Billy</li>
                <li><a href="./memberLogin.html"><img src="./img/header/member.png"></a></li>
                <li><a href="javascript:;"><img src="./img/header/cart.png"></a></li>
            </ul>
        </div>
        <button class="hamburger hamburger--3dxy" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </header>

    <div class="bgBlack oneee">
        <div class="shopH2">
            <h2>潛水商城</h2>
        </div>

        <div class="itemType">
            <ul>
                <li>面鏡</li>
                <li>潛水錶</li>
                <li>手套</li>
                <li>蛙鞋</li>
            </ul>
        </div>

        <div class="itemList">
            <div class="product">
                <div class="productUp">
                    
                <?php
                  $sql = "select itemName , itemId , itemPrice , itemImg , itemDescription from item;";
                  $diveshop = $pdo->prepare($sql);
                  $diveshop->execute();
                  $shopRows = $diveshop->fetchAll(PDO::FETCH_ASSOC);
                    // print_r($shopRows);

                  foreach($shopRows as $shopType){
                    // echo  $shopType["itemName"],$shopType["itemPrice"];
                    
                    
                    echo '<div class="art">
                        <span class="itemName">',$shopType["itemName"],'</span>
                        <div class="item">
                            <img src="./img/shop/',$shopType["itemImg"],'" alt="">
                        </div>
                        <span class="NT">NT$',$shopType["itemPrice"],'</span>
                        
                        <div class="shopBtn">
                            <div class="bubbleBtn detail mainBtn_1">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix"
                                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                            <feComposite in="SourceGraphic" in2="goo" />
                                        </filter>
                                    </defs>
                                </svg>

                                <span class="button--bubble__container">
                                    <a href="#campaign" class="button button--bubble">
                                        查看詳情
                                    </a>
                                    <span class="button--bubble__effect-container">
                                        <span class="circle top-left"></span>
                                        <span class="circle top-left"></span>
                                        <span class="circle top-left"></span>

                                        <span class="button effect-button"></span>

                                        <span class="circle bottom-right"></span>
                                        <span class="circle bottom-right"></span>
                                        <span class="circle bottom-right"></span>
                                    </span>
                                </span>
                            </div>
                            <div class="bubbleBtn addCart" id="',$shopType["itemId"],'">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix"
                                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                            <feComposite in="SourceGraphic" in2="goo" />
                                        </filter>
                                    </defs>
                                </svg>

                                <span class="button--bubble__container">
                                    <a href="#campaign" class="button button--bubble">
                                        加入購物車
                                    </a>
                                    <span class="button--bubble__effect-container">
                                        <span class="circle top-left"></span>
                                        <span class="circle top-left"></span>
                                        <span class="circle top-left"></span>

                                        <span class="button effect-button"></span>

                                        <span class="circle bottom-right"></span>
                                        <span class="circle bottom-right"></span>
                                        <span class="circle bottom-right"></span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        
                        <i class="fas fa-heart"></i>
                        <div class="lightbox-block1">
                            <div class="lightbox1">
                                <div class="button_closeBox1">
                                    <button type="button" class="btn_modal_close">✖</button>
                                </div>
                                <h3>',$shopType["itemName"],'</h3>
                        
                            </div>
                        </div>
                    </div>';
                    
                  }
                ?>

        </div>
    </div>
    <footer>
        <div class="copyright">
            Copyright © 2020 Divein | 海中日子 All Rights Reserved.
        </div>
    </footer>
    <script src="./js/shop.js"></script>
    <script src="./js/bubbleBtn.js"></script>
    
</body>

</html>