<?php
try{
require_once("connectG2.php");

$sql = "select a. * , b.diveName , c.diveAreaName
    from diveanimal a JOIN diveSpots b on a.diveNo=b.diveNo 
    JOIN diveArea c  on b.diveAreaNO = c.diveAreaNo
    where a.diveNo = 1";

$animals = $pdo->query($sql);
$animalRows = $animals->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($animalRows);

} catch (PDOException $e){
    $e->getMessage();
}
?>
