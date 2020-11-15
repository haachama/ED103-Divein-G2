<?php
    require_once("./connectED103g2.php");
?>


<?php

    $diveAreaNo = $_GET['diveAreaNo'];
    
    $sql = "SELECT diveAreaNo, diveName , diveNo FROM divespots where diveAreaNo = :diveAreaNo;"; 
    // $sql  = "SELECT 
    // a.classImage 
    // ,a.className
    // ,a.courseDate
    // ,a.endDate
    // ,c.trainerName
    // ,d.diveName
    // ,a.classPrice
    // FROM class a 
    // LEFT JOIN course b ON a.courseNo = b.courseNo
    // LEFT JOIN trainer c ON c.trainerNo = a.trainerNo
    // LEFT JOIN divespots d ON d.diveNo = a.diveNo
    // WHERE d.diveAreaNo = :diveAreaNo ";


    
    // $sql = "select d.diveAreaNo, d.diveName , d.diveNo , c.classNo, c.className, c.classImage, c.courseDate, c.endDate, c.classPrice , t.trainerName,d.diveName 
    // from class c left join trainer t on (c.trainerNo = t.trainerNo)
    //             left join divespots d on (c.diveNo = d.diveNo)
    //             where diveAreaNo = :diveAreaNo;";
    $diveSpot = $pdo->prepare($sql);
  
    $diveSpot->bindValue(":diveAreaNo", $diveAreaNo);
    $diveSpot->execute();
    $diveRows = $diveSpot->fetchAll(PDO::FETCH_ASSOC);

    $i = 0;
    foreach($diveRows as $diveRow){
        $result[$i] = array("diveAreaNo"=>$diveRow["diveAreaNo"], "diveName"=>$diveRow["diveName"],
        "diveNo"=>$diveRow["diveNo"]);
        $i++;
    }

    echo  json_encode($diveRows);
    
?>