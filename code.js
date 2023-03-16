function loginBttn() {
   var user =document.getElementById("username").value;
	var pass =document.getElementById("username").value;
	
	var userT = "vlad";
	var passT = "cool";
	
	if (user == userT) {
		if (pass == passT) {
			window.location.href = "/home";
		};
	};
}
