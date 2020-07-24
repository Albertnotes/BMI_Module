export const userControl = document.querySelector('.js-control');
export const bmiStatus = {
	overThin: {
		statusText: '體重過輕',
		maxValue: 18.5,
	},
	normal: {
		statusText: '正常',
		minValue: 18.5,
		maxValue: 24,
	},
	heavy: {
		statusText: '過重',
		minValue: 24,
		maxValue: 27,
	},
	lightFat: {
		statusText: '輕度肥胖',
		minValue: 27,
		maxValue: 30,
	},
	middleFat: {
		statusText: '中度肥胖',
		minValue: 30,
		maxValue: 35,
	},
	largeFat: {
		statusText: '重度肥胖',
		minValue: 35,
	},
	averageCount: {
		number: 0,
		value: 0,
	},
};
