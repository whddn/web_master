// 1. 태어난 년도 입력 -> 나이계산
// 2. 직사각형 너비 계산 -> 가로길이, 세로길이 입력
// 3. 최고값, 최소값 -> 입력숫자는 3개

let question = prompt("문제번호를 입력하세요")

//1번 코드
if(question == 1 ){
  let age = prompt("년도를 입력하세요 :")
  const today = 2024;
  if(age > 0){
    alert( today-age + " 살입니다 ")
  }else{
    alert("정수를 입력해주세요")
  }
}else if (question == 2) {
  //2번 코드
  let num1 = prompt("가로길이를 입력하세요")
  let num2 = prompt("세로길이를 입력하세요")
  result = num1 * num2
  alert("직사각형의 넓이는 " + result + "입니다.")
}else{
  //3번 코드
  let num3 = prompt("숫자를 입력하세요")
  let num4 = prompt("숫자를 입력하세요")
  let num5 = prompt("숫자를 입력하세요")
  if(num3 > num4 && num5){
    alert("최고값은 " + num3 + " 입니다")
  }else if(num3 < num4 && num5){
    alert("최소값은 " + num3 + " 입니다")
  }else if(num4 > num3 && num5){
    alert("최고값은 " + num4 + " 입니다")
  }else if(num4 < num3 && num5){
    alert("최소값은 " + num3 + " 입니다")
  }else if(num5 > num3 && num4){
    alert("최고값은 " + num5 + " 입니다")
  }else(num5 < num3 && num4)
    alert("최소값은 " + num5 + " 입니다")
  
}