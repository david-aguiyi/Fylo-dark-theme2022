function validation() {
	var form = document.getElementById("form");
	var email = document.getElementById("email").value;
	var text = document.getElementById("text");
	var input = document.querySelector("input");
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (email.match(pattern)) {
		form.classList.add("valid");
		form.classList.remove("invalid");
		text.innerHTML = "Your Email Address is Valid.";
		text.style.color = "green";
		input.style.border = "1px solid green";

	} else {
		form.classList.remove("valid");
		form.classList.add("invalid");
		text.innerHTML = "Please Enter a Valid Email Address";
		text.style.color = "red";
		input.style.border = "1px solid red";
	}
	if (email == "") {
		form.classList.remove("valid");
		form.classList.remove("invalid");
		text.innerHTML = "";
		text.style.color = "#00ff00";
	}
}
