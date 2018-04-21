var allPerson = [{email: "shengma2019@u.northwestern.edu", password: "123"}, {email: "yifeideng2018@u.northwestern.edu", password: "456"}];

function validateAndForward() {
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	for (var i = 0; i < allPerson.length; i++) {
		if (allPerson[i].email === email && allPerson[i].password === password) {
			window.location.href = "./user_profile.html?id=" + i.toString();
			break;
		}
	}
	if (i >= allPerson.length)
		alert("Invalid email or password!");
	document.getElementById("inputEmail").value = "";
	document.getElementById("inputPassword").value = "";
	return false;
}