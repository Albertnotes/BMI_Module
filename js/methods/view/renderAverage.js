export default function renderAverage(average) {
	const averageDom = document.querySelector('.js-Average');
	const { number, value } = average;
	let str = '';
	if (number > 1) {
		str += `總共測量次數 ${number} 次，平均 BMI 為 ${value}`;
		averageDom.textContent = str;
		return;
	}
	averageDom.textContent = str;
}
