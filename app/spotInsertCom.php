<?php
$errMsg = "";
try{
    require_once("connectED103g2.php");
    
    $pdo->beginTransaction();    //  開啟交易

    //.......確定是否上傳成功
    if( $_FILES["upFile"]["error"] == UPLOAD_ERR_OK){
		$sql = "INSERT INTO `diveComment` ( `comNo`,`memNo`, `diveNo`, `content`,  `comStatus`) 
                                    values( null,:memNo, :diveNo, :content, :comStatus)";
        $spotComs = $pdo->prepare( $sql );
        $spotComs -> bindValue(":memNo", "2");
        $spotComs -> bindValue(":diveNo", "2");
        $spotComs -> bindValue(":content", $_REQUEST["message"]);
        $spotComs -> bindValue(":comStatus", "1");
        $spotComs -> execute();

        $pdo->commit();	
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
