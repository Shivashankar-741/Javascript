const requiredEndpoints = ["date", "math", "year"];
requiredEndpoints.map((endPoint) => {
	document.querySelector(`.${endPoint}`).addEventListener("input", callBackend.bind(this, endPoint));
});

function callBackend(type, value) {
	if (value.target.value !== "") {
		fetch(`http://numbersapi.com/${value.target.value}/${type}`)
			.then((response) => response.text())
			.then((data) => {
				console.log(data, "data");
				document.querySelector(`.${type}-msg`).innerText = data;
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		document.querySelector(`.${type}-msg`).innerText = "";
	}
}
