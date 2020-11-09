<?php 
$dsn = "mysql:host=localhost;port=3308;dbname=ed103g2;charset=utf8";  //3308
$user = "root";
$password = "";
$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION );
$pdo = new PDO($dsn, $user, $password, $options);

if($_GET["diarySelect"]!=""){
	$cond1 = "diarySelect<{$_GET["diarySelect"]}";
}else{
	$cond1 = 1;
}

// if($_GET["divepoint"]!=""){
// 	$cond2 = "divepoint={$_GET["divepoint"]}";
// }else{
// 	$cond2 = 1;
// }
// $sql = "select * from products where $cond1 and $cond2 ";

// 1 課程或旅潛的篩選
$sql = "SELECT *
FROM personaldiary AS p
WHERE `p`.`diaryType` = $cond1";

// 2 潛域1-5號的篩選(單選) ans是潛點14
$sql = "SELECT *
FROM personaldiary AS p
WHERE `p`.`diveNo` IN (
    SELECT `d`.`diveNo`
    FROM divespots AS d
    WHERE `d`.`diveAreaNo` = 14
)";

// 3 潛點1-23號的篩選(複選)  ans是潛點14
$sql = "SELECT *
FROM personaldiary AS p
WHERE `p`.`diveNo` IN (
    SELECT `d`.`diveNo`
    FROM divespots AS d
    WHERE `d`.`diveNo` = 3
)";

//合併2  董董要我改成where 接複選三個... 
$sql = "SELECT *
FROM personaldiary AS p
WHERE `p`.`diaryType` = 1 and `p`.`diveNo` IN (
    SELECT `d`.`diveNo`
    FROM divespots AS d
    WHERE `d`.`diveAreaNo` = 14
)";

$products = $pdo->query($sql);
$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($prodRows);
?>
