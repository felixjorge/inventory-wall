<?php
include("start.php");

if(!($login -> sessionID)){
	header("Location: index.php");
}

$mem = new member();
$mem -> finduserbyID($login -> sessionID);
?>
<!-- VIEW --> 
<html>
	<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
	body{
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0px;
	margin: 0px;
	}
	span{
		padding: 2.5px;
	}
	#info{
	
	}
	.itemWrap, #controls, #accountDetails{	
		max-width: 100%;
		padding: 5px;
	}
	#accountDetails, #controls{
		text-align: center;
	}
	</style>
	</head>
	<body>
	<div id="accountDetails">
		<form action="logout.php" method="post">
			<input type="submit" name="logout" value="logout">
		</form>
		<p>Welcome, <?php echo $mem -> firstName." ". $mem -> lastName; ?></p>
		<p>ID: <?php echo $mem -> id; ?></p>
		<p>Email: <?php echo $mem -> email; ?></p>
		<p>Position: <?php echo $mem -> position; ?></p>
	</div>

	
	<div id="controls">
		Item: <input type="text" id="item">
		Model: <input type="text" id="model">
		<input type="button" value="enter" onclick="ajaxsubmit()">
		<div id="status"></div>
	</div>
	
	
	<div id="info">
		<!--
		<div class="itemWrap">
			<div id="text">this is just a test text on the left side</div>
			<div id="ctrl">
				<input type="button" class="edit" value="edit">
				<input type="button" class="delete" value="delete">
			</div>
		</div>

		<div class="itemWrap">
			<div id="text">this is just a test text on the left side</div>
			<div id="ctrl">
				<input type="button" class="edit" value="edit">
				<input type="button" class="delete" value="delete">
			</div>
		</div>	-->
	</div>
	
	<script src="js/main.js"></script>
	</body>
</html>
