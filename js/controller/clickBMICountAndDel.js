import { userControl } from '../variables/utility.js';
import deleteRecord from '../view/deleteRecord.js';
import calculateBMIData from '../models/calculateBMIData.js';

/**
 * 監聽計算按紐與刪除按鈕
 */
export default function clickBMICountAndDel() {
	userControl.addEventListener('click', (e) => {
		const keyWeight = document.querySelector('#weight').value;
		const keyHeight = document.querySelector('#height').value;
		e.target.nodeName === 'INPUT'
			? calculateBMIData(keyHeight, keyWeight)
			: deleteRecord();
	});
}
