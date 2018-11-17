<?php
class viewLogin extends login{
	public function attemptLogin($objString){	
		$this -> checkValidLogin($objString);
	}	
	public function invalLoginUser(){
		echo "You need to enter a password. ";
	}
	public function invalLoginPassword(){
		echo "You need to enter a uname";
	}
	public function invalLoginEmpty(){
		echo "Enter your login";
	}
	public function invalLogin($usr){
		echo "The uname '".$usr."' , does not match with the password provided";
	}
}
?>
