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
        pname: '블랙 원피스',
        price: 10000,
        images: 'clothes1.jpg'
      },
      {
        pcode: 'P002',
        pname: '블라우스 치마',
        price: 15000,
        images: 'clothes2.jpg'
      },
      {
        pcode: 'P003',
        pname: '가디건',
        price: 12500,
        images: 'clothes3.jpg'
      },
      {
        pcode: 'P004',
        pname: '청바지',
        price: 20000,
        images: 'clothes4.jpg'
      },
      {
        pcode: 'P005',
        pname: '나시',
        price: 5000,
        images: 'clothes5.jpg'
      },
      {
        pcode: 'P006',
        pname: '청치마',
        price: 13000,
        images: 'clothes6.jpg'
      },
      {
        pcode: 'P007',
        pname: '검정 원피스',
        price: 20100,
        images: 'clothes7.jpg'
      },
      {
        pcode: 'P008',
        pname: '골지 티셔츠',
        price: 7000,
        images: 'clothes8.jpg'
      },
      {
        pcode: 'P009',
        pname: '기모 맨투맨 ',
        price: 17000,
        images: 'clothes9.jpg'
      },
      {
        pcode: 'P0010',
        pname: '앙골라 가디건',
        price: 25000,
        images: 'clothes10.jpg'
      },
      {
        pcode: 'P0011',
        pname: '꼬임 니트',
        price: 19000,
        images: 'clothes11.jpg'
      },
      {
        pcode: 'P0012',
        pname: '미니 스커트',
        price: 12000,
        images: 'clothes12.jpg'
      }
    ]

    // id, pcode, qty
    // let cartData = [{
    //     id: 'user01',
    //     pcode: 'P001',
    //     qty: 1
    //   },
    //   {
    //     id: 'user01',
    //     pcode: 'P003',
    //     qty: 1
    //   },
    //   {
    //     id: 'user01',
    //     pcode: 'P002',
    //     qty: 1
    //   },
    //   {
    //     id: 'user02',
    //     pcode: 'P001',
    //     qty: 3
    //   },
    //   {
    //     id: 'user02',
    //     pcode: 'P004',
    //     qty: 4
    //   },
    //   {
    //     id: 'user02',
    //     pcode: 'P007',
    //     qty: 2
    //   }
    // ]
    
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