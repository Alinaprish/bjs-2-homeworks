function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);

	let sum = arr.reduce(function(currentSum, currentNumber) {
		return currentSum + currentNumber;
	}, 0)
	let avg1 = (sum / arr.length).toFixed(2);
	let avg = Number.parseFloat(avg1);
	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = arr[0];
	let max = arr[0];
	if (arr.length == 0) {
		return 0;}
	for (let element of arr) {
		if (max < element) {
			max = element;
		}
		if (min > element) {
			min = element;
		}
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}



function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
  if (arr.length == 0) {
    return 0;
  }
	for (let element of arr) {
		if (element % 2 == 0) {
			sumEvenElement += element;
			countEvenElement++
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkenResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const a = func(...arrOfArr[i]);
		if (a > maxWorkenResult) {
			maxWorkenResult = a;
		}
	}
	return maxWorkenResult;
}