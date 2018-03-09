var allPerson = [{firstName: "Sheng",lastName: "Ma", userName: "Machine", email: "shengma2019@u.northwestern.edu", address: "1212 Church St.", address2: "Mudd Library", image: "image/masheng.png"}, 
{firstName: "Yifei",lastName: "Deng", userName: "Daniel", email: "yifeideng2018@u.northwestern.edu", address: "1100 Church St.", address2: "Mudd Library", image: "image/yifeideng.jpg"}];
var allPersonHistory = [
	[
		{
			Type: "Web Development",
			Course: "XML",
			Name: "XML Element"

		},
		{
			Type: "Web Development",
			Course: "XML",
			Name: "XML Syntax"

		},
		{
			Type: "Web Development",
			Course: "XML",
			Name: "XML Tree"

		},
		{
			Type: "Web Development",
			Course: "XML",
			Name: "XML How to use"

		},				
		{
			Type: "Web Development",
			Course: "XML",
			Name: "XML Introduction"
		}

	],
	[
		{
			Type: "Web Development",
			Course: "Javascript",
			Name: "Javascript Variable"

		},
		{
			Type: "Web Development",
			Course: "Javascript",
			Name: "Javascript Comments"

		},
		{
			Type: "Web Development",
			Course: "Javascript",
			Name: "Javascript Syntax"

		},
		{
			Type: "Web Development",
			Course: "Javascript",
			Name: "Javascript Statements"

		},				
		{
			Type: "Web Development",
			Course: "Javascript",
			Name: "Javascript Output"

		},

	]
]





var historyName = "./allPersonHistory.json";
var currentNav = document.getElementsByClassName("first-one")[0];
var id = location.search.split('id=')[1];
var switchButton = 0;
var personalInformation = document.getElementById("personal-information");
var personalHistory = document.getElementById("personal-history");
var setPerson = (function(){
	var person;
	function renderInformation() {
		document.getElementById("firstName").value = person.firstName == undefined ? "" : person.firstName;
		document.getElementById("lastName").value = person.lastName == undefined ? "" : person.lastName;
		document.getElementById("userName").value = person.userName == undefined ? "" : person.userName;
		document.getElementById("email").value = person.email == undefined ? "" : person.email;
		document.getElementById("address").value = person.address == undefined ? "" : person.address;
		document.getElementById("address2").value = person.address2 == undefined ? "" : person.address2;
		document.getElementById("person-image").src = person.image;
	}
	function renderHistory() {
		var show = "";
		var data = allPersonHistory[id];
		for (var i = 0; i < data.length; i++) {
			show = show + "<tr><td>" + data[i].Type + "</td><td>" + data[i].Course + "</td><td>" + data[i].Name + "</td></tr>";
		}
		document.getElementById("pivot").innerHTML = show;
	}
	return function(p) {
		person = p;
		renderInformation();
		renderHistory();
	};
})();

function loadJSON(fileName, callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', fileName, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function changeNav(nav) {
	currentNav.classList.remove("active");
	nav.classList.add("active");
	currentNav = nav;
	switchGo(nav.innerHTML);
}

function switchGo(name) {
	if (name === 'History') {
		personalInformation.style.display = 'none';
		personalHistory.style.display = 'block';
		switchButton = 1;
	} else if (name === 'Profile') {
		personalInformation.style.display = 'block';
		personalHistory.style.display = 'none';
		switchButton = 0;
	}
}

function init() {
	setPerson(allPerson[id]);
    
}

