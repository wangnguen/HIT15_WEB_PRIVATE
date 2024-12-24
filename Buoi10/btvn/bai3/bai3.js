let shape = "";
for (let i = 1; i <= 6; i++) {
	for (let j = 1; j <= 11; j++) {
		if (j <= 6 - i || j >= 6 + i) {
			shape += "  ";
		} else {
			shape += "* ";
		}
	}
	shape += "\n";
}
for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 11; j++) {
		if (j == 6) {
			shape += "* ";
		} else if (i == 3 && j > 6 - i && j < 6 + i) {
			shape += "* ";
		} else {
			shape += "  ";
		}
	}
	shape += "\n";
}
console.log("Cay thong noel");
console.log(shape);
