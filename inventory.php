<?php
/* MODEL */
class inventory extends database{
	protected function getAllInventory(){
		$query = "select * 
			  from inventory";
		$result = $this -> getDBConnection() -> query($query);
		while($rows = $result -> fetch_assoc()){
			$data[] = $rows;
		}
		//$result -> free();
		$dataConvertedToJSON = json_encode($data, JSON_PRETTY_PRINT);
		
		return $dataConvertedToJSON;
	}
	public function postToInventory($objString){	
		$obj = json_decode($objString);
		var_dump($obj);
		$item = $obj -> item;
		$model = $obj -> model;
		$query = "insert into inventory(item, model) 
			  values('$item','$model')";
		$result = $this -> getDBConnection() -> query($query);
	}
	public function deleteItem($objString){
		$obj = json_decode($objString);
		var_dump($obj);
		$item = $obj -> item;
		//$model = $obj -> model;
		$query = "delete from inventory 
		       	  where id='$item'";
		$result = $this -> getDBConnection() -> query($query);
	}
	public function editItem($objString){
		$obj = json_decode($objString);
		//var_dump($obj);
		$itemID = $obj -> id;
		$itemValue = $obj -> value;
		$itemModel = $obj -> model;

		$query = "update inventory 
			  set item='$itemValue', model='$itemModel' where id='$itemID'";

		$result = $this -> getDBConnection() -> query($query);	

		$query1 = "select id, item, model 
			   from inventory 
			   where id='$itemID'";

		$result1 = $this -> getDBConnection() -> query($query1);
		while($rows = $result1 -> fetch_assoc()){
			$data[] = $rows;
		}
	
		// echo $dataConvertedToJSON;

		$dataConvertedToJSON = json_encode($data, JSON_PRETTY_PRINT);
		
		echo $dataConvertedToJSON;
		// echo $objString;
	}

}
?>
