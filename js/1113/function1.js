let numAry1 = [50, 60, 40, 70, 20]
let numAry2 = [55, 63, 42, 79, 27]

// console.log(`sumAry(numAry1)의 합계 => ${sumAry(numAry1)}`)
// console.log(`sumAry(numAry2)의 합계 => ${sumAry(numAry2)}`)
// console.log(sum(sumAry([10, 20, 30]), sumAry([10, 20])))


// 매개값을 배열로 받아서 배열요소의 합
function sumAry(anonymousAry = []) {
  let sum = 0;
  for (let i = 0; i < anonymousAry.length; i++) {
    sum += anonymousAry[i];
  }
  return sum;
}

// 별개의 함수
function sum(param1, param2) {
  let result = param1 + param2
  return result;
}


//숙제
//배열을 매개값으로 받아서 요소중에서 제일큰값을 구하는 함수
// getMaxvalue(배열)

//console.log(getMaxvalue(numAry1)); => 70

function getMaxvalue(param) {
  let max = 0;
  for (let i = 0; i < param.length; i++) {
    if (max < param[i]) {
      max = param[i]
    }
  }
  return max;
}
console.log(getMaxvalue(numAry2));

// Math.random() 활용해서 11 ~ 20 사이의 임의의 수 생성
// 배열의 크기가 [5]개인 배열에 저장
function makeNumberFnc() {
  // 1. Math.random() => 5번
  let randomAry = []
  for (let i = 1; i<=5; i++){
    let temp = parseInt(Math.random() * 10) + 11; // 11 <= ? < 21
    randomAry.push(temp);
  }
  console.log(randomAry);
  // let sum = sumAry(randomAry);
  // 결과값 반환
  return sumAry(randomAry);
}
let result = makeNumberFnc();
console.log(`임의의 배열의 합은 ${result} 입니다`)
// 결과: 임의의 배열의 합은 ?? 입니다