<?php

try{
    $itemName = $_POST['title'];
    require_once("connectED103g2.php");
    $sql = "select itemName , itemId , itemPrice , itemImg , itemDescription from item where itemName = '$itemName';";
    $data = $pdo->prepare($sql);
    $data-> execute();
    $shopRows = $data->fetch(PDO::FETCH_ASSOC);
    echo json_encode($shopRows);

} catch (PDOException $e) {

    echo "錯誤行號 : ", $e->getLine(), "<br>";
    echo "錯誤訊息 : ", $e->getMessage(), "<br>";
    // echo "系統發生不正常狀況，請通知維護人員~~~<br>";

}
// echo $sql;
?>