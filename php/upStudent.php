<?php

$mysqli = new mysqli("localhost", "root", "", "test");
 $sql = "UPDATE `students` SET `{$_POST['shuxing']}`='{$_POST['value']}' WHERE `id`='{$_POST['id']}'";

 $mysqli->query($sql);
?>

