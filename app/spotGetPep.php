<?php
$spotDiveNO = $_GET["spotDiveNO"];

session_start();
$memNo =$_SESSION["memNo"];

try{
    require_once("connectED103g2.php");
    
    $sql = "SELECT a.diveNo, b.memNo, b.memAvatar 
            FROM divehere a JOIN member b ON a.memNo = b.memNo
            WHERE a.diveNo = $spotDiveNO
            GROUP BY a.diveHereNo asc";
    
    $spotPeps = $pdo->query($sql);
    $spotPepRow = $spotPeps->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($spotPepRow,true);
    
    } catch (PDOException $e){
        $e->getMessage();
    }
?>


