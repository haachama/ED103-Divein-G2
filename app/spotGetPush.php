<?php
$areaNO =$_GET['areaNO'];

try{
    require_once("connectED103g2.php");

    //找基本資料
    $sql = " SELECT* FROM diveSpots a 
                JOIN diveArea b on a.diveAreaNo = b.diveAreaNo 
                JOIN personaldiary c on a.diveNo = c.diveNo 
            where b.diveAreaNo = $areaNO
            ORDER BY a.diveAreaNo 
            LIMIT 1";

    $spotPush_diary = $pdo->query($sql);
    $diaryPush = $spotPush_diary->fetch(PDO::FETCH_ASSOC);


    $sql = " SELECT * FROM diveSpots a 
             JOIN diveArea b on a.diveAreaNo = b.diveAreaNo 
             JOIN class c on a.diveNo = c.diveNo 
        where b.diveAreaNo = $areaNO
        and curdate() between c.startDate and c.endDate
        and c.studentNum < c.classQuota
        ORDER BY c.courseDate 
        LIMIT 1";

    $spotPush_class = $pdo->query($sql);
    $classPush = $spotPush_class->fetch(PDO::FETCH_ASSOC);


    $pushSpotData = array( $diaryPush, $classPush);
    echo json_encode($pushSpotData,true);

} catch (PDOException $e){
    $e->getMessage();
}

?>