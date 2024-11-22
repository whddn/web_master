const memberData = JSON.parse(localStorage.getItem('memberData'))

document.querySelector('button.submit-btn').addEventListener('click', e => {
  let id = document.querySelector('#uid').value;
  let pw = document.querySelector('#upw').value;

  let loginInfo = memberData.filter(member => member.id == id && member.pw == pw)

  if (loginInfo.length) { // id, pw 동일한 정보가 있다는 의미
    localStorage.setItem('logId', id)
    localStorage.setItem('logName', loginInfo[0].name)
    location.href = '/project/main/main.html'
  } else {
    alert('입력정보를 확인하세요!')
  }
})