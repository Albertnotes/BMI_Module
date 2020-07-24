/**
 * 渲染 BMI 累計紀錄
 * @param {*} average 傳入 bmiStatus['averageCount'] bmi 紀錄次數與平均
 */
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
