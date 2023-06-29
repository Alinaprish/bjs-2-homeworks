"use strict"
function solveEquation(a, b, c) {
  let x1, x2;
  let arr = [];
  //let arr1 = [x1, x2];
  //let arr2 = [x1];
  if(a==0) {
    return "Ошибка, a=0 недопустимое значение!";
  }
  let D=b*b-4*a*c;
  if(D>0) {
    x1=(-b+Math.sqrt(D))/(2*a);
    x2=(-b-Math.sqrt(D))/(2*a);
    arr.push(x1, x2);
  return arr;
} else if(D==0) {
  x1=-b/(2*a);
  arr.push(x1);
  return arr;
}
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount-contribution;
  let P = percent/100/12;
  let pay = S*(P+(P/(((1+P)**countMonths)-1)));
  let sum = (pay*countMonths).toFixed(2);
  let sum2 = Number.parseFloat(sum);
  return sum2
}
   
