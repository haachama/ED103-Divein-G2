<?php
try{
    require_once("./connectED103g2.php");

    $memId = $_GET["memId"];
    $memPsw = $_GET["memPsw"];
    $memName = $_GET["memName"];
    $memMail = $_GET["memMail"];

    $sql = "INSERT INTO member (memId, memPsw, memName, memMail) VALUES('$memId', '$memPsw', '$memName', '$memMail')";
    $member = $pdo->prepare($sql);
    $member->execute();

    // if( $member->rowCount()==0){ //查無此人
    //     $member->execute();
    // }else{
    //     echo "test";
    // }
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);
}
?>