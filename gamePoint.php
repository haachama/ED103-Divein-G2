<?php
// 更新值
// session_start();
// $memNo = $_SESSION['memNo'];

  try{
    require_once("../game.php");
    $sql = "
    UPDATE member
       SET memGamePoint = IF(memGamePoint > 0 AND memGamePoint < 9000, 9000, IF(memGamePoint > 9000,  memGamePoint, memGamePoint))
                  Point = IF(Point > 0 AND Point < 9000, 9000, IF(Point > 9000,  Point, Point))
    WHERE memNo = 3;"; 
    $point = $pdo->prepare($sql);
    $point->bindValue(":memGamePoint", $_POST["memGamePoint"]);
    $point->execute();

    }
  }catch(PDOException $e){
      $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);
  }
?>