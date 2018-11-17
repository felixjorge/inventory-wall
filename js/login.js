
'use strict';
function checkSession(){
	console.log("done");
}
function ajax_submit(username, password){
	var obj = {
		"username" : username,
		"password" : password
	}
	console.log(obj); // just displays object obj
	objStr = JSON.stringify(obj); // convert it to json string
	console.log(objStr); // displays json string
	process();
}
function process(){
		// console.log(this.objStr); makeing sure that objStr is passed
		if(ourRequest.readyState == 0 || ourRequest.readyState == 4){
			ourRequest.open("POST", "http://www.jorgefelix.cf/Courses/oop8-post/sendlogindata.php", true);
			ourRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ourRequest.onreadystatechange = fetch;
			ourRequest.send("object=" + objStr);
		}

	//	document.getElementById("status").innerHTML = "......... loading ........ ";
}
function fetch(){
// ----------- Adds loading while attempting to login | disabled for now
//	document.getElementById("status").innerHTML = "2...--------------------------...... loading ....----------------------------.... ";
//	document.getElementById("load").style.visibility = "visible";
// --------- / Adds ... for now -----------------
	if(ourRequest.readyState == 4){
		if(ourRequest.status == 200){
			var response = ourRequest.responseText;

			// document.getElementById("load").style.visibility = "hidden";						
			// console.log( response);
//			if(response ==	"go"){
//				window.location.href = "admin_page.php";
//			}else{
				document.getElementById("status").innerHTML = response;	
//			}
		}
	}	
}

// Starts here 
document.getElementById("submit").addEventListener("click", run);
var objStr ="";
var ourRequest = new XMLHttpRequest();
function run(){
	var usr = document.getElementById("uname").value;
	var pwd = document.getElementById("pass").value;	
	ajax_submit(usr, pwd);
}
