<?php
header("Access-Control-Allow-Origin: *");
include("database.php");
include("inventory.php");
$insertNewOBJ = new inventory();
$insertNewOBJ -> postToInventory($_POST['object']);
?>
