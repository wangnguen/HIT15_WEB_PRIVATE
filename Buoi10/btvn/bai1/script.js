const getDate = () => {
	let day = document.querySelector("#date").value.trim();
	let today = document.querySelector(".hint");

	day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

	let value = day;
	if (
		day === "Monday" ||
		day === "Tuesday" ||
		day === "Wednesday" ||
		day === "Thursday" ||
		day === "Friday"
	) {
		value += " is a working day.";
	} else if (day === "Saturday" || day === "Sunday") {
		value += " is a weekend.";
	} else {
		value = "Invalid day.";
	}
	today.textContent = value;
};
