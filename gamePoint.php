<?php
// session_start();
// $memNo = $_SESSION['memNo'];

  try{
    require_once("../game.php");
    $sql = "#"; 
    $point = $pdo->prepare($sql);
    $point->bindValue(":memGamePoint", $_POST["memGamePoint"]);
    $point->execute();

    }
  }catch(PDOException $e){
      $error = array("errorMsg"=>$e->getMessage());
      echo json_encode($error);
  }
?>