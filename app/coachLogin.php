<?php
try{
  require_once("./connectED103g2.php");
  $sql = "select * from trainer where trainerId=:trainerId and trainerPsw=:trainerPsw"; 
  $trainer = $pdo->prepare($sql);
  $trainer->bindValue(":trainerId", $_POST["trainerId"]);
  $trainer->bindValue(":trainerPsw", $_POST["trainerPsw"]);
  $trainer->execute();
  if( $trainer->rowCount()==0){ //查無此人
	  echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
  	$trainerRow = $trainer->fetch(PDO::FETCH_ASSOC);
    //--------------將登入者的資料寫入session
    session_start();
    $_SESSION["trainerNo"] = $trainerRow["trainerNo"];
    $_SESSION["trainerId"] = $trainerRow["trainerId"];
    $_SESSION["trainerPsw"] = $trainerRow["trainerPsw"];
    $_SESSION["trainerName"] = $trainerRow["trainerName"];
    $_SESSION["trainerImage"] = $trainerRow["trainerImage"];
    $_SESSION["trainerScore"] = $trainerRow["trainerScore"];

    $result = array("trainerId"=>$trainerRow["trainerId"], "trainerPsw"=>$trainerRow["trainerPsw"],
                "trainerName"=>$trainerRow["trainerName"], "trainerImage"=>$trainerRow["trainerImage"],
                "trainerScore"=>$trainerRow["trainerScore"]);
  	$json = json_encode($result);

    //送出登入者的相關資料
    echo $json;
  }
}catch(PDOException $e){
	$error = array("errorMsg"=>$e->getMessage());
  	echo json_encode($error);
}
?>