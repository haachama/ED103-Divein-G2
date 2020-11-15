<?php
try {
	require("./connectDive.php");

	$sql = "select * from course";
    $diveIn = $pdo->query($sql);
    $diveIn->execute();

    $diveinRow = $diveIn->fetchAll(PDO::FETCH_ASSOC);
    print_r($diveinRow);

    echo json_encode($diveinRow);

} catch (PDOException $e) {  
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}




?>
<!-- 
<li><a href="#" class="-on">1</a></li>
<li><a href="#" >2</a></li>
<li><a href="#">3</a></li> -->