const getDate = () => {
	let month = document.querySelector("#date").value.trim();
	let today = document.querySelector(".hint");

	month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

	let value = month;
	if (
		month === "January" ||
		month === "March" ||
		month === "May" ||
		month === "July" ||
		month === "August" ||
		month === "October" ||
		month === "December"
	) {
		value += " has 31 days";
	} else if (month === "February") {
		value += " has 28 days";
	} else {
		value += " has 30 days";
	}
	today.textContent = value;
};
