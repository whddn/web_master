// if ... else 문제풀기

let number1 = 30;

// 사용자 값을 입력하도록 "숫자를 입력하세요(0~100) "
// 변수선언 후 저장

// 35는 30보다 큽니다.
// 25는 30보다 작습니다
//0~100 사이의 값ㅡㅡ

let inputValue = prompt("숫자를 입력하세요(0~100)");


if(inputValue >100  || inputValue <0){
  alert("0 ~ 100 사이의 값을 입력하세요");
}else if (inputValue > number1){
  alert(inputValue + "는 " + number1 + "보다 크빈다");
}
  else if(inputValue == number1){
  alert(inputValue + "는 " + number1 + "은 같습니다." );
}else {
  alert(inputvalue + "는 " + number1 + "보다 작습니다." );
};