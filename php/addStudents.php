<?php
  // echo 5
// sleep(2);
$mysqli = new mysqli("localhost", "root", "", "test");//创建一个mysqli对象 用来管理数据库(增删改查) 
$sql = "INSERT INTO `students`( `xuehao`, `name`, `sex`, `age`, `score`) VALUES (110,\"Itachi\",\"nan\",17,100)";
 $mysqli->query($sql);
?>