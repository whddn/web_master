document.querySelector('#inputValue').remove(); //요소 삭제
document.querySelector('#addBtn').remove();
document.querySelector('span').remove();

let n = prompt('아무값이나 입력하세요')
let numAry = [22, 45, 18, 41, 98, 55];
// let max = 0;
let k = 0;

for (let i = 0; i < numAry.length; i++) {
  // if(i % 2 == 0 || numAry[i] > 40){
  // if (max < numAry[i]) {
  //   console.log(numAry[i]);
  //   max = numAry[i]
  // }
  if(parseInt(n) < numAry[i]){
    k += numAry[i];
  }
}
console.log(k);