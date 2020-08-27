let initfirst = document.querySelector(".firstone");

initfirst.addEventListener("submit", CountryName);

// function initfirstone() {
// 	console.log(initfirst.value);
// }

function CountryName(e) {
	e.preventDefault();

	var a = document.querySelector(".input-one").value;

	console.log(a);

	fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${a}`, {
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: "GET",
	})
		.then((response) => {
			console.log(response.body);
			return response.json();
			// response.text();
		})
		.then((data) => {
			console.log(data, "data");
		})
		.catch((err) => console.log(err));
}
