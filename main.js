"use strict"
const BUTTON_IDS = "0123456789()+-*/b";
const resultElement = document.getElementById("result");
const equationElement = document.getElementById("equation");

const isValidEquation = (str) => {
	return str ? /^[\d\+\-*/() ]*\d$/.test(str) : true;
};

const getResult = () => {
	let str = equationElement.value;
	return isValidEquation(str) ? eval(str) || 0 : resultElement.innerHTML;
}

const updateResult = () => {resultElement.innerHTML = getResult();};

for (let i = 0; i < BUTTON_IDS.length; i++) {	
	document.getElementById(BUTTON_IDS[i]).onclick = () => {
		if (BUTTON_IDS[i] == 'b') {
			equationElement.value = equationElement.value.substring(0, equationElement.value.length - 1);
		} else {
			equationElement.value += BUTTON_IDS[i];
		}
		updateResult();
	};;
}

equationElement.oninput = updateResult;


