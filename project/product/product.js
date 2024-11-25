let productData = JSON.parse(localStorage.getItem('productData')) // 상품목록
let cartData = JSON.parse(localStorage.getItem('cartData')) // 장바구니목록

// 상품목록
productData.forEach(product => {
  console.log(product)
  let template = `<div class="col" data-pcode="${product.pcode}">
    <div class="card" style="width: 18rem;">
      <img src="../images/${product.images}" height="350px" class="card-img-top" alt="...">
      <div class="card-body">
        <img src="../images/today.svg" height="16px">
        <h4 class="card-title">${product.pname}</h5>
        <p class= "card-text" >₩${product.price}</p>
        <a href="#" class="btn btn-outline-success">장바구니 담기🎁</a>
      </div>
    </div>
  </div>`
  document.querySelector('div.row').insertAdjacentHTML("beforeend", template)

})

// 장바구니 담기
document.querySelectorAll('a.btn-outline-success').forEach(item => {
  item.addEventListener('click', e => {
    // 기본기능 차단
    e.preventDefault();
    // {id, pcode, qty}
    let id = localStorage.getItem('logId')
    let pcode = e.target.closest('div.col').getAttribute('data-pcode') //closest : 태그를 가져오겠다
    console.log(item, id, pcode)
    // 장바구니에 id, pcode 이미 있으면 수량증가
    let result = cartData.filter(cart => cart.id == id && cart.pcode == pcode)
    if(result.length){ // 있으면 수량증가
      cartData.forEach(cart => {
        if(cart.id == id && cart.pcode == pcode){
          cart.qty++ // 기존수량에 1 더하기
          return;
        }
      })
    }else{
    // 없으면 추가
    cartData.push({
      id: id,
      pcode: pcode,
      qty: 1
    })
  }

  // 스토리지에 저장
    localStorage.setItem('cartData', JSON.stringify(cartData)) // 저장
      alert("상품을 장바구니에 담았습니다")
    })
  })

  

