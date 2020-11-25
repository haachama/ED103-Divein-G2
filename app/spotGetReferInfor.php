<?php
$spotDiveNO = $_GET["spotDiveNO"];

try{

    require_once("connectED103g2.php");

    $sql = " SELECT a. * , b.animalName, b.animalPic, c.*
    FROM diveSpots a JOIN diveanimal b on a.diveNo = b.diveNo 
                    JOIN diveArea c  on a.diveAreaNO = c.diveAreaNo
                    
    WHERE a.diveNo = $spotDiveNO ";

    $spotReferInfos = $pdo->query($sql);
    $spotReferInfoRow = $spotReferInfos->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($spotReferInfoRow);

} catch (PDOException $e){
    $e->getMessage();
}
?>
