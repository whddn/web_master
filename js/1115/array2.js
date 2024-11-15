let numAry = [23, 31, 56, 34, 77, 90]

numAry.forEach(function (num, idx) {
  console.log(idx, '=>', num)
})

// 조건을 만족하는 새로운 배열 생성
let newAry = numAry.filter(function (num) {
  if (num > 50) {
    return true;
  }
  return false;
});

console.log(newAry)

let fruits = ['apple', 'cherry', 'banana', 'melon']
let efruits = fruits.filter(function (elem) {
  console.log(elem)
  if(elem.indexOf('e') != -1){ //문자열에서 문자를 찾을때. indexOf
    return true
  }
  return false
});
console.log(efruits)