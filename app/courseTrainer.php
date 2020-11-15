<?php
    require_once("connectED103g2.php");
?>

<?php
    
    // $trainerName = settype($_GET["trainerName"],"string");
    $trainerName = $_GET["trainerName"];
    $sql = "SELECT 
    a.classNo
    ,a.classImage 
    ,a.className
    ,a.courseDate
    ,a.endDate
    ,c.trainerName
    ,d.diveName
    ,a.classPrice
    ,d.diveAreaNo
    FROM class a 
    LEFT JOIN course b ON a.courseNo = b.courseNo
    LEFT JOIN trainer c ON c.trainerNo = a.trainerNo
    LEFT JOIN divespots d ON d.diveNo = a.diveNo
    WHERE c.trainerName = '$trainerName';";
    
    //**頁數
    if(!empty($_GET['page'])){
        $page = $_GET['page'];
    }else{
        $page=1;
    }
    //**每頁數量
    if(!empty($_GET['size'])){
        $size = $_GET['size'];
    }else{
        $size=3;
    }

    $limitStart = ($page-1)*$size;
    // ** 參數



    $sql = $sql." ORDER BY a.courseDate";


    //**第一次 計算總量
    $classInfo = $pdo->prepare($sql);
    // echo $sql;
    $classInfo->execute();
    $classInfoRows = $classInfo->fetchAll(PDO::FETCH_ASSOC);
    $total = count($classInfoRows);
    
    //**第二次 把要顯示的找出來即可
    $sql = $sql." LIMIT ".$limitStart." , ".$size;
    $classInfo = $pdo->prepare($sql);
   

    $classInfo->execute();
    $classInfoRows = $classInfo->fetchAll(PDO::FETCH_ASSOC);
    $totalPage = ceil($total/ $size);
    

    $result = array("content"=>$classInfoRows, "size"=>$size,
        "page"=>$page , "total"=>$total ,"totalPage"=>$totalPage );

    echo  json_encode($result);



?>
