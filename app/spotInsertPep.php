<?php
session_start();
$memNo =$_SESSION["memNo"];

$errMsg = "";
try{
  // $messageStr = json_decode( $_POST["msgInfor"], true);
    require_once("connectED103g2.php");
    
    $pdo->beginTransaction();    //  開啟交易

    //.......確定是否是會員
    if($memNo){

      $sql = "INSERT INTO divehere (diveNo,memNo) 
                              values(:diveNo, :memNo)";
      $spotHerePeps = $pdo->prepare( $sql );
      $spotHerePeps -> bindValue(":diveNo",$_REQUEST["diNo"]);
      $spotHerePeps -> bindValue(":memNo", $memNo);
      $spotHerePeps -> execute();

      $pdo->commit();	
  //取得自動創號的key值
      $psn = $pdo -> lastInsertId();

    }else{
      echo "請先登入會員<br>";

    }
} catch (PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
echo $errMsg;

?>
