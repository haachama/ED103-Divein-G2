<?php
try{
  require_once("./connectED103g2.php");
  $sql = "select * from member where memId=:memId and memPsw=:memPsw"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_POST["memId"]);
  $member->bindValue(":memPsw", $_POST["memPsw"]);
  $member->execute();
  if( $member->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
  	$memRow = $member->fetch(PDO::FETCH_ASSOC);
    //--------------將登入者的資料寫入session
    session_start();
    $_SESSION["memNo"] = $memRow["memNo"];
    $_SESSION["memId"] = $memRow["memId"];
    $_SESSION["memPsw"] = $memRow["memPsw"];
    $_SESSION["memName"] = $memRow["memName"];
    $_SESSION["memMail"] = $memRow["memMail"];
    $_SESSION["memAvatar"] = $memRow["memAvatar"];
    $_SESSION["memGamePoint"] = $memRow["memGamePoint"];
    $_SESSION["points"] = $memRow["points"];

    $result = array("memId"=>$memRow["memId"], "memPsw"=>$memRow["memPsw"],
                "memName"=>$memRow["memName"],
                "memMail"=>$memRow["memMail"], "memAvatar"=>$memRow["memAvatar"],
                "memGamePoint"=>$memRow["memGamePoint"], "points"=>$memRow["points"],);
  	$json = json_encode($result);

    //送出登入者的相關資料
    echo $json;
  }
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);
}
?>