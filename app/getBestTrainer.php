<?php
    require_once("connectED103g2.php");


    $sql = "SELECT * 
                FROM trainer
                ORDER BY trainerScore desc
                LIMIT 4;";


    $trainerInfo = $pdo->prepare($sql);

    $trainerInfo->execute();

    $trainerRows = $trainerInfo->fetchAll(PDO::FETCH_ASSOC);

    $i = 0;
    foreach($trainerRows as $row){
        $trainer[$i] = array("trainerName"=>$row["trainerName"], "trainerImage"=>$row["trainerImage"],"trainerScore"=>$row["trainerScore"],"studentNum"=>$row["studentNum"],"trainerStatus"=>$row["trainerStatus"]);
        $i++;
        
    }
    echo  json_encode($trainer);

?>

