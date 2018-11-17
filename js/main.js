// -------------------------------- GETS -------------------------------
var block = document.getElementById("info"); // Puts data here 
var ourRequest = new XMLHttpRequest();
var track = []; // Will track the sizes to determine when to load new data
var loadCurrentData1st = true; // Will load all data once

process();
function process(){
	if(ourRequest.readyState == 0 || ourRequest.readyState == 4){	
		ourRequest.open('GET', "http://www.jorgefelix.cf/Courses/oop11/json/all-inventory-json.php", true);
		ourRequest.onreadystatechange = fetch;
		ourRequest.send();	
	}
}
function fetch(){
	if(ourRequest.readyState == 4){
		if(ourRequest.status == 200){
			var ourData = JSON.parse(ourRequest.responseText); 
			console.log("Javascript GET" + ourData);	
			track.push(ourData.length); 
			// Once we have 2 different sizes remove the first element, we only need two 
			if(track.length == 3){
				track.shift();
			}
			console.log(track);
			// First load current data
			if(loadCurrentData1st){
				loadEverything(ourData);
			}else{	// Second load any other new data that comes in
				loadNewData(ourData);
			}
		}
	 }
}
// Load everything from JSON File
function loadEverything(ourData){
	for(var i = 0; i < ourData.length; i++){			
		createElements(ourData[i].id, ourData[i].item, ourData[i].model);
	}	
	loadCurrentData1st = false;
	setTimeout("process()",5000);
}

// Loads new data from JSON
function loadNewData(ourData){
//	console.log("t1: " + track[0] + " t2: " + track[1]);
	if(track[0] < track[1]){
		for(var i = track[0]; i < track[1]; i++){
			createElements(ourData[i].id, ourData[i].item, ourData[i].model);
		}
	}
	setTimeout("process()",1000);
}
function createElements(id, item, model ){
		var div = document.createElement("div");
		div.setAttribute("id", "container" + id);
		div.setAttribute("class","itemWrap");
		block.appendChild(div);

		block.insertBefore(div, block.childNodes[0]);
			
		var span1 = document.createElement("span");
		var node1 = document.createTextNode(id);
		span1.appendChild(node1);	
		div.appendChild(span1);

		var span2 = document.createElement("span");
		var node2 = document.createTextNode(item);
		span2.appendChild(node2);
		div.appendChild(span2);		

		var span3 = document.createElement("span");
		var node3 = document.createTextNode(model);
		span3.appendChild(node3);
		div.appendChild(span3);

		var br = document.createElement("br");
		div.appendChild(br);		

		var inputDelete = document.createElement("input");
		inputDelete.setAttribute("type","button");
		inputDelete.setAttribute("value", "delete");
		inputDelete.setAttribute("id","delete" + id);
		inputDelete.setAttribute("class","delete");
		div.appendChild(inputDelete);	

		var inputEdit = document.createElement("input");
		inputEdit.setAttribute("type","button");
		inputEdit.setAttribute("value", "edit");
		inputEdit.setAttribute("id","edit" + id);
		inputEdit.setAttribute("class", "edit");
		div.appendChild(inputEdit);		

		document.getElementById("delete" + id).addEventListener("click", deleteItem);
		document.getElementById("edit" + id).addEventListener("click", editItem);

}

// -------------------------------- POST ---------------------------------
var ourRequest2 = new XMLHttpRequest();
var objStr = "";
function ajaxsubmit(){
	/* check data first */
	var itemVal = document.getElementById("item").value;
	var modelVal = document.getElementById("model").value;	
	var obj = {
		"item": itemVal,
		"model": modelVal 
	};
	objStr = JSON.stringify(obj);	
	console.log("Javascript | POSTING: " + objStr);
	process2();	
}
function process2(){
		if(ourRequest2.readyState == 0 || ourRequest2.readyState == 4){	
		ourRequest2.open('POST', "http://www.jorgefelix.cf/Courses/oop11/insertNewObject.php", true);
		ourRequest2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ourRequest2.onreadystatechange = fetch2;
		ourRequest2.send("object="+ objStr);	
		}
}
function fetch2(){
	if(ourRequest2.readyState == 4){
		if(ourRequest2.status == 200){
			var ourData2 = ourRequest2.responseText;
			document.getElementById("status").innerHTML = ourData2;
		}
	 }
}
/* ----------------- Delete Item Request -------------------*/

var ourRequest3 = new XMLHttpRequest();
var objStr3 = "";
var itemNum;
function deleteItem(e){
	var item = e.srcElement.id;
	itemNum = item.replace(/[^\d]/g,'');
	ajax_deleteItem(itemNum);
	console.log(itemNum + " num");
}
function ajax_deleteItem(item){
	var obj = {
		"item": item
	}
	console.log(obj);
	objStr3 = JSON.stringify(obj);
	console.log(objStr3);
	processDeleteItemRequest();
}
function processDeleteItemRequest(){
		if(ourRequest3.readyState == 0 || ourRequest3.readyState == 4){
			ourRequest3.open("POST", "http://www.jorgefelix.cf/Courses/oop11/deleteItem.php", true);
			ourRequest3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ourRequest3.onreadystatechange = fetch3;
			ourRequest3.send("object=" + objStr3);
		}
}
function fetch3(){
	if(ourRequest3.readyState == 4){
		if(ourRequest3.status == 200){
			var ourData3 = ourRequest3.responseText;
			var b = document.getElementById("container" + itemNum);
			b.parentNode.removeChild(b);
		}
	 }
}
/* ------------- Edit Item ---------------------*/
var ourRequest4 = new XMLHttpRequest();
var objStr4 = "";
var itemNum4;

function editItem(e){

	var item = e.srcElement.id;
	itemNum4 = item.replace(/[^\d]/g,'');
	console.log(itemNum4 + " numi");

	var div = document.getElementById("container" + itemNum4);	
	
	if(div.getElementsByTagName("input").length === 2){	
		var text1 = div.getElementsByTagName("span")[1].innerHTML;
		console.log(text1);

		var inputText1 = document.createElement("input");
		inputText1.setAttribute("type","text");
		inputText1.setAttribute("value", text1);
		inputText1.setAttribute("id","text");
		div.appendChild(inputText1);		

		var text2 = div.getElementsByTagName("span")[2].innerHTML;
		console.log(text2);
		var inputText2 = document.createElement("input");
		inputText2.setAttribute("type","text");
		inputText2.setAttribute("value", text2);
		inputText2.setAttribute("id","text");
		div.appendChild(inputText2);		

		var inputSave = document.createElement("input");
		inputSave.setAttribute("type","button");
		inputSave.setAttribute("value", "save");
		inputSave.setAttribute("id","save" + itemNum4);
		div.appendChild(inputSave);		
	
		var inputExitSave = document.createElement("input");
		inputExitSave.setAttribute("type","button");
		inputExitSave.setAttribute("value", "exit save");
		inputExitSave.setAttribute("id","exitSave" + itemNum4);
		div.appendChild(inputExitSave);		

		document.getElementById("exitSave" + itemNum4).addEventListener("click", exitSave);
	
		document.getElementById("save" + itemNum4).addEventListener("click", save);
	}
}
function exitSave(e){
	console.log("d");
	var item = e.srcElement.id;
	itemNum4 = item.replace(/[^\d]/g,'');
	console.log(itemNum4 + " numi");

	var b = document.getElementById("container" + itemNum4);

	var i = 1;
	while(i <= 4){
		var inputs = b.getElementsByTagName("input")[2];
		b.removeChild(inputs);
		i++;
	}
}
function save(e){
	var item = e.srcElement.id;
	itemNum4 = item.replace(/[^\d]/g,'');
	console.log(itemNum4 + " numi");
	var b = document.getElementById("container" + itemNum4);
	var newValueItem = b.getElementsByTagName("input")[2].value;
	var newValueModel = b.getElementsByTagName("input")[3].value;

	ajax_editItem(itemNum4, newValueItem, newValueModel);
}


function ajax_editItem(id, updatedValItem, updatedValModel){
	var obj = {
		"id" : id,
		"value": updatedValItem,
		"model": updatedValModel
	}
	console.log(obj);
	objStr4 = JSON.stringify(obj);
	console.log(objStr4);
	processEditItemRequest();
}
function processEditItemRequest(){
		if(ourRequest4.readyState == 0 || ourRequest4.readyState == 4){
			ourRequest4.open("POST", "http://www.jorgefelix.cf/Courses/oop11/editItem.php", true);
			ourRequest4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ourRequest4.onreadystatechange = fetch4;
			ourRequest4.send("object=" + objStr4);
		}
}
function fetch4(){
	if(ourRequest4.readyState == 4){
		if(ourRequest4.status == 200){
			var ourData4 = JSON.parse(ourRequest4.responseText); 
			console.log("Javascript GET" + ourData4);

			for(var i = 0; i < ourData4.length; i++){
				console.log(ourData4[i].id + " " +ourData4[i].item+ ourData4[i].model);
				var b = document.getElementById("container" + ourData4[i].id);
				var updateValueItem = b.getElementsByTagName("span")[1].innerHTML = ourData4[i].item;	
				var updateValueModel = b.getElementsByTagName("span")[2].innerHTML = ourData4[i].model;	

				console.log(updateValueItem + " " + updateValueModel);
			}
		}
	 }
}
