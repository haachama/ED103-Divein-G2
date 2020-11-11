<?php
    // try{
    // require_once("./connectBooks.php");
    // $sql = "select * from member";
    // $member = $pdo->query($sql);
    // $memRow = $member->fetch(PDO::FETCH_ASSOC);
    	
    // }catch(PDOException $e){
    //     $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    //     $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    // }

    $conn = new mysqli("localhost","root","t2001079","ed103g2_11111405");
    //$conn = new mysqli("localhost","資料庫帳號","資料庫密碼","資料庫名稱");
    if($conn->connect_error){
        die("Connection Failed!".$conn->connect_error);
    }

    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }

    //顯示會員個資
    if($action == 'memberRead'){
        $sql = $conn->query("SELECT * FROM member WHERE memNo = 1");
        $users = array();
        while($row = $sql->FETCH_ASSOC()){
            array_push($users, $row);
        }
        $result['users'] = $users;
    }

    //修改會員資料與密碼(未完成)
    if($action == 'updateUsers'){
        $memNo = $_POST['memNo'];
        // $memPsw = $_POST['memPsw'];
        $memName = $_POST['memName'];
        $memMail = $_POST['memMail'];
        // $memAvatar = $_POST['memAvatar'];

        $sql = $conn->query("UPDATE member SET memName = '$memName', memMail = '$memMail' WHERE memNo = '$memNo'");
        // $sql = $conn->query("UPDATE member SET memPsw = '$memPsw', memName = '$memName', memMail = '$memMail', memAvatar = '$memAvatar' WHERE memNo = '$memNo'");
    }

    //顯示日誌
    if($action == 'diaryRead'){
        $sql = $conn->query("SELECT * FROM personaldiary WHERE memNo = 1");
        $diary = array();
        while($diaryRow = $sql->FETCH_ASSOC()){
            array_push($diary, $diaryRow);
        }
        $result['diary'] = $diary;
    }

    //顯示課程
    if($action == 'classRead'){
        $sql = $conn->query("SELECT * FROM personalcourseorder WHERE memNo = 1");
        $diveClass = array();
        while($classRow = $sql->FETCH_ASSOC()){
            array_push($diveClass, $classRow);
        }
        $result['diveClass'] = $diveClass;
    }

    //顯示踩點
    // if($action == 'classRead'){
    //     $sql = $conn->query("SELECT * FROM personalcourseorder WHERE memNo = 1");
    //     $diveClass = array();
    //     while($classRow = $sql->FETCH_ASSOC()){
    //         array_push($diveClass, $classRow);
    //     }
    //     $result['diveClass'] = $diveClass;
    // }

    //顯示訂單
    if($action == 'Order'){
        $sql = $conn->query("SELECT * FROM itemorderlist WHERE orderNo = 1");
        $orders = array();
        while($orderRow = $sql->FETCH_ASSOC()){
            array_push($orders, $orderRow);
        }
        $result['orders'] = $orders;
    }

    //顯示收藏
    if($action == 'favorite'){
        $sql = $conn->query("SELECT * FROM favorite WHERE memNo = 1");
        $favs = array();
        while($favRow = $sql->FETCH_ASSOC()){
            array_push($favs, $favRow);
        }
        $result['favs'] = $favs;
    }
    

    echo json_encode($result);
?>