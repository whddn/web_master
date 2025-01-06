// jsreview.js => 그 자체가 <script/> 태그
// HTML, CSS 작성 불가

document.getElementById('insertBtn')
  .addEventListener('click', function (event) {
    /*
      -- 필드
      event.target;
      event.currentTarget;
      -- 메소드
      event.preventDefault();
      event.stopPropagation();
    */
    console.log('해당 이벤트 발생 시 작업');

  }); // 특정 태그의 이벤트 처리 등록

document.getElementById('insertBtn').addEventListener('click', insertTrTag);

function insertTrTag(event) {
  let trTag = document.createElement('tr');

  // 체크박스
  let tdTag = document.createElement('td');
  let inputTag = document.createElement('input');
  inputTag.type = 'checkbox';
  tdTag.append(inputTag);
  trTag.append(tdTag);

  // No.
  tdTag = document.createElement('td');
  tdTag.textContent = getNextNo();
  trTag.append(tdTag)

  // 아이디
  tdTag = document.createElement('td');
  inputTag = document.createElement('input');
  inputTag.type = 'text';
  inputTag.name = 'id';
  tdTag.append(inputTag);
  trTag.append(tdTag);

  // 비밀번호
  tdTag = `<td>
            <input type='password' name='password'>
           </td>`;
  trTag.insertAdjacentHTML("beforeend", tdTag);

  // 구분
  tdTag = `<td>
            <select name="gender">
              <option value="Male" selected>남자</option>
              <option value="Female">여자</option>
            </select>
           </td>`;
  trTag.insertAdjacentHTML("beforeend", tdTag);

  // 이름
  tdTag = document.createElement('td');
  inputTag = document.createElement('input');
  inputTag.type = 'text';
  inputTag.name = 'name';
  tdTag.append(inputTag);
  trTag.append(tdTag);

  // 가입날짜
  tdTag = document.createElement('td');
  inputTag = document.createElement('input');
  inputTag.type = 'date';
  inputTag.name = 'joinDate';
  tdTag.append(inputTag);
  trTag.append(tdTag);

  console.log(trTag); // 단순 변수의 값

  // 기존 DOM에 등록 된 태그에 추가
  document.querySelector('table').append(trTag);

}

function getNextNo() {
  let noList = document.querySelectorAll('tbody > tr >  td:nth-of-type(2)');

  return ('00' + (Number(noList[noList.length - 1].textContent) + 1)).slice(-3);
};