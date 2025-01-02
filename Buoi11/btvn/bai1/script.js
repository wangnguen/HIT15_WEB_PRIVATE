const button = document.querySelector(".content");
const noti = document.querySelector(".noti");

const calc = () => {
	const weight = document.querySelector("#input1").value;
	const height = document.querySelector("#input2").value;

	// Chuyển đổi giá trị và kiểm tra đầu vào
	const valueWeight = parseFloat(weight);
	const valueHeight = parseFloat(height);

	if (
		isNaN(valueWeight) ||
		isNaN(valueHeight) ||
		valueWeight <= 0 ||
		valueHeight <= 0
	) {
		noti.innerHTML = `Bạn vui lòng nhập chính xác ^^`;
		return;
	}
	const bmi = valueWeight / Math.pow(valueHeight, 2);
	const roundedBMI = bmi.toFixed(2);

	if (bmi < 18.5) {
		noti.innerHTML = `BMI: ${roundedBMI} - Thiếu cân`;
	} else if (bmi >= 18.5 && bmi < 24.9) {
		noti.innerHTML = `BMI: ${roundedBMI} - Bình thường`;
	} else if (bmi >= 25 && bmi < 29.9) {
		noti.innerHTML = `BMI: ${roundedBMI} - Béo phì cấp độ 1`;
	} else if (bmi >= 30 && bmi < 34.9) {
		noti.innerHTML = `BMI: ${roundedBMI} - Béo phì cấp độ 2`;
	} else if (bmi >= 35) {
		noti.innerHTML = `BMI: ${roundedBMI} - Béo phì cấp độ 3 (Nguy hiểm)`;
	}
};

button.addEventListener("click", calc);
