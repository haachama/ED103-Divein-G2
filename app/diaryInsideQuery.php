<?php
$dsn = "mysql:host=localhost;port=3308;dbname=ed103g2;charset=utf8";  //家3308 教室3306
$user = "root";
$password = "";//家no 教室root 
$options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);

$sql = " SELECT a.*,d.memName,d.memAvatar,c.diveAreaName,b.diveName,e.biologicalNo FROM personaldiary a 
LEFT JOIN divespots b ON a.diveNo = b.diveNo
LEFT JOIN divearea c ON c.diveAreaNo = b.diveAreaNo
LEFT JOIN member d ON a.memNo = d.memNo
LEFT JOIN diaryimg e ON a.diaryNo = e.diaryNo
WHERE 1=1 "; //所有

$dia = $pdo->prepare($sql);
$dia->execute();
$diaRow = $dia->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($diaRow);
?>
