const getNumber = () => {
	let num = document.querySelector("#number").value;
	let arr = num.split(",");
	let result = document.querySelector(".hint");
	let maxx = -1e9,
		minn = 1e9,
		count = 0;
	for (let idx of arr) {
		maxx = Math.max(maxx, parseInt(idx));
		minn = Math.min(minn, parseInt(idx));
		if (parseInt(idx) % 2 === 0) {
			++count;
		}
	}
	const value =
		"Số lớn nhất: " + maxx + "\nSố nhỏ nhất: " + minn + "\nSố chẵn: " + count;
	result.textContent = value;
};
