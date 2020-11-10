<?php
try{
require_once("connectG2.php");

$sql = "SELECT * FROM diveSpots WHERE diveNo = 2";

$spotReferImg = $pdo->query($sql);
$spotReferImgs = $spotReferImg->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($spotReferImgs);

} catch (PDOException $e){
    $e->getMessage();
}

?>