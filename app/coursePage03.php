<?php
try {
	require("./connectED103g2.php");



} catch (PDOException $e) {  
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>





<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <!-- <link rel="stylesheet" href="./css/course.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
        crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js"></script>


    <title>海中日子 | 潛水課程</title>

</head>


<body class="coursePage03">
    <div class="pu_black" id="pu_black"></div>
    <div class="cart_jump animate__animated animate__fadeIn" id="cart_jump" stlye="display:none;">
        <div class="button_close">
            <button class="jump_close" id="bclose">✖</button>
        </div>
        <div class="jump_title">
            報名完成
        </div>
        <div class="courseOkicon">
            <img src="./img/course/okicon.png">
        </div>
    </div>
    <header>
    <h1 class="logo">海中日子 Divein
        <a href="javascript:;"><img src="./img/header/logo.png" alt="logo"></a>
    </h1>
    <div class="nav">
        <ul>
            <li class="recommend_nav">
                <a href="javascript:;">潛點推薦</a>
            </li>
            <li class="course_nav">
                <a href="javascript:;">潛水課程</a>
            </li>
            <li class="shop_nav">
                <a href="javascript:;">潛水商城</a>
            </li>
            <li class="blog_nav">
                <a href="javascript:;">潛水日誌</a>
            </li>
            <li class="game_nav">
                <a href="javascript:;">下潛遊戲</a>
            </li>
        </ul>
    </div>
    <div class="memCart">
        <ul>
            <li><a href="javascript:;"><img src="./img/header/member.png"></a></li>
            <li><a href="javascript:;"><img src="./img/header/cart.png"></a></li>
        </ul>
    </div>
    <button class="hamburger hamburger--3dxy" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
</header>
    <section class="coursePage01_02">
        <div class="courseSign_05">
            <h2 class="courseSign_06">課程報名</h2>
        </div>
        <div class="courseOrder">
        <?php
            $no = $_GET["classNo"];
            // $sql = " select * from class where classNo = $no;";
            $sql = "select 
            c.studentNum, 
            c.classQuota, 
            c.classNo , 
            c.className, 
            c.classImage, 
            c.courseDate , 
            c.endDate,classPrice , 
            t.trainerName, 
            d.diveName , 
            c.courseNo
            from class c 
            left join trainer t on (c.trainerNo = t.trainerNo)
            left join divespots d on (c.diveNo = d.diveNo)
            where c.classNo = $no ;";

            $diveIn = $pdo->query($sql);
            // $diveIn->bindValue(":classNo",$_GET["classNo"]);
            // $diveIn->execute();

            $diveinRow = $diveIn->fetch(PDO::FETCH_ASSOC);
            // echo $diveincourseRows["classNo"];
            // foreach($diveincourseRows as $diveinRow) {
                echo'
            <div class="courseOrderLeft">
                <h3 class="courseInfo">確認課程資訊</h3>
                <p class="courseInfo_01">',$diveinRow["className"],'</p>
                <span class="coursePz">上課日期：</span><span class="coursePx">',$diveinRow["courseDate"],' - ',$diveinRow["endDate"],'</span>
                <span class="coursePz">教練：</span><span class="coursePx">',$diveinRow["trainerName"],'</span>
                <span class="coursePz">上課地點：</span><span class="coursePx">',$diveinRow["diveName"],'</span>
                <span class="coursePz">學員名額：</span><span class="coursePx">',$diveinRow["studentNum"],' /',$diveinRow["classQuota"],'</span>
                <span class="coursePz">課程價格：</span><span class="coursePx">$',$diveinRow["classPrice"],'</span>
            </div>
            <form class="courseOrderRight">
                <h3 class="courseInfo02">填寫報名資訊</h3>
                <div class="courseItem_A">
                    <span class="courseInfo02_1">姓名:</span>
                    <div class="courseInfo02_T  courseInput">
                        <input type="text" class="courseInfo02_11">
                    </div>
                </div>
                <div class="courseItem_B">
                    <span class="courseInfo02_1">電子郵件:</span>
                    <div class="courseInfo02_T courseInput02">
                        <input type="text" class="courseInfo02_11">
                    </div>
                </div>
                <div class="courseItem_B">
                    <span class="courseInfo02_1">付款方式:</span>
                    <div class="courseInfo02_T courseInput03">
                        <button class="courseInfo02_00" type="button" id="courseOw02">信用卡</button>
                        <button class="courseInfo02_00" type="button" id="courseOw02">ATM</button>
                    </div>
                </div>
                <div class="courseItem_B">
                    <span class="courseInfo02_4">備註:</span>
                    <div class="courseInfo02_T courseInput courseTextarea">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="courseButton01">
                        <div class="bubbleBtn">
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
    
                            <span class="button--bubble__container courseBttnn">
                                <a href="./coursePage03.php?classNo=',$diveinRow["classNo"],'" class="button button--bubble courseBttn">
                                    確認報名
                                </a>
                                <span class="button--bubble__effect-container courseAttn">
                                    <span class="circle top-left courseD"></span>
                                    <span class="circle top-left courseD"></span>
                                    <span class="circle top-left courseD"></span>
    
                                    <span class="button effect-button courseE"></span>
    
                                    <span class="circle bottom-right courseD"></span>
                                    <span class="circle bottom-right courseD"></span>
                                    <span class="circle bottom-right courseD"></span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </form>';
        ?>
        </div>
    </section>

    <footer>
        <footer>
    <div class="copyright">
        Copyright © 2020 Divein | 海中日子 All Rights Reserved.
    </div>
</footer>
    </footer>
    <script src="./js/jquery.ripples.js"></script>
    <script src="./js/coursePage03.js"></script>

    <script>
      

        // ripple

        $('body').ripples({
            resolution: 1280,
            dropRadius: 20,
            perturbance: 0.01,
        });

        $('canvas').css({
            position: "fixed",
        })
    </script>
    
</body>

</html>