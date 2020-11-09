<?php
try{
    require_once("./connectBooks.php");
    $sql = "insert into `member` set memberId=:memberId, memberPsw=:memberPsw, memberName=:memberName, memberNickName=:memberNickName, memMail=:memMail";
    $member = $pdo->prepare($sql);
    $member->bindValue(":memberId", $_POST["RegMemId"]);
    $member->bindValue(":memberPsw", $_POST["RegMemPsw"]);
    $member->bindValue(":memberName", $_POST["RegMemName"]);
    $member->bindValue(":memberNickName", $_POST["RegMemNickName"]);
    $member->bindValue(":memMail", $_POST["RegMemMail"]);
    $member->execute();
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);
}
?>