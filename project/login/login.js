let memberData = JSON.parse(localStorage.getItem('memberData'))

function resetClass(element, classname){
  element.classList.remove(classname);
}
document.getElementsByClassName("show-signup")[0].addEventListener("click",function(){
  let form = document.getElementsByClassName("form")[0];
  resetClass(form, "signin");
  resetClass(form, "reset");
  form.classList.add("signup");
  document.getElementById("submit-btn").innerText = "로그인";
});
document.getElementsByClassName("show-signin")[0].addEventListener("click",function(){
  let form = document.getElementsByClassName("form")[0];
  resetClass(form, "signup");
  resetClass(form, "reset");
  form.classList.add("signin");
  document.getElementById("submit-btn").innerText = "로그인";
});

document.querySelector("button.submit-btn").addEventListener('click', e => {
  let id = document.querySelector('#uid').value;
  let pw = document.querySelector('#upw').value;
  let pwcheck = document.querySelector('#upwcheck').value;

  let loginInfo = memberData.filter(member => member.id == id && member.pw == pw && pw == pwcheck)
  
  if (loginInfo.length) { // id, pw 동일한 정보가 있다는 의미
    localStorage.setItem('logId', id)
    localStorage.setItem('logName', loginInfo[0].name)
    location.href = '/project/main/main.html'
    
  } else if(pw != pwcheck ) {
    alert('비밀번호가 틀립니다! 다시 확인하세요')
  }else{
    alert('입력정보를 확인하세요!')
  }
})

document.querySelector("button.submit-btn1").addEventListener('click', e=>{
   let id1 = document.querySelector('#uid1').value;
   let pw1 = document.querySelector('#upw1').value;
   let pwcheck1 = document.querySelector('#upwcheck1').value;
  if(pw1 != pwcheck1){
    alert('비밀번호가 틀립니다! 다시 확인하세요')
  }else{
    alert('회원가입 되셨습니다')
    location.href = '/project/main/main.html'
  }

})
