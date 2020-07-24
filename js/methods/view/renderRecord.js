/**
 * 渲染 BMI 紀錄區塊，如未傳入參數則畫面 reset
 * @param {*} item 傳入 statusObj 資料，來源 calculateBMIData 函式
 */
export default function renderRecord(item){
	const recordDom = document.querySelector('.js-record');
	if (item != null) {
		let str = `
            <li class="card border-primary mb-1">
                <div class="card-body text-center">
                    <h4 class="mb-2">${item.text}</h4>
                    <p class="mb-0">BMI ${item.bmi} </p>
                    <p class="mb-0">height：${item.height} cm</p>
                    <p class="mb-0">weight：${item.weight} kg</p>
                </div>
            </li>
            `;
		recordDom.insertAdjacentHTML('afterBegin', str);
		return;
	}
	recordDom.innerHTML = '';
};
