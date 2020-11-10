<?php

try{
    $dsn = "mysql:host=localhost;port=3306;dbname=ed103g2;charset=utf8";  //家3308 教室3306
    $user = "root";
    $password = "root";//家no 教室root 
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);

    $auditStatus= 0;
    $failureReason= 0;
    $classImage= '';
    $sql = "insert into personaldiary(diaryNo,memNo,diaryName,diaryWriteDate,diaryType,diveNo,diaryDiveTime,diaryPlayDate,diaryWeather,diaryVisibility,diaryTemp,diaryWaterTemp,diaryText,diaryPoint1,diaryPoint2,diaryPoint3,diaryPoint4,diaryPoint5,diaryPicsNo) 
                        values(:diaryNo,:memNo,:diaryName,:diaryWriteDate,:diaryType,:diveNo,:diaryDiveTime,:diaryPlayDate,:diaryWeather,:diaryVisibility,:diaryTemp,:diaryWaterTemp,:diaryText,:diaryPoint1,:diaryPoint2,:diaryPoint3,:diaryPoint4,:diaryPoint5,:diaryPicsNo)"; 
    $class = $pdo->prepare($sql);
    $class->bindValue(":diaryNo", $_POST["diaryNo"]);
    $class->bindValue(":memNo", $_POST["memNo"]);
    $class->bindValue(":diaryName", $_POST["diaryName"]);
    $class->bindValue(":diaryWriteDate", $_POST["diaryWriteDate"]);
    $class->bindValue(":diaryType", $_POST["diaryType"]);

    $class->bindValue(":diveNo", $_POST["diveNo"]);
    $class->bindValue(":diaryDiveTime", $_POST["diaryDiveTime"]);
    $class->bindValue(":diaryPlayDate", $_POST["diaryPlayDate"]);
    $class->bindValue(":diaryWeather", $_POST["diaryWeather"]);
    $class->bindValue(":diaryVisibility", $_POST["diaryVisibility"]);

    $class->bindValue(":diaryTemp", $_POST["diaryTemp"]);
    $class->bindValue(":diaryWaterTemp", $_POST["diaryWaterTemp"]);
    $class->bindValue(":diaryText", $_POST["diaryText"]);
    $class->bindValue(":diaryPoint1", $_POST["diaryPoint1"]);
    $class->bindValue(":diaryPoint2", $_POST["diaryPoint2"]);

    $class->bindValue(":diaryPoint3", $_POST["diaryPoint3"]);
    $class->bindValue(":diaryPoint4", $_POST["diaryPoint4"]);
    $class->bindValue(":diaryPoint5", $_POST["diaryPoint5"]);


    switch($_FILES["diaryPicsNo"]["error"]){
        case UPLOAD_ERR_OK:
            $dir = "img/class";
            //檢查資料夾是否已存在
            if(file_exists($dir)==false){
                mkdir($dir);   //make directory
            }

            $from = $_FILES["diaryPicsNo"]["tmp_name"];  //暫存中的路徑和檔名
            $diaryImage = $_FILES["diaryPicsNo"]["name"];
            $to = "{$dir}/{$diaryImage}";

            if(copy($from,$to)){
                echo "上傳成功<br>";
            }else{
                echo "上傳失敗<br>";
            }
            break;
        case UPLOAD_ERR_INI_SIZE:
            echo "上傳的檔案過大，不得超過",ini_get("upload_max_filesize"),"<br>";
            break;
        case UPLOAD_ERR_FROM_SIZE:
            echo "上傳的檔案過大，不得超過",$_POST["MAX_FILE_SIZE"],"<br>";
            break;
        case UPLOAD_ERR_PARTIAL:
            echo "上傳檔案不完整","<br>";
            break;
        case UPLOAD_ERR_NO_FILE:
            echo "未選擇檔案";
            break;
        default:
        echo "系統暫時發生問題，請聯絡客服";
    }

    $class->bindValue(":diaryPicsNo", $diaryImage);
    $class->execute();

    
    header('Location : trainerManage.php');

}catch(PDOException $e){
    $error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);
}
?>
