<?php
$errMsg = "";
try{
    require_once("./connectED103g2.php");
    
    $pdo->beginTransaction();    //  開啟交易

    //.......確定是否上傳成功

    $spotReport = json_decode($_POST[""], true);

    if( $_FILES["upFile"]["error"] == UPLOAD_ERR_OK){
        $sql = "INSERT INTO reportComment ( comNo, whistleblowerNo, reportStatus, reportTime) 
                                     values(:comNo, :whistleblowerNo, :reportStatus, now())";
        $spotComs = $pdo->prepare( $sql );
        $spotComs -> bindValue(":comNo", $_REQUEST["comNo"]);
        $spotComs -> bindValue(":whistleblowerNo","2");
        $spotComs -> bindValue(":reportStatus", "0");
        $spotComs -> execute();
        $pdo->commit();	



        if( !empty($_REQUEST['reason'])){
            $reson_arr = array();
            $reson_arr = $_REQUEST['reason'];
            $reason = implode('、', $reson_arr);
            $sql = "INSERT INTO reportComment (reason)
                    VALUE(:reason)";

            $spotComs = $pdo->prepare($sql);
            $spotComs -> bindValue(":reason", $fileName);
            $spotComs -> execute();
            $pdo->commit();	

        }else{
            $pdo->rollBack();
        }
    }else{

    }

} catch (PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
echo $errMsg;

?>
