<?php
include("start.php");
?>
<html>
	<head>
	<style>
	</style>
	<head>
	<body>
		<form action="index.php" method="post">
		uname: <input type="text" id="uname" name="uname">
		pass:  <input type="password" id="pass" name="pass">
		<input type="submit" value="submit" id="submit" >
		</form>
		<div id="status"></div>
		<div id="load"></div>
		<!--<script src="js/login.js"></script> -->
	</body>
</html>
