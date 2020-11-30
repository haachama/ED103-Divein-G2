<?php
session_start();
$memNo =$_SESSION["memNo"];

$errMsg = "";
try{

    require_once("connectED103g2.php");
    
    $pdo->beginTransaction();    //  開啟交易

    //.......確定是否上傳成功
    if( $memNo ){

      $sql = "INSERT INTO divehere (diveNo,memNo) 
                              values(:diveNo, :memNo)";
      $spotHerePeps = $pdo->prepare( $sql );
      $spotHerePeps -> bindValue(":diveNo",$_REQUEST["diNo"]);
      $spotHerePeps -> bindValue(":memNo", $memNo);
      $spotHerePeps -> execute();

      $pdo->commit();	

    }else{
      echo "新增失敗<br>";

    }
} catch (PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
echo $errMsg;

?>
