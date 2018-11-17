<?php
/* Controller */
class member extends database{
	public $id;
	public $firstName;
        public $lastName;
	public $email;
	public $position;

	public function finduserbyID($id){
		$query = "select id, first_name, last_name, email, position from worker_info, worker_account, positions where worker_info.worker_id = worker_account.id and worker_info.position_id = positions.position_id and worker_account.id=$id";
		$result = $this -> getDBConnection() -> query($query);
		while($rows = $result -> fetch_assoc()){
			$data[] = $rows;
		}
		$this -> assign($data);	
		//$dataConvertedToJSON = json_encode($data, JSON_PRETTY_PRINT);
		//var_dump($dataConvertedToJSON);	
	}
	protected function assign($a){
		$this -> firstName = $a[0]['first_name'];
		$this -> lastName = $a[0]['last_name'];
		$this -> email = $a[0]['email'];
		$this -> position = $a[0]['position'];
		$this -> id = $a[0]['id'];		
	}
}
?>
