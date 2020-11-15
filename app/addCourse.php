<?php
    require_once("./connectDive.php");
?>

<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./img/favicon.ico" type="image/x-icon" />
    <link rel="Shortcut Icon" href="./img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./fontawesome/css/all.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>海中日子 | 新增課程</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body class="addCourse">
    <header>
        <h1 class="logo">海中日子 Divein
            <a href="./main.html"><img src="./img/header/logo.png" alt="logo"></a>
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
                <li>HI,Billy</li>
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

    <main>
        <h3 class="addTitle">新增課程</h3>
        <form action="classInsert.php" method="post" enctype="multipart/form-data">
            <div class="content">
                <section>
                    <p>選擇課程<span class="mustWrite">*</span></p>
                    <div class="lessonType">

                        <?php
                        $sql = "SELECT courseName, courseNo , courseIcon FROM course;"; 
                        $course = $pdo->prepare($sql);
                        $course->execute();
                        $courseRows = $course->fetchAll(PDO::FETCH_ASSOC);
                        
                        foreach($courseRows as $courseType){
                            if($courseType["courseNo"] == 1){
                                $courseExp = "體驗潛水";
                                echo "<div>", "<img src='/app/img/addCourse/",$courseType["courseIcon"] ,"'>",$courseExp,"<input type='radio' name='courseNo' value=",$courseType["courseNo"],">","</div>";

                            }elseif($courseType["courseNo"] == 2){
                                $courseOw = "OW";
                                echo "<div>", "<img src='/app/img/addCourse/",$courseType["courseIcon"] ,"'>",$courseOw,"<input type='radio' name='courseNo' value=",$courseType["courseNo"],">","</div>";

                            }elseif($courseType["courseNo"] == 3){
                                $courseAow = "AOW";
                                echo "<div>", "<img src='/app/img/addCourse/",$courseType["courseIcon"] ,"'>",$courseAow,"<input type='radio' name='courseNo' value=",$courseType["courseNo"],">","</div>";

                            }elseif($courseType["courseNo"] == 4){
                                $courseOwAow = "OW + AOW";
                                echo "<div>", "<img src='/app/img/addCourse/",$courseType["courseIcon"] ,"'>",$courseOwAow,"<input type='radio' name='courseNo' value=",$courseType["courseNo"],">","</div>";

                            }
                        }

                    ?>
                    </div>
                </section>

                <section class="second">
                    <div>班級名稱<span class="mustWrite">*</span><br><input type="text" name="className"></div>
                    <div>開班價格<span class="mustWrite">*</span><br><input type="text" name="classPrice"></div>
                    <div>班級名額<span class="mustWrite">*</span><br>
                        <i class="fas fa-minus courseMinus"></i>
                        <input type="text" class="num" name="classQuota" value="0">
                        <i class="fas fa-plus coursePlus"></i>
                    </div>
                </section>

                <section class="third">
                    
                        <div>潛水區域<span class="mustWrite">*</span><br>
                            <select class="diveAreaName" name="diveAreaName">
                                <?php

                                    $sql = "SELECT diveAreaNo, diveAreaName FROM divearea ;"; 
                                    $spot = $pdo->prepare($sql);
                                    $spot->execute();
                                    $spotRows = $spot->fetchAll(PDO::FETCH_ASSOC);
                                    $firstDiveAreaNo = null;
                                    // 沒有資料時顯示---
                                    if (count($spotRows) == 0) {
                                    echo "<option value=''>---</option>";
                                    }else{
                                        // 有資料取第一筆No，下個select獲取潛點
                                        $firstDiveAreaNo = $spotRows[0]['diveAreaNo'];

                                        foreach($spotRows as $spotRow){
                                            echo "<option value=",$spotRow["diveAreaNo"]," class='areaOpt'>",$spotRow["diveAreaName"],"</option>";

                                        }
                                    }
                                ?>

                                <!-- <option value="greenLand">綠島</option>
                                <option value="lanyu"">蘭嶼</option>
                                <option value=" kenting">墾丁</option>
                                <option value="smallRyukyu">小琉球</option>
                                <option value="NEcorner">東北角</option> -->
                            </select>
                        </div>
                        <div>開課潛點<span class="mustWrite">*</span><br>
                            <select class = "diveNo"  name="diveNo">
                                
                                <?php
                                    $sql = "SELECT diveName,diveNo FROM divespots where diveAreaNo =:firstDiveAreaNo";
                                    $spotArea = $pdo->prepare($sql);
                                    $spotArea->bindValue(":firstDiveAreaNo", $firstDiveAreaNo);
                                    $spotArea->execute();
                                    $spotAreaRows = $spotArea->fetchAll(PDO::FETCH_ASSOC);
                                    
                                    foreach($spotAreaRows as $spotAreaRow){
                                        echo "<option value=",$spotAreaRow["diveNo"],">",$spotAreaRow["diveName"],"</option>";
                                    }
                                ?>

                                <!-- 選擇區域印出相對應的潛點 -->
                                <script>
                                    $('.diveAreaName').on("change",function(){
                                        var diveAreaNo = this.value;

                                        $.ajax({
                                            url:'diveAreaOption.php?diveAreaNo=' + diveAreaNo,
                                            type: 'get',
                                            dataType: 'html',
                                            success: function(data){
                                                $('.diveNo').html("");
                                                var content = "";
                                                var result = JSON.parse(data);

                                                $('.course .ms--images .ms-slide:nth-child(1) .ms-slide__image').css({
                                                    backgroundImage: 'result[i]['trainerImage']'
                                                })
                                                for(var i = 0 ; i<result.length ; i++){

                                                    content += "<option value=" +result[i]['diveNo'] +">" + result[i]['diveName']+"</option>"
                                                }
                                                $('.diveNo').html(content);
                                            },
                                            error: function (data) {
                                                console.log('出錯啦 data : ' + JSON.stringify(data));
                                            },
                                        })
                                    })
                                </script>

                                <!-- <option value="1">海底教堂</option>
                                <option value="2">鋼鐵礁</option>
                                <option value="3">石朗大香菇</option>
                                <option value="4">海底大峽谷</option>
                                <option value="5">雞仔礁</option> -->
                            </select>
                        </div>
                    
                        <div>
                            添加照片<br><input type="file" name="classImage">
                        </div>
                    
                </section>

                <section class="date">
                    <div>
                        開課日期<span class="mustWrite">*</span><br><input type="date" name="courseDate" id="courseDate">
                    </div>
                    <div>
                        結訓日期<span class="mustWrite">*</span><br><input type="text" value="--/--/--" id="endDate" name="endDate" readonly>
                    </div>
                    <div>
                        報名起始日期<span class="mustWrite">*</span><br><input type="date" name="startDate" id="startDate">

                    </div>
                    <div>
                    報名截止日期<span class="mustWrite">*</span><br><input type="text" name="deadLine" id="deadLine" value="--/--/--" readonly>
                    </div>
                </section>

                <div class="btnList">
                    <button class="btn cancelBtn">取消</button>

                    <input type="submit" value="儲存" class="btn saveBtn">
                </div>
            </div>
        </form>
    </main>

    <footer>
        <div class="copyright">
            Copyright © 2020 Divein | 海中日子 All Rights Reserved.
        </div>
    </footer>
    <script src="./js/addCourse.js"></script>
</body>

</html>
