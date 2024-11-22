    // id, pw, name
   let memberData = [{
        id: 'user01',
        pw: '1111',
        name: '사용자1',
        responsibility: 'User01'
      },
      {
        id: 'user02',
        pw: '2222',
        name: '사용자2',
        responsibility: 'User02'
      },
      {
        id: 'user03',
        pw: '3333',
        name: '사용자3',
        responsibility: 'Admin'
      }
    ]

    // pcode, pname, price
    let productData = [{
        pcode: 'P001',
        pname: '상의1',
        price: 10000,
        image: 'clothes1.jpg'
      },
      {
        pcode: 'P002',
        pname: '상의2',
        price: 1500,
        image: 'clothes2.jpg'
      },
      {
        pcode: 'P003',
        pname: '상의3',
        price: 2500,
        image: 'clothes3.jpg'
      },
      {
        pcode: 'P004',
        pname: '하의1',
        price: 5000,
        image: 'clothes4.jpg'
      },
      {
        pcode: 'P005',
        pname: '하의2',
        price: 1500,
        image: 'clothes5.jpg'
      },
      {
        pcode: 'P006',
        pname: '하의3',
        price: 2500,
        image: 'clothes6.jpg'
      },
      {
        pcode: 'P007',
        pname: '하의4',
        price: 3500,
        image: 'clothes7.jpg'
      }
    ]

    // id, pcode, qty
    let cartData = [{
        id: 'user01',
        pcode: 'P001',
        qty: 2
      },
      {
        id: 'user01',
        pcode: 'P003',
        qty: 5
      },
      {
        id: 'user01',
        pcode: 'P002',
        qty: 3
      },
      {
        id: 'user02',
        pcode: 'P001',
        qty: 3
      },
      {
        id: 'user02',
        pcode: 'P004',
        qty: 4
      },
      {
        id: 'user02',
        pcode: 'P007',
        qty: 2
      }
    ]
    // 객체의 정보를 활용해서 row 생성.
    function makeRow(obj = {}) {
      let tr = document.createElement('tr');
      for (let prop in obj) {
        let td = document.createElement('td');
        td.innerHTML = obj[prop];
        tr.appendChild(td);
      }

      return tr;
    }