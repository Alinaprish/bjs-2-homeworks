function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i of arr) {
    if (max < i) {
      max = i;
    }
    if (min > i) {
      min = i;
    }
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum;

  let avg = sum / arr.length;
}
}
return { min: min, max: max, avg: avg };


function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i of arr) {
    if (max < i) {
      max = i;
    }
    if (min > i) {
      min = i;
    }
  }
  return {max, min};
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++){
    if (i / 2 == 0){
      sumEvenElement++
    }
    else{
      sumOddElement++
    }
    return sumEvenElement - sumOddElement;
  }
}



function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i / 2 == 0) {
      sumEvenElement += i;
      countEvenElement++
    }
    return countEvenElement / sumEvenElement
  }
}

function makeWork (arrOfArr,...func) {
  let maxWorkenResult = Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    function func(...i) {
      return i;
    }
    if (i > maxWorkenResult) {
      maxWorkenResult += i;
    }
}

}
