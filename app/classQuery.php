<?php
    require_once("./connectDive.php");


    $sql = " select classNo,className,classImage, courseDate,endDate,classPrice , trainerName,diveName , courseNo
    from class c 
    left join trainer t on (c.trainerNo = t.trainerNo)
    left join divespots d on (c.diveNo = d.diveNo)
    where courseNo = :courseNo AND  c.courseDate between :courseDate and :endDate and t.trainerNo = :trainerNo and c.diveNo = :diveNo; ";
    $classList = $pdo->prepare($sql);
    $classList->bindValue(":courseNo", $_GET["courseNo"]);
    $classList->bindValue(":courseDate", $_GET["courseDate"]);
    $classList->bindValue(":endDate", $_GET["endDate"]);
    $classList->bindValue(":trainerNo", $_GET["trainerNo"]);
    $classList->bindValue(":diveNo", $_GET["diveNo"]);


    $classList->execute();
    $classRows = $classList->fetchAll(PDO::FETCH_ASSOC);

    $i = 0;
    foreach($classRows as $classRow){
        $result[$i] = array("classNo"=>$classRow["classNo"], "className"=>$classRow["className"],
        "classImage"=>$classRow["classImage"], "courseDate"=>$classRow["courseDate"], "endDate"=>$classRow["endDate"], "classPrice"=>$classRow["classPrice"],"trainerName"=>$classRow["trainerName"],"diveName"=>$classRow["diveName"],"courseNo"=>$classRow["courseNo"]);
        $i++;
    }

    echo  json_encode($classRows);
?>
