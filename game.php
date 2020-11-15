<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=test;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    $pdo = new PDO($memAvatar, $memName, $memGamePoint);
    
    // $sql = "SELECT memAvatar, memName, memGamePoint
    // FROM member 
    // ORDER BY memGamePoint DESC;"

    // $memGamePoint=$pdo->prepare($sql);
    // $memGamePoint->execcute();
    // $memGamePointRow=$memGamePoint->fetchAll(PDO::FETCH_ASSOC);

    // echo json_encode($memGamePointRow);
?>