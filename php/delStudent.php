<?php
// 选单个
/*$xx=$_GET['id'];
//print_r($xx);
$mysqli=new mysqli('localhost','root','','test');
$sql = "DELETE FROM `students` WHERE `id`='{$xx}'";
$mysqli->query($sql);*/
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';
// echo json_encode($_POST) //ajax post 提交时的调试手段
// sleep(2);
$ids=$_POST['x'];
$tmp=implode(" OR `id` = ", $ids);
$mysqli = new mysqli("localhost", "root", "", "test");
$sql = "DELETE FROM `students` WHERE `id` =".$tmp;
$mysqli->query($sql);
?>