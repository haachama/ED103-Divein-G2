<?php
    require_once("connectED103g2.php");
?>

<?php
    $sql = "  SELECT 
    c.diveareaName
    ,a.diaryName
    ,a.diaryPoint1
    ,a.diaryPoint2
    ,a.diaryPoint3
    ,a.diaryPoint4
    ,a.diaryPoint5
    ,a.diaryTimePoint1
    ,a.diaryWriteDate
    ,a.diaryType
    ,a.diaryText
    ,b.diveName
    FROM personaldiary a 
    LEFT JOIN divespots b ON a.diveNo = b.diveNo
    LEFT JOIN divearea c ON c.diveAreaNo = b.diveAreaNo 
    WHERE diaryType = 2
    limit 3;"; 

    $courseDairy = $pdo->prepare($sql);
    $courseDairy->execute();
    $courseDairyRows = $courseDairy->fetchAll(PDO::FETCH_ASSOC);

    $i = 0;
    foreach($courseDairyRows as $courseDairyRow)
    {
        $result[$i] = array("diaryName"=>$courseDairyRow["diaryName"], 
        "diaryPoint1"=>$courseDairyRow['diaryPoint1'],
        "diaryPoint2"=>$courseDairyRow['diaryPoint2'], 
        "diaryPoint3"=>$courseDairyRow['diaryPoint3'], 
        "diaryPoint4"=>$courseDairyRow['diaryPoint4'],
        "diaryPoint5"=>$courseDairyRow['diaryPoint5'],
        "diaryTimePoint1"=>$courseDairyRow['diaryTimePoint1'],
        "diveName"=>$courseDairyRow["diveName"],
        "diveareaName"=>$courseDairyRow["diveareaName"],
        "diaryType"=>$courseDairyRow["diaryType"],
        "diaryText"=>$courseDairyRow["diaryText"],
        "diaryWriteDate"=>$courseDairyRow["diaryWriteDate"]);
        $i++;
    }
    


    echo  json_encode($result);



?>
