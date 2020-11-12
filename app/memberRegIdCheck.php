<?php
try{
  require_once("./connectBooks.php");
  $sql = "select * from member where memId=?";
  $member = $pdo->prepare($sql);
  $member->bindValue(1, $_POST["memId"]);
  $member->execute();

  if( $member->rowCount() !=0){ //此帳號已存在, 不可用
    echo "此帳號已存在";
  }else{ //此帳號可使用
    echo "此帳號可使用";
  } 
}catch(PDOException $e){
  echo "error";
}
?>