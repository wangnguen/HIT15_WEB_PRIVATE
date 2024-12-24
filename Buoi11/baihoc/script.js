// method 1
const titles = document.querySelectorAll("h1");
titles[3].setAttribute("class", "title");
titles[3].setAttribute("id", "fourth-title");
//another way to setting an attribute
titles[3].className = "title";
titles[3].id = "fourth-title";
titles[3].textContent = "Fourth Title"; // add text
// them class
titles[4].classList.add("title", "header-title");
titles[4].classList.remove("title", "header-title");
// style
titles.forEach((title, i) => {
	title.style.fontSize = "24px"; // all titles will have 24px font size
	if (i % 2 === 0) {
		title.style.color = "green";
	} else {
		title.style.color = "red";
	}
});
