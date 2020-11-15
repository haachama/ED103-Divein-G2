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