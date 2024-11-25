let productData = JSON.parse(localStorage.getItem('productData')) // 상품목록
let cartData = JSON.parse(localStorage.getItem('cartData')) // 장바구니목록

// 상품목록
productData.forEach(product => {
  console.log(product)
  let template = `<div class="col" data-pcode="${product.pcode}">
    <div class="card" style="width: 20rem;">
      <img src="../images/${product.images}" height="350px" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.pcode}</h5>
        <p class="card-text">${product.pname}<br>${product.price}원</p>
        <a href="#" class="btn btn-success">장바구니 담기</a>
      </div>
    </div>
  </div>`
  document.querySelector('div.row').insertAdjacentHTML("beforeend", template)
})

