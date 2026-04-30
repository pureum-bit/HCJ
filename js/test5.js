function highlightProducts() {
  const container = document.querySelector('.container');
  //  all 하면 배열로 인식해서 오류 뜸
  const products = document.querySelectorAll('.product');

  container.style.backgroundColor = '#f0f0f0';
  container.style.padding = '20px';

  products.forEach((product, index) => {
    if (index % 2 === 1) {
      // index(번호표)를 직접 사용함!
      product.style.backgroundColor = '#ffeb3b';
    }
  });

  // products.forEach( product =>{
  //   product.style.backgroundColor = '#ffeb3b';
  //   product.style.padding = '10px';
  //   product.style.margin = '5px';
  //   product.style.borderRadius = '5px';
  // });
}

// products.forEach(function (product, index)
// products: 디자인을 변경할 대상이 담긴 '목록'이다
// .forEach 함수: 목록에 있는 것을 하나 하나 빠짐없이 다 불러와!!!
// function (product, index):
//  product 지금 막 바구니에서 꺼낸 '현재 대상'
//  index 이 녀석이 몇 번째인지 알려주는 번호표
