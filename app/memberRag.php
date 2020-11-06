<?php
try{
    require_once("./connectBooks.php");
    $sql = "insert into `member` set memberId=:memberId, memberPsw=:memberPsw, memberName=:memberName, memberNickName=:memberNickName, memMail=:memMail";
    $member = $pdo->prepare($sql);
    $member->bindValue(":RegMemId", $_POST["memberId"]);
    $member->bindValue(":RegMemPsw", $_POST["memberPsw"]);
    $member->bindValue(":RegMemName", $_POST["memberName"]);
    $member->bindValue(":RegMemNickName", $_POST["memberNickName"]);
    $member->bindValue(":RegMemMail", $_POST["memMail"]);
    $member->execute();
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);
}
?>