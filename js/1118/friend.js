// this => 함수: window객체, 이벤트핸들러: 이벤트대상, object(객체): 객체자신
function makeRow(friendInfo = {name,phone,birth, bloodType}) {
  //이름, 연락처, 생일 => tr 생성한 후 tr 반환
  let tr = document.createElement('tr');
  tr.addEventListener('click', function(e){ // this
    document.querySelector('input[name="friendName"]').value = this.children[0].innerHTML;
    document.querySelector('input[name="friendPhone"]').value = this.children[1].innerHTML;
    document.querySelector('input[name="friendBirth"]').value = this.children[2].innerHTML;
    document.querySelector('select[name="friendBloodType"]').value = this.children[3].innerHTML;
  })
  for (let prop in friendInfo) {
    let td = document.createElement('td');
    let fname = friendInfo[prop]
    td.innerHTML = fname; //<td>홍길동</td>
    tr.appendChild(td);
  }
    let td = document.createElement('td')
    let btn = document.createElement('button')
    btn.innerHTML = "삭제"
    btn.setAttribute('class', 'btn btn-danger'); // 태그에 attribute를 추가
    btn.addEventListener('click', (e) => { // 삭제버튼에 클릭이벤트 등록
      e.target.parentElement.parentElement.remove();
    })
    td.appendChild(btn)
    tr.appendChild(td)
  return tr;
}

// data.js
console.log(friendList)
// 배열을 활용해서 친구목록 출력
friendList.forEach((friend) => {
  document.querySelector('#list').appendChild(makeRow(friend))
})


// 추가 버튼에 이벤트
document.querySelector('button.btn.btn-primary').addEventListener('click', (e) => {
  
  let fname = document.querySelector('input[name="friendName"]').value;
  let fphone = document.querySelector('input[name="friendPhone"]').value;
  let fbirth = document.querySelector('input[name="friendBirth"]').value;
  let ftype = document.querySelector('select[name="friendBloodType"]').value;
  if(!fname || !fphone || !fbirth || !ftype){
    alert('필수값을 입력하세요')
    return;
  }
  let param = {name: fname, phone: fphone, birth: fbirth, bloodType: ftype}

  let tr = makeRow(param)
  document.querySelector('#list').appendChild(tr);
  
  //입력값 초기화
  document.querySelector('input[name="friendName"]').value = '';
  document.querySelector('input[name="friendPhone"]').value = '';
  document.querySelector('input[name="friendBirth"]').value = '';
  document.querySelector('input[name="friendBloodType"]').value = '';
});

// 수정버튼에 이벤트를 등록함
