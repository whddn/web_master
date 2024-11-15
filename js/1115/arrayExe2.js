let dupAry = ['홍길동', '김민혁', '장동숙', '홍길동', '홍길도', '김민']
let newAry = []

// newAry = dupAry.filter(function (elem, idx) {
//   console.log(dupAry.indexOf(elem));
//   if(dupAry.indexOf(elem) == idx) {
//     return true
//   }
//   return false
// })
// console.log(newAry) //['홍길동', '김민혁', '장동숙', '홍길도', '김민'] 중복값 제거

// let tempAry = [];
newAry = dupAry.filter(function (elem, idx, ary) {
  //찾을 배열과 값
  if (ary.indexOf(elem) == idx) { // 0 == 3 <<<이런 모양
    // tempAry.push(elem)

    return true;
  }
  return false
})

console.log(newAry) //['홍길동', '김민혁', '장동숙', '홍길도', '김민'] 중복값 제거
