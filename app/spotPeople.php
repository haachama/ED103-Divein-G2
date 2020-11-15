<?php

try{
    require_once("connectED103g2.php");
    
    // $sql = "INSERT INTO divehere (diveNo,memNo) 
    // values(:diveNo, :memNo)";

    $sql = "SELECT * FROM diveHere d
    where d.memNo = :memNo";

    $spotHerePeps = $pdo->prepare( $sql );
    // $spotHerePeps -> bindValue(":diveNo",$_REQUEST["diNo"]);
    $spotHerePeps -> bindValue(":memNo", "5");
    $spotHerePeps -> execute();
    
    $spotPepRow = $spotPeps->fetchAll(PDO::FETCH_ASSOC);

    $i =0;
    foreach($spotPepRow as $row){
        $result[$i] = array("diveNo"=>$row["diveNo"],"memNo"=>$row["memNo"],"diveHereNo"=>$row["diveHereNo"],"memAvatar"=>$row["memAvatar"]);
        $i++;
    }

    echo json_encode($result,true);
    
    } catch (PDOException $e){
        $e->getMessage();
    }
?>


