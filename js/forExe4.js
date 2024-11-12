let fnames = []; //배열 변수 선언
// fnames[0] = '홍길동';
// fnames[1] = '김민식';
// fnames[2] = '박창성';
// //push
// fnames.push('박지희');
// 배열의 크기를 반환: length.


function addFriendFnc() {
  let fname = document.querySelector('#inputValue').value;
  console.log('친구이름 ', fname) //sum = sum + i
  // document.querySelector('#show').innerHTML = document.querySelector('#show').innerHTML + `<p>${fname}</p>`
  fnames.push(`<p>${fname}</p>`)

  //출력
  let str = '';
  for(let i=0; i<fnames.length; i++){
    str += fnames[i];
  }
  document.querySelector('#show').innerHTML = str;
  // console.log(fname[1]);
}