<?php
try{
require_once("connectG2.php");

$sql = "SELECT a. * , b.animalName, b.animalPic, c.diveAreaName
FROM diveSpots a JOIN diveanimal b on a.diveNo=b.diveNo 
                 JOIN diveArea c  on a.diveAreaNO = c.diveAreaNo
WHERE a.diveNo = 1";

$spotReferInfos = $pdo->query($sql);
$spotReferInfoRow = $spotReferInfos->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($spotReferInfoRow);
} catch (PDOException $e){
    $e->getMessage();
}
?>
