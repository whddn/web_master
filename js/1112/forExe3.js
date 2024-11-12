// 점수를 입력 * 5번
// 점수의 합(sum), 평균(avg) 저장
// 큰값(max), 최소값(min) 저장

// 합계는 ?? 이고, 평균은 ??이고, 최고점수는 ?? 입니다

let sum = 0;
let avg = 0;
let max = 0;
let min = 10000000000000000000000;

for (let i = 1; i <= 5; i++) {
  // 블럭안에 있는 코드가 5번 반복실행
  let num = prompt("점수을 입력하세요");
  sum = sum + parseInt(num); //누적
  // 조건문: max < num
  if (max < num) {
    max = num;
  }
  if (min > num) {
    min = num;
  }
}
avg = sum / 5;
console.log(`합계는 ${sum}이고, 평균은 ${avg}이고, 최고점수는 ${max}, 최저점수는 ${min}입니다.`)