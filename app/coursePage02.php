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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
        crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js"></script>


    <title>海中日子 | 潛水課程</title>

</head>


<body class="coursePage02">
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
    <section class="coursePage01_01">
        <div class="courseContent">
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
        


            $diveinRow = $diveIn->fetch(PDO::FETCH_ASSOC);
         

                echo'
                <div class="courseContentLeft">
                            <div class="courseImgLeft">
                                <img  src="./img/course/',$diveinRow["classImage"],'">
                            </div>
                </div>
                <div class="courseContentRight">
                        <div class="coursePright">
                            <p class="courseOwaow01">',$diveinRow["className"],'</p>
                            <span class="coursePp01">上課日期：</span><span class="courseP01">',$diveinRow["courseDate"],' ~ ',$diveinRow["endDate"],'</span>
                            <span class="coursePp01">教練：</span><span class="courseP01">',$diveinRow["trainerName"],'</span>
                            <span class="coursePp01">上課地點：</span><span class="courseP01">',$diveinRow["diveName"],'</span>
                            <span class="coursePp01">學員名額：</span><span class="courseP01">',$diveinRow["studentNum"],' /',$diveinRow["classQuota"],'</span>
                            <span class="coursePp01">課程價格：</span><span class="courseP01">$',$diveinRow["classPrice"],'</span>
                        </div>
                        <div class="courseButton">
                            <div class="bubbleBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="goo">
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                                result="goo" />
                                            <feComposite in="SourceGraphic" in2="goo" />
                                        </filter>
                                    </defs>
                                </svg>
                        
                                <span class="button--bubble__container">
                                    <a href="./coursePage03.php?classNo=',$diveinRow["classNo"],'" class="button button--bubble">
                                        立即報名
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
                </div>';
            ?>
        </div>
    </section>
    <div class="courseDay">
        <div class="courseSign_01">
            <h2 class="courseSign_02">課程內容</h2>
        </div>
        <!-------------tab----------------->
        <div class="courseTab_container">

            <div class="courseTab_list_block">
                <ul class="courseTab_list">
                    <?php
                    $no=$_GET["classNo"];
                    $sql = "select c.classNo, a.courseNo,b.courseDay ,b.schedule,b.agendaContext
                            from class c join course a on (c.courseNo = a.courseNo)
                            join coursecontent b on (c.courseNo = b.courseNo)
                            where c.classNo = $no
                            group by b.courseDay; ";
                    $diveIn = $pdo->query($sql);
                
                    $diveinRows = $diveIn->fetchAll(PDO::FETCH_ASSOC);
                    foreach($diveinRows as $diveinRow) {
                        if($diveinRow["courseDay"]==1){
                            echo '  
                            <li><a href="#" data-target="courseTab',$diveinRow["courseDay"],'" class="courseTab -on">第',$diveinRow["courseDay"],'天</a></li>
                            ';
                        }else{
                            echo '    
                            <li><a href="#" data-target="courseTab',$diveinRow["courseDay"],'" class="courseTab">第',$diveinRow["courseDay"],'天</a></li>
                            ';
                        }
                    }
                    ?>
                </ul>
            </div>
            <div class="courseTab_contents">
                <div class="courseTab courseTab1 -on">
                    <div class="courseSchedule">
                        <?php
                            $no=$_GET["classNo"];
                            $sql = "select c.classNo, a.courseNo,b.courseDay ,b.schedule,b.agendaContext
                                    from class c join course a on (c.courseNo = a.courseNo)
                                    join coursecontent b on (c.courseNo = b.courseNo)
                                    where c.classNo = $no;";
                            $diveIn = $pdo->query($sql);
                
                            $diveinRows = $diveIn->fetchAll(PDO::FETCH_ASSOC);
                            foreach($diveinRows as $diveinRow) {
                            ?>

                                <?php   
                                if($diveinRow["courseDay"] == 1){
                                    echo '    
                                    <span class="courseSchedule01">',$diveinRow["schedule"],'</span><span class="courseSchedule02">',$diveinRow["agendaContext"],'</span>
                                    ';
                                }
                            }
                        ?>
                    </div>
                </div>
                <div class="courseTab courseTab2">
                    <div class="courseSchedule">

                        <?php
                    foreach($diveinRows as $diveinRow) {
                        if($diveinRow["courseDay"] == 2){
                            echo '    
                            <span class="courseSchedule01">',$diveinRow["schedule"],'</span><span class="courseSchedule02">',$diveinRow["agendaContext"],'</span>
                            ';
                        }                    

                    }

                            
                    ?>

                    </div>
                </div>

                <div class="courseTab courseTab3">
                    <div class="courseSchedule">

                        <?php
                    foreach($diveinRows as $diveinRow) {
                        if($diveinRow["courseDay"] == 3){
                            echo '    
                            <span class="courseSchedule01">',$diveinRow["schedule"],'</span><span class="courseSchedule02">',$diveinRow["agendaContext"],'</span>
                            ';
                        }                    

                    }

                            
                    ?>

                    </div>
                </div>

                <div class="courseTab courseTab4">
                    <div class="courseSchedule">

                        <?php
                    foreach($diveinRows as $diveinRow) {
                        if($diveinRow["courseDay"] == 4){
                            echo '    
                            <span class="courseSchedule01">',$diveinRow["schedule"],'</span><span class="courseSchedule02">',$diveinRow["agendaContext"],'</span>
                            ';
                        }                    

                    }

                            
                    ?>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- <li><a href="#" data-target="courseTab2" class="courseTab">第二天</a></li>
                            <li><a href="#" data-target="courseTab3" class="courseTab">第三天</a></li>
                            <li><a href="#" data-target="courseTab4" class="courseTab">第四天</a></li> -->
    <!-- <div class="courseTab_contents">
                  
                  <div class="courseTab courseTab1 -on">
                      <div class="courseSchedule">
                        <span class="courseSchedule01">09 : 00</span><span class="courseSchedule02">學科課程-風險管理認知；水底世界與身體的變化、潛水裝備介紹。</span>
                        <span class="courseSchedule01">11 : 30</span><span class="courseSchedule02">學科課程-呼吸氣體對身體的影響。</span>
                        <span class="courseSchedule01">13 : 00</span><span class="courseSchedule02">平靜水域-浮潛教學、裝備組裝與操作、下水前安全檢查、面鏡排水、耳壓平衡、調節器排水、二級頭尋回..等水下技巧。</span>
                        <span class="courseSchedule01">16 : 30</span><span class="courseSchedule02">開放水域-第一次開放水域潛水與水下技巧評估。</span>
                      </div>
                  </div>
                  
                  <div class="courseTab courseTab2">
                      <div class="courseSchedule">
                        <span class="courseSchedule01">08 : 30</span><span class="courseSchedule02">深淺的顏色變化、耗氣量的變化。</span>
                        <span class="courseSchedule01">10 : 00</span><span class="courseSchedule02">指北針操作、潛伴失散程序。</span>
                        <span class="courseSchedule01">12 : 30</span><span class="courseSchedule02">水肺潛水技巧項目</span>
                        <span class="courseSchedule01">16 : 00</span><span class="courseSchedule02">計算氮殘量、潛水物理學…等。</span>
                      </div>
                  </div>
                  
                  <div class="courseTab courseTab3">
                      <div class="courseSchedule">
                        <span class="courseSchedule01">08 : 00</span><span class="courseSchedule02">開放水域2 Tanks（完成技巧表現)</span>
                        <span class="courseSchedule01">10 : 30</span><span class="courseSchedule02">練習肢體拉伸，呼吸調節，正確的水面呼吸和恢復呼吸方法</span>
                        <span class="courseSchedule01">13 : 00</span><span class="courseSchedule02">平靜水域-浮潛教學、裝備組裝與操作、下水前安全檢查、面鏡排水、耳壓平衡、調節器排水、二級頭尋回..等水下技巧。</span>
                        <span class="courseSchedule01">15 : 30</span><span class="courseSchedule02">開放水域-第一次開放水域潛水與水下技巧評估。</span>
                      </div>
                  </div>

                  <div class="courseTab courseTab4">
                      <div class="courseSchedule">
                        <span class="courseSchedule01">09 : 45</span><span class="courseSchedule02">學科課程-風險管理認知；水底世界與身體的變化、潛水裝備介紹。</span>
                        <span class="courseSchedule01">10 : 00</span><span class="courseSchedule02">學科課程-呼吸氣體對身體的影響。</span>
                        <span class="courseSchedule01">14 : 00</span><span class="courseSchedule02">平靜水域-浮潛教學、裝備組裝與操作、下水前安全檢查、面鏡排水、耳壓平衡、調節器排水、二級頭尋回..等水下技巧。</span>
                        <span class="courseSchedule01">15 : 30</span><span class="courseSchedule02">開放水域-第一次開放水域潛水與水下技巧評估。</span>
                      </div>
                  </div>
                </div>
                
            </div>
        </div> -->
    <div class="courseNotice">
        <div class="courseSign_03">
            <h2 class="courseSign_04">課程須知</h2>
        </div>
        <div class="courseNoticeCon review">
            <p class="courseOPEN close">
                本課程是為沒有時間完成開放水域潛水員課程的學員所設計, 並為您提供在潛水專 業人員的監督下在開放水域環境中潛水所需的培訓和經驗。 您將獲得 SSI 水肺潛水員證書, 經過額外的訓練後, 可以升級到 SSI
                開放水域潛水員證書。

                這是一個有限制的潛水證照課程，完成訓練後，可持證照到世界各地潛水。因潛水經驗與知識較少，須由合格的潛水專業人士帶領與督導下進行潛水活動，潛水活動深度限制在12公尺以內，但可經額外訓練後，升級到SSI開放水域潛水員。

                年滿十歲以上，身體健康狀況良好，請先參考SSI的健康聲明書與責任免除暨風險承擔同意書，若有身體健康上的任何狀況，須經醫師批准開立證明後，再進行潛水課程。

                正式上課前，可透過SSI線上學習數位教材完成居家學習，潛水課程須自備泳褲或泳衣，準備個人數位照片(生活照亦可須具正面照，提供上傳)。


            </p>
        </div>
    </div>
    <!------------------日誌-->
    <div class="courseXl">
        <h2>潛水日誌</h2>
    </div>
    <div class="courseDiaryCenter">
        <!-- <div class="courseDiarySolid">
            <a href="#">
                <div class="courseImgContent">
                    <div class="courseImgSolid">
                        <img src="./img/course/fish1017_03.jpg" class="image">
                    </div>
                    <div class="courseDiaryTitleA">
                        <div class="courseDiaryTitleFlex">
                            <div class="courseUserLogo"><img src="./img/course/courseUser.png" class="image"></div>
                            <h5 class="courseUserName">Diver</h5>
                        </div>
                        <h4 class="courseUserText">一起潛水吧!</h4>
                    </div>
                    <div class="courseDiaryTitleB">
                        <h4 class="courseDiaryTitleText">綠島-鋼鐵礁</h4>
                        <p class="courseDiaryTitleDate">2020-06-16 | 21:07</p>
                    </div>
                </div>

                <div class="courseDiaryText">
                    <div class="courseDiaryTextData">
                        <div>
                            <p>日誌類型 </p>
                            <p><span>課程</span><span></span></p>
                        </div>
                        <div>
                            <p>最大深度</p>
                            <p><span>33.2</span><span>米</span></p>
                        </div>
                        <div>
                            <p>平均深度</p>
                            <p><span>23.2</span><span>米</span></p>
                        </div>
                        <div>
                            <p>潛水時間</p>
                            <p><span>45</span><span>m</span></p>
                        </div>
                    </div>
                    <div class="courseDiaryTextP">
                        <p class="courseDiaryTextPP">海風的味道，就像夏天的擁抱</p>
                        <i class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
            </a>
        </div> -->
        <script>
             $(function(){
                        $.ajax({
                            url: 'getDiary.php',
                            type: 'get',
                            success: function(data) {
                                // result[i]['classImage']

                              
                                let content = "";
                                let result = JSON.parse(data);
                                console.log(result);
                                for (var i = 0; i < result.length; i++){
                                
                                let diarycourse = ((parseInt(result[i]['diaryPoint1']) + parseInt(result[i]['diaryPoint2']) + parseInt(result[i]['diaryPoint3']) + parseInt(result[i]['diaryPoint4']) + parseInt(result[i]['diaryPoint5'])) / 5);
                                console.log(diarycourse);
                                let maxdiarycourse = Math.max(parseInt(result[i]['diaryPoint1']),parseInt(result[i]['diaryPoint2']),parseInt(result[i]['diaryPoint3']),parseInt(result[i]['diaryPoint4']),parseInt(result[i]['diaryPoint5']));
                                console.log(maxdiarycourse);

                                    let courseTypeab = '';
                                   
                                    if(result[i]['diaryType'] == 1){
                                        courseTypeab ="旅潛";
                                    }else{
                                        courseTypeab = "課潛";
                                    }

                                    content += `<div class="courseDiarySolid">
                                                    <a href="#">
                                                        <div class="courseImgContent">
                                                            <div class="courseImgSolid">
                                                                <img src="./img/course/fish1017_03.jpg" class="image">
                                                            </div>
                                                            <div class="courseDiaryTitleA">
                                                                <div class="courseDiaryTitleFlex">
                                                                    <div class="courseUserLogo"><img src="./img/course/courseUser.png" class="image"></div>
                                                                    <h5 class="courseUserName">Diver</h5>
                                                                </div>
                                                                <h4 class="courseUserText">${result[i]['diaryName']}</h4>
                                                            </div>
                                                            <div class="courseDiaryTitleB">
                                                                <h4 class="courseDiaryTitleText">${result[i]['diveareaName']},${result[i]['diveName']}</h4>
                                                                <p class="courseDiaryTitleDate">${result[i]['diaryWriteDate']}</p>
                                                            </div>
                                                        </div>

                                                        <div class="courseDiaryText">
                                                            <div class="courseDiaryTextData">
                                                                <div>
                                                                    <p>日誌類型 </p>
                                                                    <p><span>${courseTypeab}</span><span></span></p>
                                                                </div>
                                                                <div>
                                                                    <p>最大深度</p>
                                                                    <p><span>${maxdiarycourse}</span><span>米</span></p>
                                                                </div>
                                                                <div>
                                                                    <p>平均深度</p>
                                                                    <p><span>${diarycourse}</span><span>米</span></p>
                                                                </div>
                                                                <div>
                                                                    <p>潛水時間</p>
                                                                    <p><span>${result[i]['diaryTimePoint1']}</span><span>m</span></p>
                                                                </div>
                                                            </div>
                                                            <div class="courseDiaryTextP">
                                                                <p class="courseDiaryTextPP">${result[i]['diaryText']}</p>
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            
                                            
                                            `
                                   

                         
                                }
                                $('.courseDiaryCenter').html(content); 


                            }
                        })
            })
                    
        
        
        </script>
        
    </div>


    <footer>
        <footer>
            <div class="copyright">
                Copyright © 2020 Divein | 海中日子 All Rights Reserved.
            </div>
        </footer>
    </footer>
    <script src="./js/coursePage02.js"></script>
    <!-- <script src="./js/bubbleBtn.js"></script> -->
    <script>
    $('p.courseOPEN').on('click', function() {
        $(this).toggleClass('close');
    })
    </script>

</body>

</html>