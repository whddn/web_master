function makeRow(boardInfo = {
  file,
  productname,
  review,
  name,
  date
}) {
  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) {
    document.querySelector('input[name="boardFile"]').value = this.children[1].innerHTML;
    document.querySelector('select[name="boardProductname"]').value = this.children[2].innerHTML;
    document.querySelector('input[name="boardReview"]').value = this.children[3].innerHTML;
    document.querySelector('input[name="boardName"]').value = this.children[4].innerHTML;
    document.querySelector('input[name="boardDate"]').value = this.children[5].innerHTML;
  }, false)
  // let td // = document.createElement('td')
  // let btn = document.createElement('button')



  // td.appendChild(btn)
  // tr.appendChild(td)

  for (let prop in boardInfo) {
    let td = document.createElement('td');
    if (prop == 'file') { // <img src="" height="100px">
      let img = document.createElement('img');
      img.src = '../images/' + boardInfo[prop];
      img.setAttribute('width', '200px');
      td.appendChild(img);
    } else {
      let ffile = boardInfo[prop]
      td.innerHTML = ffile;
    }
    tr.appendChild(td);
  }
  return tr;
}

// data.js
boardList.forEach((board) => {
  document.querySelector('#list').appendChild(makeRow(board))
})

let selectFileName = '';
let ffile = document.querySelector('input[name="boardFile"]').addEventListener('change', e => {
  console.log(e.target.files[0].name)
  selectFileName = e.target.files[0].name;
});


// 추가 버튼에 이벤트
document.querySelector('button.btn.btn-outline-success').addEventListener('click', (e) => {
  // let ffile = document.querySelector('input[name="boardFile"]');
  // console.dir(ffile)
  let fproductname = document.querySelector('select[name="boardProductname"]').value;
  let freview = document.querySelector('input[name="boardReview"]').value;
  let fname = document.querySelector('input[name="boardName"]').value;
  let fdate = document.querySelector('input[name="boardDate"]').value;

  let param = {
    file: selectFileName,
    productname: fproductname,
    review: freview,
    name: fname,
    date: fdate
  }

  let tr = makeRow(param)
  document.querySelector('#list').appendChild(tr);

  //입력값 초기화
  document.querySelector('input[name="boardFile"]').value = '';
  document.querySelector('select[name="boardProductname"]').value = '';
  document.querySelector('input[name="boardReview"]').value = '';
  document.querySelector('input[name="boardName"]').value = '';
  document.querySelector('input[name="boardDate"]').value = '';
});




// // 정보저장버튼 클릭하면 친구의 정보를 localStorage에 저장
// document.querySelector('button.btn-info').addEventListener('click', e => {
//   let ary = [];
//   document.querySelectorAll('#list tr').forEach(item => {
//     console.log(item)
//     let name = item.children[1].innerHTML; //이름
//     let phone = item.children[2].innerHTML; //연락처
//     let birth = item.children[3].innerHTML; //생일
//     let btype = item.children[4].innerHTML; //생일
//     let obj = {
//       name,
//       phone,
//       birth,
//       btype
//     }
//     ary.push(obj)
//   });
//   console.log(ary)
//   let json = JSON.stringify(ary)
//   localStorage.setItem('boardList', json)
// })