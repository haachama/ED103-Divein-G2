<?php
$dsn = "mysql:host=localhost;port=3308;dbname=ed103g2;charset=utf8";  //家3308 教室3306
$user = "root";
$password = "";//家no 教室root 
$options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);

$sql = " SELECT DiveAreaName, count( result.DiveAreaName ) as 'Count', Pic1, Pic2, Pic3, Pic4 
FROM ( SELECT `d3`.`diveAreaName`, ( SELECT `t`.`diaryPicsNo` FROM 
( SELECT `p`.`diaryPicsNo`, `p`.`diaryNo`, `p`.`diaryPlayDate` FROM personaldiary AS p 
WHERE `p`.`diveNo` IN ( SELECT `d`.`diveNo` FROM divespots AS d WHERE `d`.`diveAreaNo` = 1 ) 
ORDER BY `p`.`diaryPlayDate` DESC LIMIT 1 ) AS t ORDER BY `t`.`diaryPlayDate` DESC LIMIT 1 ) 
AS 'Pic1', ( SELECT `t0`.`diaryPicsNo` FROM ( SELECT `p0`.`diaryPicsNo`, `p0`.`diaryNo`, `p0`.`diaryPlayDate` 
FROM personaldiary AS p0 WHERE `p0`.`diveNo` IN ( SELECT `d0`.`diveNo` FROM divespots AS d0 WHERE `d0`.`diveAreaNo` = 1 ) 
ORDER BY `p0`.`diaryPlayDate` DESC LIMIT 1 OFFSET 1 ) AS t0 ORDER BY `t0`.`diaryPlayDate` DESC LIMIT 1 ) AS 'Pic2', ( SELECT `t1`.`diaryPicsNo` 
FROM ( SELECT `p1`.`diaryPicsNo`, `p1`.`diaryNo`, `p1`.`diaryPlayDate` FROM personaldiary AS p1 WHERE `p1`.`diveNo` IN ( SELECT `d1`.`diveNo` FROM divespots AS d1 WHERE `d1`.`diveAreaNo` = 1 ) 
ORDER BY `p1`.`diaryPlayDate` DESC LIMIT 1 OFFSET 2 ) AS t1 ORDER BY `t1`.`diaryPlayDate` DESC LIMIT 1 ) AS 'Pic3', ( SELECT `t2`.`diaryPicsNo` FROM ( SELECT `p2`.`diaryPicsNo`, `p2`.`diaryNo`, `p2`.`diaryPlayDate` 
FROM personaldiary AS p2 WHERE `p2`.`diveNo` IN ( SELECT `d2`.`diveNo` FROM divespots AS d2 WHERE `d2`.`diveAreaNo` = 1 ) ORDER BY `p2`.`diaryPlayDate` DESC LIMIT 1 OFFSET 3 ) AS t2 ORDER BY `t2`.`diaryPlayDate` DESC LIMIT 1 ) 
AS 'Pic4' FROM divearea AS d3 LEFT JOIN LATERAL ( SELECT * FROM personaldiary AS p3 WHERE `p3`.`diveNo` IN ( SELECT `d4`.`diveNo` FROM divespots AS d4 WHERE `d4`.`diveAreaNo` = `d3`.`diveAreaNo` ) ) AS t3 ON TRUE 
ORDER BY `d3`.`diveAreaNo`, `t3`.`diaryNo` ) AS Result GROUP BY Result.diveAreaName"; 

$dia = $pdo->prepare($sql);
$dia->execute();
$diaRow = $dia->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($diaRow);
?>