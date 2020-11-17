<?php
$spotDiveNO = $_GET["spotDiveNO"];

try{
require_once("connectED103g2.php");

$sql = "SELECT a.comNo, a.content, a.comTime, b.diveNo, c.memName, c.memAvatar
        FROM diveComment a JOIN divespots b ON a.diveNo = b.diveNo 
                           JOIN member c ON a.memNo = c.memNo 
        WHERE a.diveNo = $spotDiveNO
        ORDER by a.comNo DESC";

$spotComs = $pdo->query($sql);
$spotComRow = $spotComs->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($spotComRow,true);

} catch (PDOException $e){
    $e->getMessage();
}

?>