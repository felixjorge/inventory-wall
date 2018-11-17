<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include("../database.php");
include("../inventory.php");
include("../viewInventory.php"); 
$inventory = new viewInventory();
$inventory -> showAllInventory();
?>
