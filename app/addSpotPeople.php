<?php

try{
    require_once("connectED103g2.php");

    $diveNo = $_GET["diveNo"];
    
    $sql = "INSERT INTO divehere (diveNo,memNo) 
    values(:diveNo, :memNo)";

    $spotHerePeps = $pdo->prepare( $sql );
    $spotHerePeps -> bindValue(":diveNo",$diveNo);
    $spotHerePeps -> bindValue(":memNo", "5");
    $spotHerePeps -> execute();
    
    // $spotPepRow = $spotPeps->fetchAll(PDO::FETCH_ASSOC);

    // $i =0;
    // foreach($spotPepRow as $row){
    //     $result[$i] = array("diveNo"=>$row["diveNo"],"memNo"=>$row["memNo"],"diveHereNo"=>$row["diveHereNo"]);
    //     $i++;
    // }

    // echo json_encode($result,true);
    
    } catch (PDOException $e){
        $e->getMessage();
    }
?>


