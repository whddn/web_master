let Fnc = (e) => {
  console.log(e.target.innerHTML)
  let v1 = document.getElementById('num1').value;
  let v2 = document.querySelector('#num2').value;
  if(!v1 || !v2){
    alert('값을 입력하세요');
    return;
  }
  let result;
  if (e.target.innerHTML == '더하기') {
    result = parseInt(v1) + parseInt(v2);
  } else if (e.target.innerHTML == '빼기') {
    result = parseInt(v1) - parseInt(v2);
  } else if (e.target.innerHTML == '곱하기') {
    result = parseInt(v1) * parseInt(v2);
  } else if (e.target.innerHTML == '나누기') {
    result = parseInt(v1) / parseInt(v2);
  }
  document.querySelector('#result').value = result;
}
document.querySelector('#add').addEventListener('click', Fnc); // 이벤트핸들러
document.querySelector('#sub').addEventListener('click', Fnc);
document.querySelector('#multy').addEventListener('click', Fnc);
document.querySelector('#divid').addEventListener('click', Fnc);