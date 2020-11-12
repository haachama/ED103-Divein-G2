<?php
require_once("./connectBooks.php");
$sql = "select `memPsw`,`memMail` from `member` where memId=:memId and memMail=:memMail"; 
$member = $pdo->prepare($sql);
$member->bindValue(":memId", $_POST["memId"]);
$member->bindValue(":memMail", $_POST["memMail"]);
$member->execute();

if($member->rowCount()==0){
    echo "帳號或信箱錯誤";
}else{
    //Send mail using gmail
    $mail = new PHPMailer(true);
    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
    $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
    $mail->Port = 465; // set the SMTP port for the GMAIL server
    $mail->Username = "userAccount@gmail.com"; // =====GMAIL username 寄件信箱
    $mail->Password = "userPassword"; // =====GMAIL password //密碼
    
    //Typical mail data
    $mail->AddAddress(`${memMail}`);// 收件地址
    $mail->SetFrom("sender@gmail.com");//寄信預設人
    $mail->Subject = "海中日子會員密碼查詢";//標題
    $mail->Body = `您的密碼是${memPsw}`;//內容
    
    try{
        $mail->Send();
        echo "Success!";
    } catch(Exception $e){
        //Something went bad
        echo "Fail - " . $mail->ErrorInfo;
    }
}
?>