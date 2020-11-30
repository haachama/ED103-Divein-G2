<?php
require_once("connectED103g2.php");

ini_set('display_errors', 1);



$spotDiveNO = $_GET["spotDiveNO"];


$errMsg = "";

try{
    // echo $memNo;


    //撈1
    $sql = " SELECT a. * , b.animalName, b.animalPic, c.*
            FROM diveSpots a JOIN diveanimal b on a.diveNo = b.diveNo 
                            JOIN diveArea c  on a.diveAreaNO = c.diveAreaNo
            WHERE a.diveNo = $spotDiveNO ";

    $spotReferInfos = $pdo->query($sql);
    $spotReferInfoRow = $spotReferInfos->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($spotReferInfoRow,true);

} catch (PDOException $e){
    $e->getMessage();
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}
?>
