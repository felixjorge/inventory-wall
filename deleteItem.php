<?php
header("Access-Control-Allow-Origin: *");
include("database.php");
include("inventory.php");
$deleteOBJ = new inventory();
//echo $_POST['object'];
$deleteOBJ -> deleteItem($_POST['object']);
?>
