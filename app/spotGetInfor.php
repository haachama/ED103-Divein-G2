<?php

$areaNO =$_GET['areaNO'];

try{
    require_once("connectED103g2.php");

    //找基本資料
    $sql = " SELECT a. * , b. *
    FROM diveSpots a JOIN diveArea b on a.diveAreaNo = b.diveAreaNo 
    WHERE b.diveAreaNo = $areaNO";

    $spotInfos = $pdo->query($sql);
    $spotInfoRow = $spotInfos->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($spotInfoRow);

} catch (PDOException $e){

    $e->getMessage();
}

?>