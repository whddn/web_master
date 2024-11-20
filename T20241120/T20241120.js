function makeRow(bookInfo = {
  bookCode,
  bookName,
  author,
  press,
  price
}) {
  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) { // this
    document.querySelector('input[name="bookCode"]').value = this.children[1].innerHTML;
    document.querySelector('input[name="bookName"]').value = this.children[2].innerHTML;
    document.querySelector('input[name="author"]').value = this.children[3].innerHTML;
    document.querySelector('input[name="press"]').value = this.children[4].innerHTML;
    document.querySelector('input[name="price"]').value = this.children[5].innerHTML;
  }, false)
  let td = document.createElement('td')
  let btn = document.createElement('input')
  btn.setAttribute('type', 'checkbox')
  btn.addEventListener('click', (e) => e.stopPropagation());
  btn.addEventListener('change', (e) => {
    document.querySelector('thead input[type="checkbox"]').checked = true
    document.querySelectorAll('tbody input[type="checkbox"]').forEach(item => {
      if (!item.checked) {
        document.querySelector('thead input[type="checkbox"]').checked = false;
      }
    })
  })
  td.appendChild(btn)
  tr.appendChild(td)

  for (let prop in bookInfo) {
    let td = document.createElement('td');
    let bname = bookInfo[prop]
    td.innerHTML = bname;
    tr.appendChild(td);
  }
  td = document.createElement('td')
  btn = document.createElement('button')
  btn.innerHTML = "삭제"
  btn.setAttribute('class', 'delete');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.target.parentElement.parentElement.remove();
  }, false)
  td.appendChild(btn)
  tr.appendChild(td)
  return tr;
}

bookList.forEach((bookList) => {
  document.querySelector('#list').appendChild(makeRow(bookList))
})

document.querySelector('button.save').addEventListener('click', (e) => {
  let bcode = document.querySelector('input[name="bookCode"]').value;
  let bname = document.querySelector('input[name="bookName"]').value;
  let bauthor = document.querySelector('input[name="author"]').value;
  let bpress = document.querySelector('input[name="press"]').value;
  let bprice = document.querySelector('input[name="price"]').value;

  let param = {
    bookCode: bcode,
    bookName: bname,
    author: bauthor,
    press: bpress,
    price: bprice
  }
  let tr = makeRow(param)
  document.querySelector('#list').appendChild(tr);

  document.querySelector('input[name="bookCode"]').value = '';
  document.querySelector('input[name="bookName"]').value = '';
  document.querySelector('input[name="author"]').value = '';
  document.querySelector('input[name="press"]').value = '';
  document.querySelector('input[name="price"]').value = '';
});

document.querySelector('button.delete').addEventListener('click', (e) =>{
  document.querySelectorAll('#list tr').forEach((item) => item.children[0].children[0].checked && item.remove())
})
document.querySelector('thead input[type="checkbox"]').addEventListener('change', (e) => {
  console.log(e.target.checked) 
  document.querySelectorAll('tbody input[type="checkbox"]').forEach((item) => {
    item.checked = e.target.checked
  });
})