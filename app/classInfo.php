<?php
    require_once("connectED103g2.php");
?>

<?php
    
    // 星巴克 100 杯 

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
    WHERE auditStatus = 1 AND (a.studentNum < a.classQuota) "; //這個地方太貼 加個空格
    
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
    if(!empty($_GET['diveAreaNo'])){
        $diveAreaNo = $_GET['diveAreaNo'];
        $sql = $sql." AND d.diveAreaNo = ". $diveAreaNo;
    }


    if(!empty($_GET['courseDate']) && !empty($_GET['endDate']) ){
        $courseDate = $_GET['courseDate'];
        $endDate = $_GET['endDate'];
        $sql = $sql." AND a.courseDate BETWEEN DATE_FORMAT('$courseDate', '%X-%m-%d') AND DATE_FORMAT('$endDate', '%X-%m-%d')";
    }elseif(!empty($_GET['courseDate'])){
        $courseDate = $_GET['courseDate'];
        $sql = $sql." AND a.courseDate >= ". "DATE_FORMAT('$courseDate', '%X-%m-%d')";
    }else{
        $sql = $sql." AND a.courseDate >=  DATE_FORMAT(NOW(), '%X-%m-%d')";
    }

    
    if(!empty($_GET['courseNo'])){
        $courseNo = $_GET['courseNo'];
        $sql = $sql." AND a.courseNo = ". $courseNo;
    }
    if(!empty($_GET['trainerNo'])){
        $trainerNo = $_GET['trainerNo'];
        $sql = $sql." AND a.trainerNo = ". $trainerNo;
    }

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
