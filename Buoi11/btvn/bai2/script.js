const checkPrime = (n) => {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i == 0) return false;
	}
	return n > 1;
};
const calc = () => {
	const n = parseInt(document.querySelector("input").value);
	const table = document.querySelector(".table");
	table.textContent = "";
	const even = document.querySelector("#even");
	const odd = document.querySelector("#odd");
	const prime = document.querySelector("#prime");

	let countEven = 0,
		countOdd = 0,
		countPrime = 0;
	for (let i = 0; i <= n; i++) {
		const div = document.createElement("div");
		div.textContent = i;
		if (i % 2 === 0 && checkPrime(i)) {
			++countEven;
			++countPrime;
			div.classList.add("prime_number");
		} else if (i % 2 !== 0 && checkPrime(i)) {
			++countOdd;
			++countPrime;
			div.classList.add("prime_number");
		} else if (i % 2 === 0) {
			++countEven;
			div.classList.add("even_number");
		} else if (i % 2 !== 0) {
			++countOdd;
			div.classList.add("odd_number");
		} else {
			++countPrime;
			div.classList.add("prime_number");
		}
		table.appendChild(div);

		even.textContent = countEven;
		odd.textContent = countOdd;
		prime.textContent = countPrime;
	}
};
const button = document.querySelector("button");
button.addEventListener("click", calc);
