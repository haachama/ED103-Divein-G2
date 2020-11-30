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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineLite.min.js"></script>
    <link rel="stylesheet" href="fontawesome/css/all.css">
    <link rel="stylesheet" href="css/style.css">
    <title>海中日子 | 潛點推薦</title>

    <style>




    </style>



</head>
<body class="spot">
    @@include('./layout/header.html')

    <main class="spotMain">
        <section>
            <div class="box spotContents">
                <div class="spotarea spotarea1 -iHere">
                    <div class="spotBlock spotRight">
                        <h2>綠島</h2>
                        <h5>無與倫比的潛水寶地</h5>

                        <div class="spotRightblock spotWeather">
                            <ul class="spotRightBlockList ">
                                <li>即時<br>氣象</li>
                                <li><i class="fas weatherString"></i></li>
                                <li><i class="fas fa-wind"></i></li>
                                <li><i class="fas fa-tint"></i></li>
                                <li><i class="fas fa-temperature-high"></i></li>
                            </ul>
                        </div>

                        <div class="spotRightblock spotData">
                            <ul class="spotRightBlockList">
                                <li class="spotDataNum">3</li>
                                <li><a>潛水<br>課程</a></li>
                                <li class="spotDataNum">4</li>
                                <li>熱門<br>潛點</li>
                                <li class="spotDataNum">5</li>
                                <li>潛水<br>日誌</li>
                                <li class="spotDataNum">10</li>
                                <li>踩過<br>此點</li>
                            </ul>
                        </div>
                        <div class="spotRightblock spotFont">
                            <p>譽為世界級的潛水寶地<br>全球百大必潛地</p>
                        </div>
                        <div class="spotRightblock spotPush">
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新日誌</span>
                            </div>
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新課程</span>
                            </div>
                        </div>
                        <div class="spotMore_rwd">
                            <i class="far fa-arrow-alt-circle-down"></i>
                        </div>
                    </div>
                    <div class="spotBlock spotLeft">
                        <div class="spotLeftImage spotLeftTwoPic">
                            <a href="./spotRefer.html?1-1">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-01.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>海底教堂</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html?1-2">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-02.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-05.png" alt="">
                                        </div>
                                    </div>
                                    <span>鋼鐵礁</span>
                                </div>
                            </a>
                        </div>
                        <div class="spotLeftImage spotLeftThreePic">
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-05.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>石朗大香菇</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-05.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>海底大峽谷</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-05.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotGiLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>雞仔礁</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="spotarea spotarea2">
                    <div class="spotBlock spotRight">
                        <h2>蘭嶼</h2>
                        <h5>台灣最美潛水天堂</h5>
                        <div class="spotRightblock spotWeather">
                            <ul class="spotRightBlockList ">
                                <li>即時<br>氣象</li>
                                <li><i class="fas weatherString"></i></li>
                                <li><i class="fas fa-wind"></i></li>
                                <li><i class="fas fa-tint"></i></li>
                                <li><i class="fas fa-temperature-high"></i></li>
                            </ul>
                        </div>
                        <div class="spotRightblock spotData">
                            <ul class="spotRightBlockList">
                                <li class="spotDataNum">3</li>
                                <li>潛水<br>課程</li>
                                <li class="spotDataNum">4</li>
                                <li>熱門<br>潛點</li>
                                <li class="spotDataNum">5</li>
                                <li>潛水<br>日誌</li>
                                <li class="spotDataNum">10</li>
                                <li>踩過<br>此點</li>
                            </ul>
                        </div>
                        <div class="spotRightblock spotFont">
                            <p>坐擁水下能見度高達50M的澄澈玻璃海<br>充滿部落風情的人之島</p>
                        </div>
                        <div class="spotRightblock spotPush">
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新日誌</span>
                            </div>
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新課程</span>
                            </div>
                        </div>
                        <div class="spotMore_rwd">
                            <i class="far fa-arrow-alt-circle-down"></i>
                        </div>
                    </div>
                    <div class="spotBlock spotLeft">
                        <div class="spotLeftImage spotLeftThreePic">
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-05.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>母雞岩</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-05.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>椰油斷層</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-05.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>四條溝</span>
                                </div>
                            </a>
                        </div>
                        <div class="spotLeftImage spotLeftTwoPic">
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-01.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>野銀小峽谷</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-02.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotLyLittle-05.png" alt="">
                                        </div>
                                    </div>
                                    <span>八代灣沉船</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="spotarea spotarea3 ">
                    <div class="spotBlock spotRight">
                        <h2>墾丁</h2>
                        <h5>全台灣最具代表性的珊瑚礁生態系</h5>
                        <div class="spotRightblock spotWeather">
                            <ul class="spotRightBlockList ">
                                <li>即時<br>氣象</li>
                                <li><i class="fas weatherString"></i></li>
                                <li><i class="fas fa-wind"></i></li>
                                <li><i class="fas fa-tint"></i></li>
                                <li><i class="fas fa-temperature-high"></i></li>
                            </ul>
                        </div>
                        <div class="spotRightblock spotData">
                            <ul class="spotRightBlockList">
                                <li class="spotDataNum">3</li>
                                <li>潛水<br>課程</li>
                                <li class="spotDataNum">4</li>
                                <li>熱門<br>潛點</li>
                                <li class="spotDataNum">5</li>
                                <li>潛水<br>日誌</li>
                                <li class="spotDataNum">10</li>
                                <li>踩過<br>此點</li>
                            </ul>
                        </div>
                        <div class="spotRightblock spotFont">
                            <p>得天獨厚的地理條件<br>孕育富饒的海洋生物相更是獨具特色</p>
                        </div>
                        <div class="spotRightblock spotPush">
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新日誌</span>
                            </div>
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新課程</span>
                            </div>
                        </div>
                        <div class="spotMore_rwd">
                            <i class="far fa-arrow-alt-circle-down"></i>
                        </div>
                    </div>
                    <div class="spotBlock spotLeft">
                        <div class="spotLeftImage spotLeftTwoPic_Rl">
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-01.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-01.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-03.png" alt="">
                                        </div>
                                    </div>
                                    <span>後壁湖</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-02.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-02.png" alt="">
                                        </div>
                                    </div>
                                    <span>出水口</span>
                                </div>
                            </a>
                        </div>
                        <div class="spotLeftImage spotLeftTwoPic_Lr">
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-02.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-02.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>雙峰藍洞</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-01.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotKdLittle-01.png" alt="">
                                        </div>
                                    </div>
                                    <span>合界</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="spotarea spotarea4">
                    <div class="spotBlock spotRight">
                        <h2>小琉球</h2>
                        <h5>一個絕對稱得上海龜島的地點</h5>
                        <div class="spotRightblock spotWeather">
                            <ul class="spotRightBlockList ">
                                <li>即時<br>氣象</li>
                                <li><i class="fas weatherString"></i></li>
                                <li><i class="fas fa-wind"></i></li>
                                <li><i class="fas fa-tint"></i></li>
                                <li><i class="fas fa-temperature-high"></i></li>
                            </ul>
                        </div>
                        <div class="spotRightblock spotData">
                            <ul class="spotRightBlockList">
                                <li class="spotDataNum">3</li>
                                <li>潛水<br>課程</li>
                                <li class="spotDataNum">4</li>
                                <li>熱門<br>潛點</li>
                                <li class="spotDataNum">5</li>
                                <li>潛水<br>日誌</li>
                                <li class="spotDataNum">10</li>
                                <li>踩過<br>此點</li>
                            </ul>
                        </div>
                        <div class="spotRightblock spotFont">
                            <p>台灣唯一的珊瑚礁島<br>海龜目擊率百分之九十九點九聞名</p>
                        </div>
                        <div class="spotRightblock spotPush">
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新日誌</span>
                            </div>
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新課程</span>
                            </div>
                        </div>
                        <div class="spotMore_rwd">
                            <i class="far fa-arrow-alt-circle-down"></i>
                        </div>
                    </div>
                    <div class="spotBlock spotLeft">
                        <div class="spotLeftImage spotLeftTwoPic">
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-01.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>花瓶岩</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-02.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-05.png" alt="">
                                        </div>
                                    </div>
                                    <span>美人洞</span>
                                </div>
                            </a>
                        </div>
                        <div class="spotLeftImage spotLeftThreePic">
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-05.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>衫福沉船</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-05.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>鎮海艦</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-05.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotSrkLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>厚石礁群</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="spotarea spotarea5">
                    <div class="spotBlock spotRight">
                        <h2>東北角</h2>
                        <h5>海底絢麗繽紛的微距聖地</h5>
                        <div class="spotRightblock spotWeather">
                            <ul class="spotRightBlockList ">
                                <li>即時<br>氣象</li>
                                <li><i class="fas weatherString"></i></li>
                                <li><i class="fas fa-wind"></i></li>
                                <li><i class="fas fa-tint"></i></li>
                                <li><i class="fas fa-temperature-high"></i></li>
                            </ul>
                        </div>
                        <div class="spotRightblock spotData">
                            <ul class="spotRightBlockList">
                                <li class="spotDataNum">3</li>
                                <li>潛水<br>課程</li>
                                <li class="spotDataNum">4</li>
                                <li>熱門<br>潛點</li>
                                <li class="spotDataNum">5</li>
                                <li>潛水<br>日誌</li>
                                <li class="spotDataNum">10</li>
                                <li>踩過<br>此點</li>
                            </ul>
                        </div>
                        <div class="spotRightblock spotFont">
                            <p>初學潛水者的天然訓練場<br>滿足你蠢蠢欲動的潛水心</p>
                        </div>
                        <div class="spotRightblock spotPush">
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新日誌</span>
                            </div>
                            <div class="spotPushBlock">
                                <a href="">
                                    <div class="spotPushImg">
                                        <img src="img/spot/diary12.jpg" alt="">
                                    </div>
                                </a>
                                <span>最新課程</span>
                            </div>
                        </div>
                        <div class="spotMore_rwd">
                            <i class="far fa-arrow-alt-circle-down"></i>
                        </div>
                    </div>
                    <div class="spotBlock spotLeft">
                        <div class="spotLeftImage spotLeftTwoPic_Rl">
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-01.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-01.png" alt="">
                                        </div>
                                    </div>
                                    <span>和美</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-02.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-02.png" alt="">
                                        </div>
                                    </div>
                                    <span>龍洞</span>
                                </div>
                            </a>
                        </div>
                        <div class="spotLeftImage spotLeftTwoPic_Lr">
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-02.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-04.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-02.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-04.png" alt="">
                                        </div>
                                    </div>
                                    <span>潮境公園</span>
                                </div>
                            </a>
                            <a href="./spotRefer.html">
                                <div class="spotLeftImageAd">
                                    <div class="slider_container">
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-01.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-03.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-01.png" alt="">
                                        </div>
                                        <div class="sw">
                                            <img src="./img/spot/spotEncLittle-03.png" alt="">
                                        </div>
                                    </div>
                                    <span>鼻頭角</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box spotListBlock">
                <ul class="spotList">
                    <li><a href="" class="spotText -iHere" data-target="spotarea1" value="467660">綠島</a></li>
                    <li><a href="" class="spotText" data-target="spotarea2" value="467620">蘭嶼</a></li>
                    <li><a href="" class="spotText" data-target="spotarea3" value="467590">墾丁</a></li>
                    <li><a href="" class="spotText" data-target="spotarea4" value="467660">小琉球</a></li>
                    <li><a href="" class="spotText" data-target="spotarea5" value="466900">東北角</a></li>
                </ul>
            </div>
        </section>
    </main>
    @@include('./layout/footer.html')

    <script src="./js/spot.js"></script>

    <script src="./cocojs/spotGetInfo.js"></script>



    
    








  
</body>
</html>