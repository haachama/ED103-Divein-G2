<?php
session_start();

ini_set('display_errors', 1);

if(!empty($_SESSION["memNo"])){

    $memNo =$_SESSION["memNo"];
    $spotDiveNO = $_GET["spotDiveNO"];

    $errMsg = "";
    
    try{
        // echo $memNo;
    
        require_once("connectED103g2.php");
        
        
        //撈
        $sql = " SELECT memNo, memId, memAvatar  FROM member WHERE memNo = $memNo ";
    
        $spotReferMem = $pdo->query($sql);
        if( $spotReferMem->rowCount() == 0 ){
            $spotReferMemRow = null;
        }else{
            $spotReferMemRow = $spotReferMem->fetch(PDO::FETCH_ASSOC);
        }
    
        echo json_encode($spotReferMemRow,true);
    
    } catch (PDOException $e){
        $e->getMessage();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    }

}else{
    echo "{}";
}


?>
