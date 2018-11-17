<?php
include("database.php");
include("login.php");
include("viewLogin.php");
include("session.php");
include("member.php");
$username = $_POST['uname'];
$password = $_POST['pass'];

$obj -> username = $username;
$obj -> password = $password;

$login = new session();
$login -> attemptLogin($obj);
//echo "<pre>",var_dump($login),"</pre>";

?>
