const search = document.getElementById("search");
const matchList = document.getElementById("main-list");

const searchStates = async (searchText) => {
	const res = await fetch("../data/state.json");
	const states = await res.json();
	// console.log(states);

	// Get matches to current text input

	let matches = states.filter((state) => {
		const regex = new RegExp(`^${searchText}`, "gi");
		return state.name.match(regex) || state.abbr.match(regex);
	});

	if (searchText.length === 0) {
		matches = [];
		matchList.innerHTML = "";
	}
	// console.log(searchText.length);

	console.log(matches);

	outputHtml(matches);
};

const outputHtml = (matches) => {
	if (matches.length > 0) {
		const html = matches
			.map(
				(match) => `

			<div class="card card=body mb-1">
				<h4>${match.name}(${match.abbr})<span class="text-primary">${match.capital}</span></h4>
				<small>Lat:${match.lat} / Long:${match.long}</small>
			</div>
		`
			)
			.join("");
		// console.log(html);
		matchList.innerHTML = html;
	}
};

search.addEventListener("input", () => searchStates(search.value));
