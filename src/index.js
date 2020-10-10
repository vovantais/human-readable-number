module.exports = function toReadable(number) {
	let arr1 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	let arr2 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	let arr3 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	let res = '';
	if (number === 0) return "zero";
	if (number > 0 && number <= 99) {
		if (number > 0 && number <= 9) {
			res += arr1[number - 1];
		}
		if (number >= 10 && number <= 19) {
			res += arr2[number - 10];
		}
		if (number >= 20 && number <= 99) {
			let str = number;
			str = str.toString().split('')
			let firstNumber = str[0];
			let secondNumber = str[1];
			if (number % 10 === 0) {
				res += [arr3[firstNumber - 2]];
			}
			else {
				res += [arr3[firstNumber - 2] + " " + arr1[secondNumber - 1]];
			}
		}
	}
	if (number >= 100 && number <= 999) {
		if (number % 100 === 0) {
			res += arr1[(number / 100) - 1] + ' hundred';
		}
		if (number % 100 <= 9 && number % 100 !== 0) {
			let str = number;
			str = str.toString().split('')
			let firstNumber = str[0];
			res += arr1[firstNumber - 1] + ' hundred ' + arr1[(number % 100) - 1];
		}
		if (number % 100 >= 10 && number % 100 <= 19) {
			let str = number;
			str = str.toString().split('')
			let firstNumber = str[0];
			res += arr1[firstNumber - 1] + ' hundred ' + arr2[(number % 10)];
		}
		if (number % 100 >= 20 && number % 100 <= 99) {
			let str = number;
			str = str.toString().split('')
			let firstNumber = str[0];
			let secondNumber = str[1];
			if (number % 10 === 0) {
				res += arr1[firstNumber - 1] + ' hundred ' + arr3[(secondNumber - 2)];
			}
			else {
				res += arr1[firstNumber - 1] + ' hundred ' + arr3[(secondNumber - 2)] + " " + arr1[(number % 10) - 1];
			}
		}
	}
	return res;
}
