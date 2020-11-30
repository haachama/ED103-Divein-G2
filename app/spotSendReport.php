<?php
session_start();
$memNo = isset($_SESSION["memNo"])?$_SESSION["memNo"]:0;



// $spotDiveNO = $_GET["spotDiveNO"];

$errMsg = "";

try{
    require_once("./connectED103g2.php");
    
    $pdo->beginTransaction();    //  開啟交易

    //.......確定是否上傳成功
    echo $spotReports;

    // $spotReport = json_decode($_POST[""], true);
    if( $_FILES["upFile"]["error"] == UPLOAD_ERR_OK){
        $sql = "INSERT INTO reportComment ( comNo, reason, whistleblowerNo, reportStatus, reportTime) 
                                    values(:comNo, :reason, :whistleblowerNo, :reportStatus, now())";
        $spotReports = $pdo->prepare( $sql );
        $spotReports -> bindValue(":comNo",$_POST["comNo"]);
        $spotReports -> bindValue(":reason",$_POST["reason"]);
        $spotReports -> bindValue(":whistleblowerNo",$memNo);
        $spotReports -> bindValue(":reportStatus","0");
        $spotReports -> execute();

        $pdo->commit();	

    }else{
        echo "新增失敗<br>";
    };


} catch (PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
echo $errMsg;

?>