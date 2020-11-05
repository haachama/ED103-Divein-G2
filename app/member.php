<?php
    $errMsg = "";
    try{
    require_once("./connectBooks.php");
    // $sql = "select * from member where memId=:memId and  memPsw=:memPsw";
    $sql = "select * from member";
    $member = $pdo->query($sql);
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    	
    }catch(PDOException $e){
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    }
?>

<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./img/favicon.ico" type="image/x-icon" />
    <link rel="Shortcut Icon" href="./img/favicon.ico" type="image/x-icon" />
    <title>海中日子 | 會員中心</title>
<link rel="stylesheet" href="./css/style.css">
<link rel="stylesheet" href="./fontawesome/css/all.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css">
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/build/ol.js"></script>

</head>

<body class="member">
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
    <div class="memberMain">
        <div class="memberAsideMenu">
            <div class="memberAsideMenuTitle"><a href="./trainerCenter.html">會員中心</a></div>
            <div class="memberOption">
                <p>Hello, <?=$memRow["memNickName"]?></p>
                <div class="memberFile"><img src="./img/member/member/<?=$memRow["memAvatar"]?>"></div>
                <ul class="memberPointPhone">
                    <li><p>紅利點數：</p><span><?=$memRow["points"]?></span></li>
                    <li><p>遊戲分數：</p><span><?=$memRow["memGamePoint"]?></span></li>
                </ul>
                <ul class="memberInformation">
                    <li><a href="javascript:;" class="show_mif">個人資料</a></li>
                    <li><a href="javascript:;" class="show_cpw">密碼修改</a></li>
                    <li>
                        <label for="memberImgFile">更換頭像</label>
                        <input type="file" id="memberImgFile" name="memberImgFile" accept="image/png, image/jpeg">
                    </li>
                </ul>
                <ul class="memberPoint">
                    <li><p>紅利點數：</p><span><?=$memRow["points"]?></span></li>
                    <li><p>遊戲分數：</p><span><?=$memRow["memGamePoint"]?></span></li>
                </ul>
            </div>
        </div>
        <div class="memberInfo">
            <div class="memberTabArea">
                <div class="memberTabListBlock">
                    <ul class="memberTabList">
                        <li><a href="#" data-target="Dia" class="memberTab -on">日誌</a></li>
                        <li><a href="#" data-target="Cor" class="memberTab">課程</a></li>
                        <li><a href="#" data-target="Tag" class="memberTab">採點</a></li>
                        <li><a href="#" data-target="Ord" class="memberTab">訂單</a></li>
                        <li><a href="#" data-target="Fav" class="memberTab">收藏</a></li>
                    </ul>
                </div>
    
                <div class="memberTabContents" >
    
                    <div class="memberTab Dia -on">
                        <div class="memberCourse">
                            <div class="memberImgContainer">
                                <img src="./img/member/diary/pexels-richard-segal-1618606.jpg">
                            </div>
                            <div class="memberCourseInfo">
                                <p>第一次潛水</p>
                                <p>潛水日期：09/20 - 09/24</p>
                                <p>潛水地點：大白沙</p>
                            </div>
                            <div class="memberDiaBtn">
                                <div class="memberDiaEditBtn demo-btn">
                                    <a href="#campaign">
                                        日誌編輯 
                                    </a>
                                </div>
                                <div class="memberDelBtn">
                                    <i class="far fa-trash-alt DelDia"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="memberPagination">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
    
                    <div class="memberTab Cor">
                        <div class="memberCourse">
                            <div class="memberImgContainer">
                                <img src="./img/member/course/divein_1.jpg">
                            </div>
                            <div class="memberCourseInfo">
                                <p>潛水體驗班</p>
                                <p>上課日期：09/20 - 09/24</p>
                                <p>上課地點：大白沙</p>
                            </div>
                            <div class="memberCorBtn">
                                <div class="memberCorInfBtn demo-btn">
                                    <a href="#campaign">
                                        詳細資訊
                                    </a>
                                </div>
                                <div class="memberCorInfBtn mainBtn_3 demo-btn">
                                    課程評鑑
                                </div>
                            </div>
                        </div>
                        <ul class="memberPagination">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                    <div class="lightbox-block3">
                        <div class="lightbox3">
                            <div class="button_closeBox3">
                                <button type="button" class="btn_modal_close">✖</button>
                            </div>
                            <h3>課程評鑑</h3>
                            <form action="" class="inlightbox-form3">
                                <ul class="pointCheckUl">
                                    <li><p>教練分數：</p></li>
                                    <li class="pointCheckLi">
                                        <div class="pointCheckArea">
                                            <div class="pointCheckColor"></div>
                                            <div class="pointCheckRadio">
                                                <input id="pl1" type="radio" value="1" name="pl">
                                                <label for="pl1"><div class="pointCheckStar StarOne"><img src="./img/member/course/star-01.png"></div></label>
                                                <input id="pl2" type="radio" value="2" name="pl">
                                                <label for="pl2"><div class="pointCheckStar StarTwo"><img src="./img/member/course/star-01.png"></div></label>
                                                <input id="pl3" type="radio" value="3" name="pl">
                                                <label for="pl3"><div class="pointCheckStar StarThree"><img src="./img/member/course/star-01.png"></div></label>
                                                <input id="pl4" type="radio" value="4" name="pl">
                                                <label for="pl4"><div class="pointCheckStar StarFour"><img src="./img/member/course/star-01.png"></div></label>
                                                <input id="pl5" type="radio" value="5" name="pl">
                                                <label for="pl5"><div class="pointCheckStar StarFive"><img src="./img/member/course/star-01.png"></div></label>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="pointButton"><input class="button btn_modal_close" type="button" value="送出"></li>
                                </ul>
                            </form>
                        </div>
                    </div>
    
                    <div class="memberTab Tag">
                        <div class="memberTag">
                            <div class="memberTagTabListBlock">
                                <ul class="memberTagTabList">
                                    <li><a href="#" data-target="LD" class="memberTagTab -on">綠島</a></li>
                                    <li><a href="#" data-target="LU" class="memberTagTab">蘭嶼</a></li>
                                    <li><a href="#" data-target="KD" class="memberTagTab">墾丁</a></li>
                                    <li><a href="#" data-target="SLC" class="memberTagTab">小琉球</a></li>
                                    <li><a href="#" data-target="DBG" class="memberTagTab">東北角</a></li>
                                </ul>
                            </div>
                            <div class="memberTagMap memberTagTab LD -on">
                                <div class="memberTagMapArea">
                                    <div id="mapIdLD" class="memberMapId"></div>
                                </div>
                            </div>
                            <div class="memberTagMap memberTagTab LU">
                                <div class="memberTagMapArea">
                                    <div id="mapIdLU" class="memberMapId"></div>
                                </div>
                            </div>
                            <div class="memberTagMap memberTagTab KD">
                                <div class="memberTagMapArea">
                                    <div id="mapIdKD" class="memberMapId"></div>
                                </div>
                            </div>
                            <div class="memberTagMap memberTagTab SLC">
                                <div class="memberTagMapArea">
                                    <div id="mapIdSLC" class="memberMapId"></div>
                                </div>
                            </div>
                            <div class="memberTagMap memberTagTab DBG">
                                <div class="memberTagMapArea">
                                    <div id="mapIdDBG" class="memberMapId"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="memberTab Ord">
                        <hr>
                        <div class ="memberOrdTitle">
                            <div class="memberOrdNo"><p>訂單編號</p></div>
                            <div class="memberOrdData"><p>訂單日期</p></div>
                            <div class="memberOrdName"><p>商品名稱</p></div>
                            <div class="memberOrdPrice"><p>訂單金額</p></div>
                        </div>
                        <hr>
                        <div class="memberOrderContent">
                            <div class="memberOrdNo"><p>001</p></div>
                            <div class="memberOrdData"><p>2020/09/26</p></div>
                            <div class="memberOrdName"><p>XXXXXXXXX</p></div>
                            <div class="memberOrdPrice"><p>$80000</p></div>
                        </div>
                        <ul class="memberPagination">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>

                    <div class="memberTab Fav">
                        <!-- <hr>
                        <div class ="memberFavTitle">
                            <div class="memberFavImg"><p>商品圖片</p></div>
                            <div class="memberOrdName"><p>商品名稱</p></div>
                            <div class="memberOrdBtn"></div>
                        </div>
                        <hr> -->
                        <div class="memberFavCourse">
                            <div class="memberFavContainerImg">
                                <img src="./img/trainer/coast.jpg">
                            </div>
                            <div class="memberFavContainerName">
                                <p>潛水體驗班</p>
                            </div>
                            <div class="memberFavContainerBtn">
                                <div class="memberFavInfBtn demo-btn">
                                    <a href="#campaign">
                                        加入購物車
                                    </a>
                                </div>
                                <div class="memberDelBtn">
                                    <i class="far fa-trash-alt DelFav"></i>
                                </div>
                            </div>
                        </div>
                        <div class="memberFavCourse">
                            <div class="memberFavContainerImg">
                                <img src="./img/trainer/coast.jpg">
                            </div>
                            <div class="memberFavContainerName">
                                <p>潛水體驗班2</p>
                            </div>
                            <div class="memberFavContainerBtn">
                                <div class="memberFavInfBtn demo-btn">
                                    <a href="#campaign">
                                        加入購物車
                                    </a>
                                </div>
                                <div class="memberDelBtn">
                                    <i class="far fa-trash-alt DelFav"></i>
                                </div>
                            </div>
                        </div>
                        <div class="memberFavCourse">
                            <div class="memberFavContainerImg">
                                <img src="./img/trainer/coast.jpg">
                            </div>
                            <div class="memberFavContainerName">
                                <p>潛水體驗班3</p>
                            </div>
                            <div class="memberFavContainerBtn">
                                <div class="memberFavInfBtn demo-btn">
                                    <a href="#campaign">
                                        加入購物車
                                    </a>
                                </div>
                                <div class="memberDelBtn">
                                    <i class="far fa-trash-alt DelFav"></i>
                                </div>
                            </div>
                        </div>
                        <ul class="memberPagination">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>

                    <?php
                    // $sql = "select * from member where memId=testg2 and  memPsw=testg2";
                    // $members = $pdo->query($sql);
                    // $memRow = $members->fetch(PDO::FETCH_ASSOC);
                    ?>
                    <div class="memberInfor memberIF">
                        <div class="memberInforTitle">
                            <h4>會員個人資料</h4>
                        </div>
                        <div class="memberInforArea">
                            <form action="">
                                <table>
                                    <tr>
                                        <th>會員帳號：</th>
                                        <td><?=$memRow["memId"]?></td>
                                    </tr>
                                    <tr>
                                        <th>會員密碼：</th>
                                        <td><?=$memRow["memPsw"]?></td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td><div class="show_cpw demo-btn"><p>密碼修改</p></div></td>
                                    </tr>
                                    <tr>
                                        <th>會員姓名：</th>
                                        <td><?=$memRow["memName"]?></td>
                                    </tr>
                                    <tr>
                                        <th>會員暱稱：</th>
                                        <td><?=$memRow["memNickName"]?></td>
                                    </tr>
                                    <tr>
                                        <th>OW證照：</th>
                                        <td><?=$memRow["licenseOw"]?></td>
                                    </tr>
                                    <tr>
                                        <th>AOW證照：</th>
                                        <td><?=$memRow["licenseAow"]?></td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td><div class="show_cli demo-btn"><p>證照填寫</p></div></td>
                                    </tr>
                                    <tr>
                                        <th>會員信箱：</th>
                                        <td><?=$memRow["memMail"]?></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div class="memberInforBtn">
                            <button type="button" class="show_cmif demo-btn">編輯資料</button>
                        </div>
                    </div>
                    <div class="memberInfor memberIFC">
                        <div class="memberInforTitle">
                            <h4>個人資料編輯</h4>
                        </div>
                        <div class="memberInforArea">
                            <form action="">
                                <table>
                                    <tr>
                                        <th>會員姓名：</th>
                                        <td><?=$memRow["memName"]?></td>
                                    </tr>
                                    <tr>
                                        <th>會員暱稱：</th>
                                        <td><input type="text" class="demo-input1" placeholder="<?=$memRow["memNickName"]?>"></td>
                                    </tr>
                                    <tr>
                                        <th>會員信箱：</th>
                                        <td><input type="text" class="demo-input1" placeholder="<?=$memRow["memMail"]?>"></td>
                                    </tr>
                                </table>
                                <div class="memberInforBtn">
                                    <button type="button" class="show_mif demo-btn">確認修改</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="memberInfor memberPSC">
                        <div class="memberInforTitle">
                            <h4>密碼修改</h4>
                        </div>
                        <div class="memberInforArea">
                            <form action="">
                                <table>
                                    <tr>
                                        <th>請輸入舊密碼：</th>
                                        <td><input type="password" class="demo-input6"></td>
                                    </tr>
                                    <tr>
                                        <th>請輸入新密碼：</th>
                                        <td><input type="password"  class="demo-input6"></td>
                                    </tr>
                                    <tr>
                                        <th>請輸入新密碼：</th>
                                        <td><input type="password" class="demo-input6"></td>
                                    </tr>
                                </table>
                                <div class="memberInforBtn">
                                    <button type="button" class="show_mif demo-btn">確認修改</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="memberInfor memberLIC">
                        <div class="memberInforTitle">
                            <h4>證照審查</h4>
                        </div>
                        <div class="memberInforArea">
                            <form action="">
                                <table>
                                    <tr>
                                        <th>請輸入OW字號：</th>
                                        <td><input type="text" class="demo-input1"></td>
                                    </tr>
                                    <tr>
                                        <th>請輸入AOW字號：</th>
                                        <td><input type="text" class="demo-input1"></td>
                                    </tr>
                                </table>
                                <div class="memberInforBtn show_mif">
                                    <button type="button" class="demo-btn">送出</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       

    </div>

    <footer>
    <div class="copyright">
        Copyright © 2020 Divein | 海中日子 All Rights Reserved.
    </div>
</footer>

    <script src="./js/member.js"></script>
</body>

</html>