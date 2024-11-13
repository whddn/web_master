// 2024년 11월 12일 숙제
// 우리반에는 5명의 친구. 성적을 입력
// 합산 => 평균, 최고점수, 최저점수 구해서
// 우리반 평균은 ??이고, 최고점은 ??이고, 최저점은 ??이다.

document.querySelector('#inputValue').remove(); //요소 삭제
document.querySelector('#addBtn').remove();
document.querySelector('span').remove();

let num = [];

for (let i = 1; i <= 5; i++) {
  let grade = parseInt(prompt("성적을 입력하세요"))
  num.push(grade);
}

let sum = 0, max = 0 ,min = num[0], avg = 0;

// 배열갯수만큼 반복
for (let i = 0; i < num.length; i++) {
  sum += num[i];
  if (max < num[i]) { //최대값
    max = num[i];
  }
  if (min > num[i]) { // 최소값
    min = num[i];
  }
}
avg = sum / num.length;
avg = parseInt(avg);

console.log(`우리반 평균은 ${avg}이고, 최고점은 ${max}이고, 최저점은 ${min}이다`);