<?php
try{
require_once("connectG2.php");

$sql = "SELECT description FROM diveSpots WHERE diveNo = 2";

$descripText = $pdo->query($sql);
$description = $descripText->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($description);

} catch (PDOException $e){
    $e->getMessage();
}

?>