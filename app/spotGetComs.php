<?php
try{
require_once("connectED103g2.php");

$sql = "SELECT a.content, a.comTime, b.diveNo, c.memName, c.memAvatar
        FROM diveComment a JOIN divespots b ON a.diveNo = b.diveNo 
                           JOIN member c ON a.memNo = c.memNo 
        WHERE a.diveNo = 2";

$spotComs = $pdo->query($sql);
$spotComRow = $spotComs->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($spotComRow);

} catch (PDOException $e){
    $e->getMessage();
}

?>