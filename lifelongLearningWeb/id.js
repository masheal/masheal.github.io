userName = ["Machine", "Daniel"];

function checkID() {
	var id = location.search.split('id=')[1];
	if (id === undefined)
		return id;
	ar = document.getElementsByTagName("A");
	for(var i = 0; i < ar.length; i++)
		ar[i].href += "?id=" + id;
	document.getElementsByClassName("navbar-brand")[0].href = "./main_page.html?id=" + id;

	headData = document.getElementById("navbarCollapse");
	if (id != undefined) {
		refinedURL = window.location.href.split("?")[0]; 
		headData.children[0].innerHTML = "<li class=\"nav-item active\"><a class=\"nav-link\" href=\"" + refinedURL + "\">Hello! " + userName[id] + "</a></li>"; 
	}
	return id;
}

checkID();