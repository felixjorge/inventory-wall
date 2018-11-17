<?php
/* controller */
class session extends viewLogin{
	public $sessionID;
	public $username;
	
	public function __construct(){
		session_start();
		$this -> checkLogin();
	}
	public function sessionStart(){		
		$this -> sessionID = $_SESSION["id"]  = $this -> id;
		$this -> username  = $_SESSION["usr"] = $this -> usr;
	}	
	public function sessionEnd(){
		session_destroy();
	}

	public function checkLogin(){
		if(isset($_SESSION['id'])){
			$this -> sessionID = $_SESSION['id'];
			$this -> username  = $_SESSION['usr'];	
		}	
	}
}
?>
