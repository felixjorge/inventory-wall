<?php
/* CONTROLLER */
class viewInventory extends inventory{
	public function showAllInventory(){
		$info = $this -> getAllInventory();
		//foreach($info as $data){
		//	echo $data["id"]; // This would work if it wasn't using json
		//}
		echo $info;
	}
}
?>
