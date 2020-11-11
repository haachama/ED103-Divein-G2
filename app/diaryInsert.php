<?php

    $diaryName = isset($_POST["diaryName"])?$_POST["diaryName"]:""; //尋找是否回傳數字回來，(html的class)有的話寫入資料，沒有寫入空字串
    $diaryType = isset($_POST["diaryType"])?$_POST["diaryType"]:"";
    $diveNo = isset($_POST["diveNo"])?$_POST["diveNo"]:"";
    $diaryDiveTime = isset($_POST["diaryDiveTime"])?$_POST["diaryDiveTime"]:"";
    $diaryPlayDate = isset($_POST["diaryPlayDate"])?$_POST["diaryPlayDate"]:"";
    $diaryWeather = isset($_POST["diaryWeather"])?$_POST["diaryWeather"]:"";
    $diaryVisibility = isset($_POST["diaryVisibility"])?$_POST["diaryVisibility"]:"";
    $diaryTemp = isset($_POST["diaryTemp"])?$_POST["diaryTemp"]:"";
    $diaryWaterTemp = isset($_POST["diaryWaterTemp"])?$_POST["diaryWaterTemp"]:"";
    $diaryText = isset($_POST["diaryText"])?$_POST["diaryText"]:"";
    $diaryPoint1 = isset($_POST["diaryPoint1"])?$_POST["diaryPoint1"]:"";
    $diaryPoint2 = isset($_POST["diaryPoint2"])?$_POST["diaryPoint2"]:"";
    $diaryPoint3 = isset($_POST["diaryPoint3"])?$_POST["diaryPoint3"]:"";
    $diaryPoint4 = isset($_POST["diaryPoint4"])?$_POST["diaryPoint4"]:"";
    $diaryPoint5 = isset($_POST["diaryPoint5"])?$_POST["diaryPoint5"]:"";
    // echo $fileBtn;
    // die;
    //測試MYSQL
    // INSERT INTO personaldiary(memNo,diaryName,diaryType,diaryWriteDate,diveNo,diaryDiveTime,diaryPlayDate,diaryWeather,diaryVisibility,diaryTemp,diaryWaterTemp,diaryText,diaryPoint1,diaryPoint2,diaryPoint3,diaryPoint4,diaryPoint5,diaryPicsNo) 
    // VALUES(1,"哈哈哈",2,14,120,"2020-11-06",20,20,20,20,"哈哈T",5,5,5,5,5,"")


try{
    $dsn = "mysql:host=localhost;port=3306;dbname=ed103g2;charset=utf8";  //家3308 教室3306
    $user = "root";
    $password = "root";//家no 教室root 
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);
    

    switch($_FILES["fileBtn"]["error"]){ ////第一個是html的name
        case UPLOAD_ERR_OK:
            $dir = "img/diary";
            //檢查資料夾是否已存在
            if(file_exists($dir)==false){
                mkdir($dir);   //make directory
            }

            $from = $_FILES["fileBtn"]["tmp_name"];  //暫存中的路徑和檔名
            $fileBtn = $_FILES["fileBtn"]["name"]; //第一個是html的name
            $to = "{$dir}/{$fileBtn}";

            if(copy($from,$to)){
                echo "上傳成功<br>";
            }else{
                echo "上傳失敗<br>";
            }
            break;
            case UPLOAD_ERR_INI_SIZE :
                echo "上傳的檔案太大, 不得超過", ini_get("upload_max_filesize"), "<br>";
                break;
            case UPLOAD_ERR_FORM_SIZE :
                echo "上傳的檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "位元組<br>";
                break;
            case UPLOAD_ERR_PARTIAL :
                echo "上傳檔案不完整", "<br>";
                break;
            case UPLOAD_ERR_NO_FILE :
                echo "未選檔案", "<br>";
                break;		
                default:
                echo "系統暫時發生問題，請聯絡網站維護人員<br>"	;
    }

     //第一個是sql欄位


    
    $sql = "INSERT INTO personaldiary(memNo,diaryName,diaryType,diaryWriteDate,diveNo,diaryDiveTime,diaryPlayDate,diaryWeather,
    diaryVisibility,diaryTemp,diaryWaterTemp,diaryText,diaryPoint1,diaryPoint2,diaryPoint3,diaryPoint4,diaryPoint5,diaryPicsNo) 
            VALUES(1,$diaryName,$diaryType,now(),$diveNo,$diaryDiveTime,$diaryPlayDate,$diaryWeather,$diaryVisibility,$diaryTemp,$diaryWaterTemp,$diaryText,$diaryPoint1,$diaryPoint2,$diaryPoint3,$diaryPoint4,$diaryPoint5,$fileBtn)"; 
    // 1是寫死的會員
    echo $diaryName,$diaryType,$diveNo,$diaryDiveTime,$diaryPlayDate,$diaryWeather,$diaryVisibility,$diaryTemp,$diaryWaterTemp,$diaryText,$diaryPoint1,$diaryPoint2,$diaryPoint3,$diaryPoint4,$diaryPoint5,$fileBtn;
    die;
    $diary = $pdo->prepare($sql);
    $diary->execute(); //程式執行到這結束


// -------------------------------------------------------------------------------------------------

    // $sql2 = "INSERT INTO diaryImg(biologicalNo) VALUES(:biologicalNo)"; 
    // $diaryImg = $pdo->prepare($sql2);
    // $diaryImg->bindValue(":biologicalNo", $_POST["biologicalNo"]);
    // $diary->execute();
    
    // $checkbox1 = $_POST['animals'] ;  
    // if ($_POST["submit" ]=="submit")  
    // {  
    // for ($i=0; $i<sizeof ($checkbox1);$i++) {  
    // $query="INSERT INTO diaryImg(biologicalNo) VALUES ('".$checkboxl[$i]. "')";  
    // }


    // header('Location : diaryInside.html'); //回到diaryInside.html

}catch(PDOException $e){
    $error = array("errorMsg"=>$e->getMessage());
    echo json_encode($error);
}
?>
