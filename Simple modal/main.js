var check = document.getElementById("modalBtn");
var modal = document.getElementById("simpleModal");
var closeBtn = document.querySelector(".closeBtn");

check.addEventListener("click", openUI);
closeBtn.addEventListener("click", closeUI);
window.addEventListener("click", outCloseUI);

function openUI() {
	modal.style.display = "block";
}

function closeUI() {
	modal.style.display = "none";
}

function outCloseUI(e) {
	if (e.target == modal) {
		modal.style.display = "non";
	}
}
