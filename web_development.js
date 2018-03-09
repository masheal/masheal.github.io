var currentProcess = 1;
var maxId = 7;
var prefix="location.href='https://www.w3schools.com/";
var suffix="/default.asp'";
var data = ["xml", "html", "css", "js", "jquery", "angular", "bootstrap"];
var pass = location.search.split('pass=')[1];
function enableClick(id) {
	if (id > maxId)
		return;
	var str = "process-" + id.toString();
	var ele = document.getElementById(str);
	if (id != 1)
		ele.childNodes[3].setAttribute("onclick", prefix+data[id-1]+suffix);
	else
		ele.childNodes[3].setAttribute("onclick", "window.location = './info.html'; return false;");
	if (id != 1 || pass == 1)
		ele.childNodes[5].setAttribute("onclick", "enableClick("+(id+1).toString()+")");
	ele.childNodes[3].classList.remove("disabled");
	if (id != 1 || pass == 1)
		ele.childNodes[5].classList.remove("disabled");
	id++;
}


function validationQuiz() {
	var ans = document.getElementsByClassName("correct");
	for (var i = 0; i < ans.length; i++) {
		if (!ans[i].checked) {
			return false;
		}
	}
	return true;
}

function submitQuiz() {
	var res = validationQuiz();
	if (res) {
		alert("Congratulation! You pass the quiz!");
		fade();
		enableClick(2);
	} else {
		alert("You fail. Please try again.");
		fade();
	}
}


function fade() {
	$(function () {
   		$('.modal').modal('toggle');
	});

}