<?php 
session_start();
if(isset($_SESSION["trainerId"]) === true){
    $result = array("trainerId"=>$_SESSION["trainerId"], "trainerPsw"=>$_SESSION["trainerPsw"],
                    "trainerName"=>$_SESSION["trainerName"], "trainerImage"=>$_SESSION["trainerImage"],
                    "trainerScore"=>$_SESSION["trainerScore"]);
	echo json_encode($result);
}else{
	echo "{}";
}
?>