<?php
require_once("./connectBooks.php");
// 註冊檢查帳號是否重複
// try{
//   require_once("./connectBooks.php");
//   $sql = "select * from member where memId=?";
//   $member = $pdo->prepare($sql);
//   $member->bindValue(1, "testg2");
//   $member->execute();

//   if( $member->rowCount() !=0){ //此帳號已存在, 不可用
//     echo "此帳號已存在";
//   }else{ //此帳號可使用
//     echo "此帳號可使用";
//   } 
// }catch(PDOException $e){
//   echo "error";
// }

// $action = $_POST['action'];
// switch($action){
//   case "memberLogin":
//       //wwwroot\phpLab_ED103\AjaxLab_C\login_nav_js_depart
//      break;

//   case "coachLogin":
        //wwwroot\phpLab_ED103\AjaxLab_C\login_nav_js_depart
//      break;

//   case "pawQuery":
//     break;

//   case "registered":
        //wwwroot\Class Practice\homeWork\10prodInsert
//      break;
// }
// echo $_POST["action"];
// switch($_POST["action"]){
//   case "registered":
//     try{
//       $sql = "select * from member where memId=?";
//       $member = $pdo->prepare($sql);
//       $member->bindValue(1, $_POST["memId"]);
//       $member->execute();
    
//       if( $member->rowCount() !=0){
//         echo "此帳號已存在";
//       }else{
//         echo "此帳號可使用";
//       } 
//     }catch(PDOException $e){
//       echo "error";
//     }
//   break;
// }

try{
  $sql = "select * from member where memId=?";
  $member = $pdo->prepare($sql);
  $member->bindValue(1, $_POST["memId"]);
  $member->execute();

  if( $member->rowCount() !=0){ //此帳號已存在, 不可用
    echo "此帳號已存在";
  }else{ //此帳號可使用
    echo "此帳號可使用";
  } 
}catch(PDOException $e){
  echo "error";
}





?>