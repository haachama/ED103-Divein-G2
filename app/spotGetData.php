<?php
$areaNO =$_GET['areaNO'];

$errMsg = "";

try{
    require_once("connectED103g2.php");
    
    //找日誌有幾筆
    $sql = "SELECT count(*)diarySum
    FROM diveSpots a JOIN diveArea b on a.diveAreaNo = b.diveAreaNo 
                     JOIN personaldiary c on a.diveNo = c.diveNo
    where b.diveAreaNo = $areaNO 
    group by b.diveAreaNo";

    $spotInfos_diary = $pdo->query($sql);
    $diarySum = $spotInfos_diary->fetch(PDO::FETCH_ASSOC);


    //找潛點有幾筆
    $sql = " SELECT count(*)diveSum
    FROM diveSpots a JOIN diveArea b on a.diveAreaNo = b.diveAreaNo 
    where b.diveAreaNo = $areaNO 
    group by b.diveAreaNo";

    $spotInfos_dive = $pdo->query($sql);
    $diveSum = $spotInfos_dive->fetch(PDO::FETCH_ASSOC);


    // //找課程有幾筆
    $sql = " SELECT count(*)classSum
    FROM diveSpots a JOIN diveArea b on a.diveAreaNo = b.diveAreaNo 
                    JOIN class c on a.diveNo = c.diveNo
    where b.diveAreaNo = $areaNO 
    group by b.diveAreaNo";

    $spotInfos_class = $pdo->query($sql);
    $classSum = $spotInfos_class->fetch(PDO::FETCH_ASSOC);


    // //找踩點有幾筆
    $sql = "SELECT count(*)hereSum
    FROM diveSpots a JOIN diveArea b on a.diveAreaNo = b.diveAreaNo 
                    JOIN divehere c on a.diveNo = c.diveNo
    where b.diveAreaNo = $areaNO 
    group by b.diveAreaNo";

    $spotInfos_here = $pdo->query($sql);
    $hereSum = $spotInfos_here->fetch(PDO::FETCH_ASSOC);
    
    
    $AllSpotData = array( $classSum, $diveSum, $diarySum, $hereSum );

    echo json_encode($AllSpotData,true);

} catch (PDOException $e){
    $errMsg .= "錯誤 : ".$e -> getMessage()."<br>";
    $errMsg .= "行號 : ".$e -> getLine()."<br>";
}

?>