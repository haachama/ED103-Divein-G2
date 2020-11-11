<?php
try{
    require_once("./connectBooks.php");

    $memId = $_GET["memId"];
    $memPsw = $_GET["memPsw"];
    $memName = $_GET["memName"];
    $memNickName = $_GET["memNickName"];
    $memMail = $_GET["memMail"];

    $sql = "INSERT INTO member (memId, memPsw, memName, memNickName, memMail) VALUES('$memId', '$memPsw', '$memName', '$memNickName', '$memMail')";
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