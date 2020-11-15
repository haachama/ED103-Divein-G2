<?php
    require_once("./connectDive.php");

    $sql = " select trainerImage from trainer
    limit 4;";
    $classList = $pdo->prepare($sql);

    $classList->execute();
    $classRows = $classList->fetchAll(PDO::FETCH_ASSOC);

    $i = 0;
    foreach($classRows as $classRow){
        $result[$i] = array("trainerImage"=>$classRow["trainerImage"], "trainerNo"=>$classRow["trainerNo"]);
        $i++;
    }

    echo  json_encode($classRows);
    // echo  json_encode($result[$i]);
?>

