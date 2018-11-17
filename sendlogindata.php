<?php
header("Access-Control-Allow-Origin: *");
include("database.php");
include("login.php");
include("viewLogin.php");
include("session.php");
include("viewSession.php");
//$tryLogin = new viewLogin();
// $tryLogin -> attemptLogin($_POST['object']);
$a = new viewSession();
$a -> attemptLogin($_POST['object']);
?>
