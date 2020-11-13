<?php
    // $error = '';

    $diaryName = isset($_POST["diaryName"])?$_POST["diaryName"]:""; 
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
    // echo $diaryName,'<br>';
    // echo $diaryType,'<br>';
    // echo $diveNo,'<br>';
    // echo $diaryDiveTime,'<br>';
    // echo $diaryPlayDate,'<br>';
    // echo $diaryWeather,'<br>';
    // echo $diaryVisibility,'<br>';
    // echo $diaryTemp,'<br>';
    // echo $diaryWaterTemp,'<br>';
    // echo $diaryText,'<br>';
    // echo $diaryPoint1,'<br>';
    // echo $diaryPoint2,'<br>';
    // echo $diaryPoint3,'<br>';
    // echo $diaryPoint4,'<br>';
    // echo $diaryPoint5,'<br>';
    // echo '<br>';
    // echo $diaryPoint5;
    // die;
    //測試MYSQL
    // INSERT INTO personaldiary(memNo,diaryName,diaryType,diaryWriteDate,diveNo,diaryDiveTime,diaryPlayDate,diaryWeather,diaryVisibility,diaryTemp,diaryWaterTemp,diaryText,diaryPoint1,diaryPoint2,diaryPoint3,diaryPoint4,diaryPoint5,diaryPicsNo) 
    // VALUES(1,"哈哈哈",2,14,120,"2020-11-06",20,20,20,20,"哈哈T",5,5,5,5,5,"")


try{
    $dsn = "mysql:host=localhost;port=3306;dbname=ed103g2;charset=utf8";  //家3308 教室3306
    $user = "root";
    $password = "root";//家no 教室root 
    $options = array(PDO::ATTR_CASE => PDO::CASE_NATURAL,PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
    $pdo = new PDO($dsn, $user, $password, $options);
    
    //第一個是sql欄位
    // NOTNULL  memNo、diaryName、diaryWriteDate、diveNo
    $sql = "INSERT INTO personaldiary(
                memNo,
                diaryName,
                diaryType,
                diaryWriteDate,
                diveNo,
                diaryDiveTime,
                diaryPlayDate,
                diaryWeather,
                diaryVisibility,
                diaryTemp,
                diaryWaterTemp,
                diaryText,
                diaryPoint1,
                diaryPoint2,
                diaryPoint3,
                diaryPoint4,
                diaryPoint5,
                diaryPicsNo) 
            VALUES(
                1,
                '$diaryName',
                $diaryType,
                now(),
                $diveNo,
                $diaryDiveTime,
                '$diaryPlayDate',
                $diaryWeather,
                $diaryVisibility,
                $diaryTemp,
                $diaryWaterTemp,
                '$diaryText',
                $diaryPoint1,
                $diaryPoint2,
                $diaryPoint3,
                $diaryPoint4,
                $diaryPoint5,
                'img/diary/diaryphoto1.png')";


    // 1是寫死的會員，上傳圖片也是死的
    // echo $diaryName,$diaryType,$diveNo,$diaryDiveTime,$diaryPlayDate,$diaryWeather,$diaryVisibility,$diaryTemp,$diaryWaterTemp,$diaryText,$diaryPoint1,$diaryPoint2,$diaryPoint3,$diaryPoint4,$diaryPoint5,$fileBtn;
    // die;
    $diary = $pdo->prepare($sql);

    $diary->execute(); //程式執行到這結束
    $diaryNo = $pdo->lastInsertId();  //接收到剛剛的日誌流水號


// -------------------------------------------------------------------------------------------------

    $sql2 = "INSERT INTO diaryImg(biologicalNo, diaryNo) VALUES(:biologicalNo, $diaryNo)"; //還沒執行?
    $diaryImg = $pdo->prepare($sql2); //還沒執行?

    $checkbox1 = $_POST['biologicalNo'] ;  //假設回傳是陣列  ajax的value
    // echo $checkbox1;
    foreach($checkbox1 as $i=>$biologicalNo){
        $diaryImg->bindValue(":biologicalNo", $biologicalNo);
        $diaryImg->execute(); //迴圈跑完結束 放這??
    }

    

    // header('Location : diaryInside.html'); //回到diaryInside.html

}catch(PDOException $e){
    $error = array("errorMsg"=>$e->getMessage());
    // $error.= $e->getLine() . '<br>' . $e->getMessage() ;
    echo json_encode($error);
}
// echo $diaryPlayDate;
?>
