<?php 
require_once("./connectDive.php");
// if($_GET["price"]!=""){
// 	$cond1 = "price<{$_GET["price"]}";
// }else{
// 	$cond1 = 1;
// }

if($_GET["courseName"]!=""){
	$cond = "courseName like '%{$_GET["courseName"]}%'";
}else{
	$cond = 1;
}
$sql = "select * from course where $cond";
$diveIn = $pdo->query($sql);
$diveinRows = $diveIn->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($diveinRows);
?>