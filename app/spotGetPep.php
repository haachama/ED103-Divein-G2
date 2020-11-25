<?php
session_start();
$memNo = isset($_SESSION["memNo"])?$_SESSION["memNo"]:0;


    $spotDiveNO = $_GET["spotDiveNO"];  

    $errMsg = "";
    try{
        require_once("connectED103g2.php");
        
        //撈1
        $sql = "SELECT a.diveNo, a.memNo, b.memAvatar, b.memId
                FROM divehere a JOIN member b ON a.memNo = b.memNo
                WHERE a.diveNo = $spotDiveNO
                GROUP BY a.diveHereNo asc";
        
        $spotPeps = $pdo->query($sql);
        $spotPepRow = $spotPeps->fetchAll(PDO::FETCH_ASSOC);

        //撈 2
        $sql = "SELECT a.diveNo, a.memNo, b.memId
                FROM divehere a JOIN member b ON a.memNo = b.memNo
                WHERE a.diveNo = $spotDiveNO and a.memNo = $memNo
                GROUP BY a.diveHereNo asc";

        $spotMemId = $pdo->query($sql);

        if( $spotMemId->rowCount()==0 ){
            $spotMemIdCheck = [];
        }else{
            $spotMemIdCheck = $spotMemId->fetch(PDO::FETCH_ASSOC);
        }

        $AllSpotData = array( $spotPepRow, $spotMemIdCheck);
        echo json_encode($AllSpotData,true);
        
    } 
    catch (PDOException $e){
        $e->getMessage();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    }

?>


