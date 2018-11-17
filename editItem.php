<?php
header("Access-Control-Allow-Origin: *");
include("database.php");
include("inventory.php");
$editItemInventory = new inventory();
$editItemInventory -> editItem($_POST['object']);
?>
