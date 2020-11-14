<?php
$errMsg = "";

  try{
    require_once("../game.php");
    $sql = "select memAvatar, memName, memGamePoint
            FROM member 
            ORDER BY memGamePoint DESC;"; 
    $member = $pdo->prepare($sql);
    $member->bindValue(":memAvatar", $_POST["memAvatar"]);
    $member->bindValue(":memName", $_POST["memName"]);
    $member->bindValue(":memGamePoint", $_POST["memGamePoint"]);
    $member->execute();
    if( $member->rowCount()==0){ //查無此人
          echo "{}";
    }else{ //登入成功
      //自資料庫中取回資料
      $memRow = $member->fetch(PDO::FETCH_ASSOC);
      //--------------將登入者的資料寫入session
      session_start();
      $_SESSION["memNo"] = $memRow["no"];
      $_SESSION[] = $memRow[};
      $_SESSION[] = $memRow[};
      $_SESSION[] = $memRow[};
      $_SESSION[] = $memRow[};
      $_SESSION[] = $memRow[};
      $result = array("memAvatar"=>$memRow["memAvatar"], "memName"=>$memRow["memName"],
                      "memGamePoint"=>$memRow["memGamePoint"];
      $json = json_encode($result);
  
      //送出登入者的姓名資料
      echo $json;
    }
  }catch(PDOException $e){
      $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>下潛遊戲</title>
    <link rel="stylesheet" href="./css/style.css">
    
</head>
<body class="gameResult">
    @@include('./layout/header.html')

    <main class="gameMain">
        <div class="parent_score">

            <div class="parent_resortRole">
                <img class="resultRole" src="./img/game/resortRole.png"><!-- 要代變數 -->
            </div>

            <div class="scoreDescribe">
                <div class="score">
                    您獲得<span class="yellow" id="score">1234</span>點紅利
                </div>
            </div>

            <div class="goShopBtn">
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
                        <a href="shop.html" class="button button--bubble">
                            在商城使用
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
        
        <?php
        $sql = "select memAvatar, memName, memGamePoint
                from member 
                ORDER BY memGamePoint DESC";
	    $products = $pdo->query($sql);
        ?>

        <div class="rankList">
            <?php
            while( $memRow = $products->fetch(PDO::FETCH_ASSOC)){//當抓得到一筆資料, 取回來以陣列的形式
            ?>
            <ul class="rank">
                <li class="record">
                    <img src="<?=$memRow["memAvator"]?>">
                    <h3><?=$memRow["memName"]?></h3>
                    <h4><?=$memRow["memGamePoint"]?></h4>
                    <h4>第一名</h4>
                </li>
            </ul>
        </div>

        <div class="restartBtn">
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
                    <a href="gameIntro.html" class="button button--bubble">
                        重新挑戰
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
    </main>
    
    @@include('./layout/footer.html')
    <script src="./js/gameResult.js"></script>
</body>
</html>