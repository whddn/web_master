// 2024년 11월 12일 숙제
// 우리반에는 5명의 친구. 성적을 입력
// 합산 => 평균, 최고점수, 최저점수 구해서
// 우리반 평균은 ??이고, 최고점은 ??이고, 최저점은 ??이다.

document.querySelector('#inputValue').remove(); //요소 삭제
document.querySelector('#addBtn').remove();
document.querySelector('span').remove();

let sum = 0;
let avg = 0;
let max = 0;
let min = 100;

let num = [];

for (let i = 0; i < 5; i++) {
  let grade = prompt("성적을 입력하세요")
  num.push(grade);
}
if()
avg = sum / num.length;

console.log(`우리반 평균은 ${avg}이고, 최고점은 ${max}이고, 최저점은 ${min}이다`);