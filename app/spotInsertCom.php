<?php
session_start();
$memNo = isset($_SESSION["memNo"])?$_SESSION["memNo"]:0;

// $spotDiveNO = $_GET["spotDiveNO"];

$errMsg = "";
try{

    require_once("connectED103g2.php");
    
    $pdo->beginTransaction();    //  開啟交易

    //.......確定是否上傳成功
    if($memNo && $_POST["msgInfor"] !=''){
        

        $sql = "INSERT INTO diveComment ( comNo, memNo, diveNo, content,  comStatus) 
                                    values( null, :memNo, :diveNo, :content, :comStatus)";
        $spotComs = $pdo->prepare( $sql );
        $spotComs -> bindValue(":memNo", $memNo);
        $spotComs -> bindValue(":diveNo", $_POST["diveNo"]);
        $spotComs -> bindValue(":content", $_POST["msgInfor"]);
        $spotComs -> bindValue(":comStatus", "1");
        $spotComs -> execute();

        $pdo->commit();	

    }else{
        echo "新增失敗<br>";

    }

} catch (PDOException $e) {
    $pdo->rollBack();
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}

?>
