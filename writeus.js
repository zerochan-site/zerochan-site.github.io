function checkWaterBoxes() {
	document.getElementById("answer").style.fontWeight = 'bold';

	if (document.getElementById("email").value.trim() == "" && !document.getElementById("message").value.trim() == "") {
		document.getElementById("answer").textContent = "Please enter the email address to which we will send our reply. This field, like the text field, is required.";
	} else if (document.getElementById("message").value.trim() == "" && !document.getElementById("email").value.trim() == "") {
		document.getElementById("answer").textContent = "Please enter the text of the message you wish to send us. This field, like the email field, is required.";
	} else if (document.getElementById("email").value.trim() == "" && document.getElementById("message").value.trim() == "") {
		document.getElementById("answer").textContent = "Please fill in all the fields; this is absolutely necessary because it appears you are trying to submit empty, non-existent data."
	} else {
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
		document.getElementById("answer").textContent = "You have successfully sent a message, which is currently being delivered. We will send you a reply (provided it is appropriate, of course) to your email address right away.";
	}
}