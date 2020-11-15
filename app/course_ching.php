<?php
try {
	require("./connectED103g2.php");
} catch (PDOException $e) {  
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>

<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <title>海中日子 | 潛水課程</title>
    <style>
    .course ul.coursePagination li:first-child {
        color: unset;
        background-color: unset;
        border: 1px solid #fefefe;
    }

    .course ul.coursePagination li:first-child:hover {
        background-color: #fefefe;
    }

    .course ul.coursePagination li {
        padding: 0;
        border: 1px solid #fefefe;
    }

    .course .paging {
        color: unset;
        display: inline-block;
        padding: 10px 15px;
    }

    .course .paging:focus {
        outline: 0
    }

    .course .paging.-on {
        color: #073977;
        background-color: #fefefe;
        border: 1px solid #073977;
    }

    .course .fas, .course .far {
        color: #ffed65;
    }
    </style>
</head>

<body class="course">
    <!-- header是舊的 -->
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
    <section class="coursePage01">
        <div class="video-box">
            <video autoplay muted loop id="the-video">
                <source src="./img/course/courseVideodive.mp4" type="video/mp4">
            </video>
        </div>
        <div class="courseTitle">
            <span class="courseFont">已有</span><span class="courseNum" id="number">0</span><span
                class="courseFont">人成功</span>
        </div>
        <div class="courseTitle_2">
            <span class="courseFont">考取潛水證照</span>
        </div>

    </section>
    <section class="coursePage02">
        <div class="courseContainer">
            <div class="courseProfession">
                <h2 class="courseProfession01">專業潛導</h2>
            </div>
            <!-- Container for all sliders, and pagination -->
            <main class="sliders-container">
                <!-- Here will be injected sliders for images, numbers, titles and links -->

                <!-- Simple pagination for the slider -->
                <ul class="pagination">
                    <li class="pagination__item"><a class="pagination__button"></a></li>
                    <li class="pagination__item"><a class="pagination__button"></a></li>
                    <li class="pagination__item"><a class="pagination__button"></a></li>
                    <li class="pagination__item"><a class="pagination__button"></a></li>
                </ul>

                <script>
                    $(function(){
                        $.ajax({
                            url: 'getBestTrainer.php',
                            type: 'get',
                            success: function(data) {
                                // result[i]['classImage']
                                // 姓名
                                $('.ms--titles .ms-track').html('');
                                // 星等
                                $('.ms--links .ms-track').html('');
                                // 照片
                                $('.ms--images .ms-track').html('');

                                let contentName = "";
                                let contentStar = "";
                                let contentImg = "";
                                let $result = JSON.parse(data);

                                
                                for(var i=0; i<$result.length; i++){
                                    
                                    // 計算星等
                                    $score = $result[i]["trainerScore"] / $result[i]["studentNum"];
                                    $far = 'far';
                                    $fas = 'fas';
                                    $int = Math.floor($score);

                                    contentStar += '<li class="rating ms-slide">';

                                    for($j=1; $j<=5; $j++){
                                        if($j > $int){
                                            $fas = $far;
                                        }
                                        contentStar +=  `<i class="${$fas} fa-star"></i>`;
                                    }

                                    contentStar +=  '</li>';

                                    // 姓名的內容標籤做串接
                                    if(i == 0){
                                        contentName += `<li class="ms-slide" style="opacity:1"><h3>${$result[i]["trainerName"]}</h3></li>`;
                                    }else{
                                        contentName += `<li class="ms-slide" style="opacity:0"><h3>${$result[i]["trainerName"]}</h3></li>`;
                                    }
                                    // contentName += `<li class="ms-slide"><h3>${$result[i]["trainerName"]}</h3><input type="hidden" class="bestTrainer" value="${${$result[i]["trainerNo"]}}"></li>`;

                                    // 照片的內容標籤做串接
                                    contentImg += `<li class="ms-slide">
                                                        <div class="ms-slide__image-container">
                                                            <div class="ms-slide__image" style="transform: scale(1); background-image:url(./img/trainer/${$result[i]["trainerImage"]})"></div>
                                                        </div>    
                                                    </li>`;
                                }
                                
                                $('.ms--titles .ms-track').html(contentName);  //姓名
                                $('.ms--links .ms-track').html(contentStar);  //星等
                                $('.ms--images .ms-track').html(contentImg);  //照片

                            }
                        })
                    })
                    
                </script>

            </main>
            <!--button-->
            <div class="courseButton">
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

                    <span class="button--bubble__container">
                        <a href="#scrollDown" class="button button--bubble" id="courseCheck">
                            查看課程
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

        </div>
    </section>
    <section class="coursePage03" style="text-align:center;">
        <div class="courseClass" style="text-align:left;">
            <div class="courseSign">
                <h2 class="courseProfession01">課程報名</h2>
            </div>

            <div class="courseItem">
                <h4 class="courseH4">
                    選擇課程種類
                </h4>
                <div class="courseCa">
                    <div class="courseCheckbox">
                        <input type="radio" name="courseNo" value="1" class="courseTime">體驗課程
                    </div>
                    <div class="courseCheckbox">
                        <input type="radio" name="courseNo" value="2" class="courseTime">OW
                    </div>
                    <div class="courseCheckbox">
                        <input type="radio" name="courseNo" value="3" class="courseTime">AOW
                    </div>
                    <div class="courseCheckbox">
                        <input type="radio" name="courseNo" value="4" class="courseTime">OW + AOW
                    </div>

                </div>
            </div>
            <div class="courseItem_02">
                <h4 class="courseH4">
                    選擇上課日期
                </h4>
                <div class="courseCa_02">
                    <input type="date" name="courseDate" placeholder="MM/DD/YYYY" id="ddmmyyyyStart"> ~
                    <input type="date" name="endDate" placeholder="MM/DD/YYYY" id="ddmmyyyyEnd">
                </div>
            </div>
            <div class="courseItem_03">
                <h4 class="courseH4">
                    選擇教練
                </h4>
                <select class="courseSelect" name="trainerNo">
                    <!-- <option selected="selected" disabled="disabled"  style='display: none' value=''></option> -->

                    <option value="0">---</option>
                    <option value="1">Billy</option>
                    <option value="2">Amy</option>
                    <option value="3">Sam</option>
                    <option value="4">Zoe</option>
                    <option value="5">Samantha</option>
                    <option value="6">Tin</option>
                    <option value="7">Kiki</option>
                    <option value="8">Sean</option>
                    <option value="9">Daniel</option>

                    <!-- <script>
                        var trainerList = "<option value="0">---</option>";

                        for(){
                            trainerList += 
                        }
                    </script> -->
                </select>
            </div>
            <div class="courseItem_04">
                <h4 class="courseH4">
                    選擇地點
                </h4>
                <select class="courseSelect diveAreaName" name="diveAreaName">
                    <?php
                        // 引出區域
                        $sql = "SELECT diveAreaNo, diveAreaName FROM divearea ;"; 
                        $spot = $pdo->prepare($sql);
                        $spot->execute();
                        $spotRows = $spot->fetchAll(PDO::FETCH_ASSOC);
                        $firstDiveAreaNo = null;
                        // 沒有資料時顯示---
                        if (count($spotRows) == 0) {
                            echo "<option value=''>---</option>";
                        }else{ // 有資料取第一筆No，下個select獲取潛點
                            $firstDiveAreaNo = $spotRows[0]['diveAreaNo'];

                            foreach($spotRows as $spotRow){
                                echo "<option value=",$spotRow["diveAreaNo"]," class='areaOpt'>",$spotRow["diveAreaName"],"</option>";

                            }
                        }
                    ?>
                </select>
                <select class="courseSelect diveNo" name="diveNo">
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
                    $('.diveAreaName').on("change", function() {
                        var diveAreaNo = this.value;
                        // alert('123');

                        $.ajax({
                            url: 'diveAreaOption.php?diveAreaNo=' + diveAreaNo,
                            type: 'get',
                            dataType: 'html',
                            success: function(data) {
                                $('.diveNo').html("");
                                var content = "";
                                var result = JSON.parse(data);

                                let diveSpotContent = '';


                                for (var i = 0; i < result.length; i++) {

                                    diveSpotContent += "<option value=" + result[i]['diveNo'] +
                                        ">" + result[i]['diveName'] + "</option>"
                                }
                                $('.diveNo').html(diveSpotContent);
                            },
                            error: function(data) {
                                console.log('出錯啦 data : ' + JSON.stringify(data));
                            },
                        })
                    })
                    </script>
                    <!-- <option>海底教堂</option>
                        <option>鋼鐵礁</option>
                        <option>石朗大香菇</option>
                        <option>海底大峽谷</option>
                        <option>雞仔礁</option> -->`
                </select>
            </div>
        </div>

        <button type="submit" class="demo-btn" id="query">立即查詢</button>

        <div class="courseLesson" id="scrollDown" style="scroll-behavior:smooth">

            <!-- <div class="courseouter">
            </div> -->

        </div>
        <div class="coursePaginationBlock">
            <ul class="coursePagination"></ul>
        </div>
    </section>
    <footer>
        <div class="copyright">
            Copyright © 2020 Divein | 海中日子 All Rights Reserved.
        </div>
    </footer>
    <script src="./js/course_ching.js"></script>
    <script>
    let number = document.getElementById('number');

    let start = 20;
    let end = 1067;
    let ticks = 20;
    let speed = 50;

    let randomNumbers = [end]

    for (let i = 0; i < ticks - 1; i++) {
        randomNumbers.unshift(
            Math.floor(Math.random() * (end - start + 1) + start)
        );
    }

    randomNumbers.sort((a, b) => {
        return a - b
    });

    console.log(randomNumbers.length)

    let x = 0;
    let interval = setInterval(function() {

        number.innerHTML = randomNumbers.shift();

        if (++x === ticks) {
            window.clearInterval(interval);
        }

    }, speed);
    </script>


<script>

</script>






    <script>
    $("#query").on('click', function() {
        var courseNo = $("[name='courseNo']:checked").val();
        var courseDate = $("#ddmmyyyyStart").val();
        var endDate = $("#ddmmyyyyEnd").val();
        var trainerNo = $("[name='trainerNo']").val();
        var diveNo = $("[name='diveNo']").val();
        var url = 'classinfo.php?';

        if (courseNo != null && courseNo != 'undefind') {
            courseNo = `courseNo=${courseNo}&`;
            url += courseNo;
        }
        if (courseDate != null && courseDate != 'undefind') {
            courseDate = `courseDate=${courseDate}&`;
            url += courseDate;
        }
        if (endDate != null && endDate != 'undefind') {
            endDate = `endDate=${endDate}&`;
            url += endDate;
        }
        if (trainerNo != '---') {
            trainerNo = `trainerNo=${trainerNo}&`;
            url += trainerNo;
        }
        
        url += `diveNo=${diveNo}`;

        $.ajax({

            url: url,
            type: 'get',
            success: function(data) {

                let content = "";
                var page = JSON.parse(data);
                var result = page['content'];

                if (result.length == 0) {
                    Swal.fire('查無課程');
                }

                for (var i = 0; i < result.length; i++) {
                    content += `<div class="courseouter">
                                        <div class="caption">
                                            <img src="./img/course/${result[i]['classImage']}">
                                        </div>
                                
                                        <div class="courseDetail" id="moreDetail">
                                            <p class="courseOwaow">${result[i]['className']}</p>
                                            <span class="coursePp">上課日期：</span><span class="courseP">${result[i]['courseDate']} ~ ${result[i]['endDate']}</span>
                                            <span class="coursePp">教練：</span><span class="courseP">${result[i]['trainerName']}</span>
                                            <span class="coursePp">上課地點：</span><span class="courseP">${result[i]['diveName']}</span>
                                            <span class="coursePp">課程價格：</span><span class="courseP">${result[i]['classPrice']}</span>

                                
                                            <div class="courseButton_01" id="btn">
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
                                                        <a href="./coursePage02.php?classNo=${result[i]['classNo']}" class="button button--bubble">
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
                                        </div>
                                    </div>`
                }
                $('.courseLesson').html(content);
                bubble()

                //分頁查詢 
                var total = page['total'];
                var totalPage = page['totalPage'];

                // 渲染分頁的頁數
                var pagination = '';
                for (let j = 0; j < totalPage; j++) {
                    pagination += `<li><a class="paging">${j+1}</a></li>`;
                }
                $('.coursePagination').html(pagination);

                var pagingAgroup = document.getElementsByClassName("paging");
                // 為每個分頁綁訂ajax監聽
                for (let p = 0; p < pagingAgroup.length; p++) {
                    if (p == 0) {
                        pagingAgroup[p].classList.add("-on");
                    }
                    pagingAgroup[p].addEventListener("click", pageAjax, false)
                }

                function pageAjax() {
                    // 更改分頁高亮
                    $(this).closest("ul").find("li").removeClass("-on");
                    $(this).closest("ul").find("li").find("a.paging").removeClass('-on');
                    $(this).addClass("-on");
                    $(this).find("a.paging").addClass("-on");

                    // 獲取目前篩選的條件有哪些
                    var pagingA = $(this).html();
                    var courseNo = $("[name='courseNo']:checked").val();
                    var courseDate = $("#ddmmyyyyStart").val();
                    var endDate = $("#ddmmyyyyEnd").val();
                    var trainerNo = $("[name='trainerNo']").val();
                    var diveNo = $("[name='diveNo']").val();

                    var url = 'classinfo.php?';

                    if (courseNo != null && courseNo != 'undefind') {
                        courseNo = `courseNo=${courseNo}&`;
                        url += courseNo;
                    }
                    if (courseDate != null && courseDate != 'undefind') {
                        courseDate = `courseDate=${courseDate}&`;
                        url += courseDate;
                    }
                    if (endDate != null && endDate != 'undefind') {
                        endDate = `endDate=${endDate}&`;
                        url += endDate;
                    }
                    if (trainerNo != '---') {
                        trainerNo = `trainerNo=${trainerNo}&`;
                        url += trainerNo;
                    }

                    url += `diveNo=${diveNo}&page=${pagingA}`;

                    $.ajax({
                        url: url,
                        type: 'get',
                        success: function(data) {
                            $('.courseLesson').html('');
                            let content = "";
                            var page = JSON.parse(data);
                            var result = page['content'];

                            for (var i = 0; i < result.length; i++) {
                                content += `<div class="courseouter">
                                        <div class="caption">
                                            <img src="./img/course/${result[i]['classImage']}">
                                        </div>
                                
                                        <div class="courseDetail" id="moreDetail">
                                            <p class="courseOwaow">${result[i]['className']}</p>
                                            <span class="coursePp">上課日期：</span><span class="courseP">${result[i]['courseDate']} ~ ${result[i]['endDate']}</span>
                                            <span class="coursePp">教練：</span><span class="courseP">${result[i]['trainerName']}</span>
                                            <span class="coursePp">上課地點：</span><span class="courseP">${result[i]['diveName']}</span>
                                            <span class="coursePp">課程價格：</span><span class="courseP">${result[i]['classPrice']}</span>

                                
                                            <div class="courseButton_01" id="btn">
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
                                                        <a href="./coursePage02.php?classNo=${result[i]['classNo']}" class="button button--bubble">
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
                                        </div>
                                    </div>`
                            }
                            $('.courseLesson').html(content);

                            bubble();
                        }
                    })
                }
            },
            error: function(data) {
                console.log('出錯啦 data : ' + JSON.stringify(data));
            },
        })
    })

    function bubble() {
        $('.button--bubble').each(function() {
            var $circlesTopLeft = $(this).parent().find('.circle.top-left');
            var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

            var tl = new TimelineLite();
            var tl2 = new TimelineLite();

            var btTl = new TimelineLite({
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

            var tlBt1 = new TimelineLite();
            var tlBt2 = new TimelineLite();

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

            $(this).on('mouseover', function() {
                btTl.restart();
            });
        });
    }
    </script>

<script>
    $("#courseCheck").on('click', function() {
        let trainerContainer = document.getElementsByClassName('ms--titles')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
        let trainer;
        for(let k = 0; k < trainerContainer.length; k++){
            if(trainerContainer[k].style.opacity == 1){
                trainer = trainerContainer[k];
            }
        }

        let trainerName = trainer.getElementsByTagName('h3')[0].innerText;
        // trainerName1 = trainerName.trim();
        // console.log(trainerName1);


        //原ajax


        var url = 'courseTrainer.php?';

        
        url += `trainerName=${trainerName}`;

        $.ajax({

            url: url,
            type: 'get',
            success: function(data) {

                let content = "";
                var page = JSON.parse(data);
                var result = page['content'];

                if (result.length == 0) {
                    Swal.fire('查無課程');
                }

                for (var i = 0; i < result.length; i++) {
                    content += `<div class="courseouter">
                                        <div class="caption">
                                            <img src="./img/course/${result[i]['classImage']}">
                                        </div>
                                
                                        <div class="courseDetail" id="moreDetail">
                                            <p class="courseOwaow">${result[i]['className']}</p>
                                            <span class="coursePp">上課日期：</span><span class="courseP">${result[i]['courseDate']} ~ ${result[i]['endDate']}</span>
                                            <span class="coursePp">教練：</span><span class="courseP">${result[i]['trainerName']}</span>
                                            <span class="coursePp">上課地點：</span><span class="courseP">${result[i]['diveName']}</span>
                                            <span class="coursePp">課程價格：</span><span class="courseP">${result[i]['classPrice']}</span>

                                
                                            <div class="courseButton_01" id="btn">
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
                                                        <a href="./coursePage02.php?classNo=${result[i]['classNo']}" class="button button--bubble">
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
                                        </div>
                                    </div>`
                }
                $('.courseLesson').html(content);
                bubble()

                //分頁查詢 
                var total = page['total'];
                var totalPage = page['totalPage'];

                // 渲染分頁的頁數
                var pagination = '';
                for (let j = 0; j < totalPage; j++) {
                    pagination += `<li><a class="paging">${j+1}</a></li>`;
                }
                $('.coursePagination').html(pagination);

                var pagingAgroup = document.getElementsByClassName("paging");
                // 為每個分頁綁訂ajax監聽
                for (let p = 0; p < pagingAgroup.length; p++) {
                    if (p == 0) {
                        pagingAgroup[p].classList.add("-on");
                    }
                    pagingAgroup[p].addEventListener("click", pageAjax, false)
                }

                function pageAjax() {
                    // 更改分頁高亮
                    $(this).closest("ul").find("li").removeClass("-on");
                    $(this).closest("ul").find("li").find("a.paging").removeClass('-on');
                    $(this).addClass("-on");
                    $(this).find("a.paging").addClass("-on");

                    // 獲取目前篩選的條件有哪些
                    var pagingA = $(this).html();
                    var courseNo = $("[name='courseNo']:checked").val();
                    var courseDate = $("#ddmmyyyyStart").val();
                    var endDate = $("#ddmmyyyyEnd").val();
                    var trainerNo = $("[name='trainerNo']").val();
                    var diveNo = $("[name='diveNo']").val();

                    var url = 'classinfo.php?';

                    if (courseNo != null && courseNo != 'undefind') {
                        courseNo = `courseNo=${courseNo}&`;
                        url += courseNo;
                    }
                    if (courseDate != null && courseDate != 'undefind') {
                        courseDate = `courseDate=${courseDate}&`;
                        url += courseDate;
                    }
                    if (endDate != null && endDate != 'undefind') {
                        endDate = `endDate=${endDate}&`;
                        url += endDate;
                    }
                    if (trainerNo != '---') {
                        trainerNo = `trainerNo=${trainerNo}&`;
                        url += trainerNo;
                    }

                    url += `diveNo=${diveNo}&page=${pagingA}`;

                    $.ajax({
                        url: url,
                        type: 'get',
                        success: function(data) {
                            $('.courseLesson').html('');
                            let content = "";
                            var page = JSON.parse(data);
                            var result = page['content'];

                            for (var i = 0; i < result.length; i++) {
                                content += `<div class="courseouter">
                                        <div class="caption">
                                            <img src="./img/course/${result[i]['classImage']}">
                                        </div>
                                
                                        <div class="courseDetail" id="moreDetail">
                                            <p class="courseOwaow">${result[i]['className']}</p>
                                            <span class="coursePp">上課日期：</span><span class="courseP">${result[i]['courseDate']} ~ ${result[i]['endDate']}</span>
                                            <span class="coursePp">教練：</span><span class="courseP">${result[i]['trainerName']}</span>
                                            <span class="coursePp">上課地點：</span><span class="courseP">${result[i]['diveName']}</span>
                                            <span class="coursePp">課程價格：</span><span class="courseP">${result[i]['classPrice']}</span>

                                
                                            <div class="courseButton_01" id="btn">
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
                                                        <a href="./coursePage02.php?classNo=${result[i]['classNo']}" class="button button--bubble">
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
                                        </div>
                                    </div>`
                            }
                            $('.courseLesson').html(content);

                            bubble();
                        }
                    })
                }
            },
            error: function(data) {
                console.log('出錯啦 data : ' + JSON.stringify(data));
            },
        })
    })

    function bubble() {
        $('.button--bubble').each(function() {
            var $circlesTopLeft = $(this).parent().find('.circle.top-left');
            var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

            var tl = new TimelineLite();
            var tl2 = new TimelineLite();

            var btTl = new TimelineLite({
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

            var tlBt1 = new TimelineLite();
            var tlBt2 = new TimelineLite();

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

            $(this).on('mouseover', function() {
                btTl.restart();
            });
        });
    }

    

  
    </script>

</body>

</html>

<!-- todo
    1. 194行的選擇教練須從mysql撈資料出來--ok
    2. page03 成功插入一行報名資訊在資料庫
    3. page02 日誌動態生成
    4. page03 報名頁面資訊--ok

    5. 教練輪播圖的查看課程按鈕功能--ok
    5-1 scroll down
    last. 通過課程人數須從mysql撈資料

 -->