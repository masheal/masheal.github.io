var id = location.search.split("id=")[1];

function increaseProgressBar() {
	var d = document.getElementById("progress-bar");
	var tmp = parseInt(d.style.width.substring(0, 2)) + 10;
	if (tmp === 100) {
		window.location = "./web_development.html?pass=1" + (id != undefined ? "&&id=" + id : "");
	}

	d.style.width = tmp + "%";
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
		increaseProgressBar();
		fade();
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