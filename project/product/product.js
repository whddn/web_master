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
document.querySelector('.btn.btn-outline-success').addEventListener('click', e =>{
  alert("상품을 장바구니에 담았습니다")
  
})

