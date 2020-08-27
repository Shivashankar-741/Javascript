const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Fill Listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Drag functions

function dragStart() {
	console.log("start");
	this.className += "hold";
	setTimeout(() => {
		this.className = invisble;
	}, 0);
}

function dragEnd() {
	// console.log("end");
	this.className = "fill";
}
