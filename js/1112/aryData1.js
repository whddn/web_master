document.querySelector('#inputValue').remove(); //요소 삭제
document.querySelector('#addBtn').remove();
document.querySelector('span').remove();

let numAry = [23, 45, 34, 78, 51, 98];
let sum = 0;
for (let i=0; i<numAry.length; i++){
  
  console.log(`${i} 위치=> ${numAry[i]}`);
  // if (numAry[i] >  50) //배열의 값이 50보다 크면 누적
  if(numAry[i] % 2 == 0 ){ //짝수를 누적
    sum += numAry[i];
  }
}

console.log(`numAry의 각 요소의 합=> ${sum}`);