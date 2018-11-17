<?php
/* Controller */
class login extends database{
	protected $id;
	protected $usr; 
	private $psw;
	
	protected function checkValidLogin($objStr){	
//		$objJSONToPhp = $this -> jsonDecode($objStr);
		$this -> usr = $objStr -> username;
		$this -> psw = $objStr -> password;		
		if($this -> usr && $this -> psw){
			$this -> logmein();
		}else if($this -> usr){
			$this -> invalLoginUser();
		}else if($this -> psw){
			$this -> invalLoginPassword();
		}
	}
	private function jsonDecode($objString){
		$obj = json_decode($objString);
		return $obj;
	}
	private function logmein(){
		$accounts = "select * 
			     from worker_account 
			     where email='".$this -> usr."' and password='".$this -> psw."'";
	
		$result = $this -> getDBConnection() -> query($accounts);
		while($row = $result -> fetch_assoc()){
			$dbid   = $row['id'];
			$dbname = $row['email'];
			$dbpsw  = $row['password'];
		}
		
		$this -> id = $dbid;

		if( ( $this -> usr == $dbname ) && ( $this -> psw == $dbpsw ) ){
			//$validation = true;
			$this -> sessionStart();
			header("Location: admin_page.php");
		
			// start sessiom here call another class	
		}else{
			$this -> invalLogin($this -> usr);
		}
	}
}
?>
