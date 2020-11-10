<?php
$dsn = "mysql:host=localhost;port=3306;dbname=ed103g2;charset=utf8";  //家3308 教室3306
$user = "root";
$password = "root";//家no 教室root 
$options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);

$sql = " SELECT a.* FROM personaldiary a 
LEFT JOIN divespots b ON a.diveNo = b.diveNo
LEFT JOIN divearea c ON c.diveAreaNo = b.diveAreaNo
WHERE 1=1 "; //所有
// 潛點diveNo
if (!empty($_GET["diveid"])) {

    $diveNos = implode(",", $_GET["diveid"]);
    $sql = $sql . ' AND b.diveNo in ( ' . $diveNos . ' )';
}
// 課程或旅潛diaryType
if (!empty($_GET["diarySelect"])) {

    $sql = $sql . ' AND a.diaryType = ' . $_GET["diarySelect"];
}
// 潛域diveAreaNo
if (!empty($_GET["diveArea"])) {

    $sql = $sql . ' AND c.diveAreaNo = ' . $_GET["diveArea"];
}

$dia = $pdo->prepare($sql);
$dia->execute();
$diaRow = $dia->fetchAll(PDO::FETCH_ASSOC);


echo json_encode($diaRow);
// echo 'hi';
?>