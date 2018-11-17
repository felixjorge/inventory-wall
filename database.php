<?php 
/* model */
class database{
	private $host;  private $user;
	private $passw; private $db;
	protected function getDBConnection(){
		$this -> host = "127.0.0.1";
		$this -> user = "webadmin";
		$this -> passw = "passN2p7B76r";
		$this -> db = "tempdb";
		$con = new mysqli($this -> host, $this -> user, $this -> passw, $this -> db);
		return $con;
	}
}
?>
