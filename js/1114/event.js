//화면 요소에 이벤트 등록하기
console.dir(document)

document.querySelector('#showBtn').addEventListener('click', function () {
  console.log('버튼 클릭!')
  document.querySelector('#desc').style.display = 'block';
});

//숨기기 기능구현
document.querySelector('#hideBtn').onclick = function () {
  document.querySelector('#desc').style.display = 'none';
}

// 이미지에 이벤트 등록
document.querySelector('img').addEventListener('mouseover', function () {
  document.querySelector('#desc').style.display = 'block';
})

document.querySelector('img').addEventListener('mouseout', function () {
  document.querySelector('#desc').style.display = 'none';
})

// 이미지 바꾸기
let imgAry = ['이미지2.jpg', '이미지3.jpg', '이미지4.jpg', '이미지5.jpg']
let idx = 0;
document.querySelector('#changeImg').onclick = function(){
  if(idx > 3){
    idx = 0;
  }
  let imageName = imgAry[idx++];
  document.querySelector('img').src = 'img/' + imageName;
}