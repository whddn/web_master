let numAry = [34];
console.log(numAry)
// [24, 44, 34, 83, 22] -> 수정
numAry.pop(34);
numAry.push(24, 44, 34, 83, 22);
console.log(numAry)
// [77, 44, 34, 83, 22]
numAry.shift(24);
numAry.unshift(77);
console.log(numAry)
// [77, 55, 34, 83, 22]
numAry.splice(1, 1, 55) //수정
console.log(numAry)

let dayAry = []; //일요일, 월요일 ~ 토요일
// 수요일, 화요일, 토요일, 금요일, 월요일, 일요일, 목요일
dayAry.splice(0, 0, '수요일')
dayAry.splice(0, 0, '화요일')
dayAry.splice(2, 0, '토요일')
dayAry.splice(2, 0, '금요일')
dayAry.splice(0, 0, '월요일')
dayAry.splice(0, 0, '일요일')
dayAry.splice(4, 0, '목요일')
console.log(dayAry)
console.log(dayAry.indexOf('화요일'))