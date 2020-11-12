<?php
$errMsg = "";
try{
    require_once("../connectG2.php");
    $pdo->beginTransaction();    //  開啟交易

    //.......確定是否上傳成功
    if( $_FILES["upFile"]["error"] == UPLOAD_ERR_OK){
		$sql = "INSERT INTO `diveComment` (`comNo`, `memNo`, `diveNo`, `content`, `comTime`, `comStatus`) 
                values(null, :message)";
        $spotComs = $pdo->prepare( $sql );
        $spotComs -> bindValue(":message", $_POST["message"]);
        $spotComs -> execute();

		//取得自動創號的key值
        $psn = $pdo -> lastInsertId();

    }else{
		echo "錯誤代碼 : {$_FILES["upFile"]["error"]} <br>";
		echo "新增失敗<br>";

	}
} catch (PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
echo $errMsg;

?>