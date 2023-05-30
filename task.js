"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let arr1 = [x1, x2];
  let arr2 = [x1];
  if(a==0) 
  return "Ошибка, a=0 недопустимое значение!";
  var D=b*b-4*a*c;
  var x1, x2;
  if(D>0) {
    x1=(-b+Math.sqrt(D))/(2*a);
    x2=(-b-Math.sqrt(D))/(2*a);
  return arr1;
} else if(D==0) {
  x1=-b/(2*a);
  return arr2;
} else if(D<0) {
  return arr;
}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount-contribution;
  let pay = S*(percent/100/12+(percent/100/12/(((1+percent/100/12)**countMonths)-1)));
  let sum = pay*countMonths;
  return sum;
}
  
