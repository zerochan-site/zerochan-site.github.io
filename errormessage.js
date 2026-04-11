function die() {
	if (document.getElementById("message").value == "") {
		alert("Your message is empty. Please write something in it.");
		return;
	}

	alert("Access Denied");
	document.getElementById("message").value = "";
	document.getElementById("name").value = "";
}
