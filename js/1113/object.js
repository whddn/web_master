//객 체

let ary = [];
let obj = {
  name: '홍길동',
  age: 20,
  height: 169.4
};
console.log(`이름: ${obj.name}, 나이는 ${obj['age']}`);
obj.age = 21;
console.log(`이름: ${obj.name}, 나이는 ${obj['age']}`);
// object타입에서 속성을 반환 반복문  for .. in 반복문.
for (let prop in obj) {
  console.log(`prop => ${prop}, 값 => ${obj[prop]}`);
}

// 홍길동, 김민식, 최홍식
ary.push(obj); // 홍길동의 정보를 배열추가
ary.push({
  name: '김민식',
  age: 25,
  height: 190
}); //김민식의 정보를 배열추가
ary.push({
  name: '최홍식',
  age: 28,
  height: 160
}); //최홍식의 정보를 배열추가

let searchName = '홍길동';
let searchAge = 25;

// 평균키 =>
let sum = 0;
for (let i = 0; i<ary.length; i++){
  sum += ary[i].height
}
avg = sum /ary.length;
console.log(`평균키는: ${parseInt(avg)}입니다`); //소수점을 없애고 싶을때
console.log(Math.round(sum/ary.length*100)/100) //소수점을 나타내고 싶을때

// 홍길동의 나이
for (let i = 0; i < ary.length; i++) {
  if (ary[i].name == searchName) {
    console.log(`이름은 ${ary[i]['name']}, 나이는 ${ary[i].age}, 키는 ${ary[i]['height']}`);
  }
  if (ary[i].age > searchAge){
    console.log(`이름은 ${ary[i]['name']}, 나이는 ${ary[i].age}, 키는 ${ary[i]['height']}`);
    
  }
}