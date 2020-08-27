/**
 * CONTROLLER
 */

var getInput = () => ({
	name: document.querySelector(".add__name").value,
	address: document.querySelector(".add__address").value,
	id: document.querySelector(".add__id").value,
});

var addHtmllist = (obj) => {
	console.log(obj);
	var html, newhtml;

	html = `<div class="container">
                <h3 class=" container-1">%name%</h3>
                <h3 class="container-2">%address%</h3>
                <h3 class="container-3">%id%</h3>
			</div>`;

	newhtml = html.replace("%name%", obj.name);
	newhtml = newhtml.replace("%address%", obj.address);
	newhtml = newhtml.replace("%id%", obj.id);

	document.querySelector(".bottom-1").insertAdjacentHTML("beforeend", newhtml);
};

var ctrlAdditem = () => {
	// console.log("clicked");
	var input = getInput();
	// console.log(input);
	// addHtmllist(input);
	console.log(Number(input.id));
	isNaN(input.id);
	if (input.name !== "" && input.address !== "" && !isNaN(Number(input.id))) {
		console.log(input);
		addHtmllist(input);
	}
};

document.querySelector(".submited").addEventListener("click", ctrlAdditem);
