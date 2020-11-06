<?php 
session_start();
if(isset($_SESSION["memId"]) === true){
    $result = array("memId"=>$_SESSION["memId"], "memPsw"=>$_SESSION["memPsw"],
                    "memName"=>$_SESSION["memName"], "memNickName"=>$_SESSION["memNickName"],
                    "memMail"=>$_SESSION["memMail"], "memAvatar"=>$_SESSION["memAvatar"],
                    "memGamePoint"=>$_SESSION["memGamePoint"], "points"=>$_SESSION["points"],
                    "memGamePicture"=>$_SESSION["memGamePicture"], "licenseOW"=>$_SESSION["licenseOW"],
  					"licenseAOW"=>$_SESSION["licenseAOW"]);
	echo json_encode($result);
}else{
	echo "{}";
}
?>