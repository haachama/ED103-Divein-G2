<?php
    // session_start();
    // $memNo = $_SESSION["memNo"];   

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

    // '$memNo'
    //顯示會員個資
    if($action == 'memberRead'){
        $sql = $conn->query("SELECT * FROM member WHERE memNo = 1");
        $users = array();
        while($row = $sql->FETCH_ASSOC()){
            array_push($users, $row);
        }
        $result['users'] = $users;
    }

    //修改會員資料
    if($action == 'updateUsers'){
        // $member = $_POST["memNo"];
        // $memNo = $_POST['memNo'];
        $memName = $_POST['memName'];
        $memMail = $_POST['memMail'];

        $sql = $conn->query("UPDATE member SET memMail = '$memMail' WHERE memNo = 1");
    }

    //修改會員密碼
    if($action == 'updateUsersPsw'){
        $memPsw = $_POST['memPsw'];

        $sql = $conn->query("UPDATE member SET memPsw = '$memPsw' WHERE memNo = 1");
    }

    //證照審查
    if($action == 'addLicense'){
        $licenseNo = $_POST['licenseNo'];
        $licenseNumber = $_POST['licenseNumber'];

        $sql = $conn->query("INSERT INTO licenseReview(memNo,licenseNo,licenseNumber) VALUES($memNo,'$licenseNo','$licenseNumber')");
    }

    //顯示日誌
    if($action == 'diaryRead'){
        $sql = $conn->query("SELECT p.memNo, p.diaryNo, p.diaryName, p.diaryPlayDate, p.diaryPicsNo, d.diveName
                            FROM personaldiary p JOIN divespots d ON p.diveNo = d.diveNo
                            WHERE p.memNo = 1");
        $diary = array();
        while($diaryRow = $sql->FETCH_ASSOC()){
            array_push($diary, $diaryRow);
        }
        $result['diary'] = $diary;
    }

    //刪除日誌
    if($action == 'delDiary'){
        // $json = file_get_contents('php://input');
        // $data = json_decode($json);
        $diaryNo = $_POST['diaryNo'];
        $sql = $conn->query("DELETE FROM personaldiary WHERE diaryNo = '$diaryNo'");
    }

    //顯示課程
    if($action == 'classRead'){
        $sql = $conn->query("SELECT p.memNo, p.courseOrderNo, p.trainerScore, c.className, c.courseDate, c.classImage, d.diveName, t.trainerName
                            FROM personalcourseorder p JOIN class c ON p.classNo = c.classNo JOIN divespots d ON c.diveNo = d.diveNo JOIN trainer t ON c.trainerNo = t.trainerNo
                            WHERE p.memNo = 1");
        $diveClass = array();
        while($classRow = $sql->FETCH_ASSOC()){
            array_push($diveClass, $classRow);
        }
        $result['diveClass'] = $diveClass;
    }
    //給分數
    if($action == 'coursePoint'){
        $courseOrderNo = $_POST['courseOrderNo'];
        $starPoint = $_POST['starPoint'];

        $sql = $conn->query("UPDATE personalcourseorder SET trainerScore = '$starPoint' WHERE courseOrderNo = '$courseOrderNo'");
    }

    //顯示訂單
    if($action == 'Order'){
        $sql = $conn->query("SELECT i.listNo, i.itemPrice, o.orderDate, n.itemName
                            FROM itemorderlist i JOIN itemorder o ON i.orderNo = o.orderNo JOIN item n ON i.itemNo = n.itemNo
                            WHERE o.memNo = 1");
        $orders = array();
        while($orderRow = $sql->FETCH_ASSOC()){
            array_push($orders, $orderRow);
        }
        $result['orders'] = $orders;
    }

    //顯示收藏
    if($action == 'favorite'){
        $sql = $conn->query("SELECT f.favoriteNo, i.itemName, i.itemImg
                            FROM favorite f JOIN item i ON f.itemNo = i.itemNo
                             WHERE f.memNo = 1");
        $favs = array();
        while($favRow = $sql->FETCH_ASSOC()){
            array_push($favs, $favRow);
        }
        $result['favs'] = $favs;
    }

    //刪除收藏
    if($action == 'delFavorite'){
        $favoriteNo = $_POST['favoriteNo'];
        $sql = $conn->query("DELETE FROM favorite WHERE favoriteNo = '$favoriteNo'");
    }
    

    echo json_encode($result);
?>