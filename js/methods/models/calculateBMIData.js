import * as utility from '../../variables/utility.js';
import renderRecord from '../view/renderRecord.js';
import renderAverage from '../view/renderAverage.js';

/**
 * 計算
 * @param {*} h 使用者身高
 * @param {*} w 使用者體重
 */
export default function calculateBMIData(h, w) {
	const bmi = Number((w / (h / 100) ** 2).toFixed(1));
	const statusObj = {
		text: '',
		bmi,
		height: h,
		weight: w,
	};

	utility['bmiStatus']['averageCount']['number'] += 1;
	const { number, value } = utility['bmiStatus']['averageCount'];
	number === 1
		? (utility['bmiStatus']['averageCount']['value'] = bmi)
		: (utility['bmiStatus']['averageCount']['value'] = (
				(value * (number - 1) + bmi) /
				number
		  ).toFixed(1));

	Object.keys(utility.bmiStatus).forEach((el) => {
		const currentBmi = utility.bmiStatus[el];
		if (currentBmi['maxValue'] > bmi && bmi >= currentBmi['minValue'])
			statusObj['text'] = currentBmi['statusText'];
		if (!currentBmi['minValue'] && currentBmi['maxValue'] > bmi)
			statusObj['text'] = currentBmi['statusText'];
		if (!currentBmi['maxValue'] && currentBmi['minValue'] <= bmi)
			statusObj['text'] = currentBmi['statusText'];
	});
	renderRecord(statusObj);
	renderAverage(utility['bmiStatus']['averageCount']);
}
