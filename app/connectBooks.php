<?php
  $dsn = "mysql:host=localhost;port=3306;dbname=ed103g2_1109;charset=utf8";
  $user = "root";
  $password = "t2001079";
  $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_CASE=>PDO::CASE_NATURAL);
  $pdo = new PDO($dsn, $user, $password, $options);
?>