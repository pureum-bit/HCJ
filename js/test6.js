// 폼----------------------------------------------

function processForm() {
  // 각 입력 요소의 값 가져오기
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;
  const age = document.getElementById('userAge').value;
  const city = document.getElementById('userCity').value;
  const isAgreed = document.getElementById('agree').checked;

  // 라디오 버튼에서 선택된 값 찾기
  const genderRadios = document.getElementsByName('gender');
  let gender = '';

  for (let radio of genderRadios) {
    if (radio.checked) {
      gender = radio.value;
      break;
    }
  }

  //폼 이라서 입력한다는 가정으로 봤을때 낫(!)으로 건다
  // 유효성 검사
  if (!name || !email) {
    alert('이름과 이메일은 필수 입력사항입니다!');
    return;
  }
  if (!isAgreed) {
    alert('개인정보 처리방침에 동의해주세요!');
    return;
  }

  // 결과 표시
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
<h3>입력하신 정보</h3>
<p><strong>이름:</strong> ${name}</p>
<p><strong>이메일:</strong> ${email}</p>
<p><strong>나이:</strong> ${age || '입력하지 않음'}</p>
<p><strong>성별:</strong> ${gender || '선택하지 않음'}</p>
<p><strong>거주지역:</strong> ${city || '선택하지 않음'}</p>
<p><strong>약관동의:</strong> ${isAgreed ? '동의함' : '동의하지 않음'}</p>
`;

  resultDiv.style.display = 'block';
}

// 로그인----------------------------------------------

// // const hoverBtn = document.getElementById('hoverBtn');
// const textInput = document.getElementById('textInput');
// const result = document.getElementById('result');

// // hoverBtn.addEventListener(mouseover);
// // hoverBtn.addEventListener(mouseout);

// textInput.addEventListener('keyup', function () {
//   result.textContent = `입력한내용: ${this.value}`;
// });

//이벤트 프로그래밍--------------------------------------------

// const button = document.getElementById('myButton');
// const message = document.getElementById('message');

// button.addEventListener('click', function () {
//   message.textContent = '버튼이 클릭되었습니다.';
//   message.style.color = 'blue';
// });

// 카드선택 및 초기화--------------------------------------

// 각 카드에 클릭 이벤트 추가
// document.getElementById('card1').onclick = function() {
// selectCard('card1', '게임 카드');
// };
// document.getElementById('card2').onclick = function() {
// selectCard('card2', '음악 카드');
// };
// document.getElementById('card3').onclick = function() {
// selectCard('card3', '도서 카드');
// };

// 카드 선택 함수
// function selectCard(cardId, cardName) {

// // 모든 카드의 선택 상태 초기화
// document.getElementById('card1').className = 'card';
// document.getElementById('card2').className = 'card';
// document.getElementById('card3').className = 'card';

// // 선택된 카드 강조
// const selectedCard = document.getElementById(cardId);
// selectedCard.className = 'card selected';

// // 상태 텍스트 업데이트
// const statusElement = document.getElementById('status');
// statusElement.textContent = '선택된 카드: ' + cardName;
// }

// // 초기화 버튼
// document.getElementById('reset-btn').onclick = function() {
// document.getElementById('card1').className = 'card';
// document.getElementById('card2').className = 'card';
// document.getElementById('card3').className = 'card';
// document.getElementById('status').textContent = '선택된 카드: 없음';
// };

// 리엑트 방법-----------------------------------------------

// document.getElementById('highlight-btn').onclick = function () {
//   const box1 = document.getElementById('box1');
//   box1.className += 'highlight';
// };

//장바구니 기능-------------------------------------------------

// let itemCount = 0;

// function updateDisplay() {
//   const countElement = document.getElementById('count');
//   const statusElement = document.getElementById('status');

//   countElement.textContent = itemCount;

//   if (itemCount === 0) {
//     statusElement.textContent = '장바구니가 비었습니다.';
//     statusElement.style.color = 'gray';
//   } else if (itemCount < 10) {
//     statusElement.textContent = '더 담으세요.';
//     statusElement.style.color = 'brue';
//   } else {
//     statusElement.textContent = '장바구니가 가득합니다.';
//     statusElement.style.color = 'red';
//   }
// }

// function addItem() {
//   itemCount++;
//   updateDisplay();
// }

// function removeItem() {
//   if (itemCount > 0) {
//     itemCount--;
//   }
//   updateDisplay();
// }

// function reseCart() {
//   itemCount = 0;
//   updateDisplay();
// }

// updateDisplay();

//변경을 눌렀을때 인천을 제주도로 변경---------------------------------

//체크박스-눌렀을때 인천<->제주도
// function changeText() {
//   const addId = document.getElementById('add');
//   //삼학연산자
//   addId.textContent = addId.textContent === '인천' ? '제주도' : '인천';
// //이걸 줄여보자
// if (addId.textContent === '인천') {
//   addId.textContent = '제주도';
// } else {
//   addId.textContent = '인천';
// }
// }
// pTag

//귀
// document
//   .getElementById('aa')
//   .addEventListener(
//     'click',
//     () => (document.getElementById('add').textContent = '제주도'),
//   );

//DOM의 세계, HTML과 JS의 만남--------------------------------------------------------------

//HTML 문서 : 아파트 전체
//document :건물 1개 전체
//head, boosy : 각각의 층
//div, p, span : 각 방들
//문자열, 속성 : 방안의 가구들

//js는 이 아파트 관리 사무소이다. DOM이라는 것을 이용하여 어떤 방(요소)에든 접근해서 통제한다
//가구 이동, 벽지 변경, 새로운 방 만들기

// document.getElementById("price").textContent = "19,900원";//가격 변경
// document.querySelector('.button').style.color = "red"; // 색상변경
// document.createElement('div'); //새로운 div 태그를 만든다

//DOM 특징
//1. 실시간 방영
//2. 부모 자식 관계
//3. 양방향 소통 (js <-> html)

//게임 케릭터 만들기--------------------------------------------------------------------

// // 뼈대
// function gameCharacter(name) {
//   this.name = name;
//   this.level = 1;
//   this.hp = 100;
//   this.maxHp = 100;
//   this.exp = 0;

//   // 레벨업 메소드

//   ((this.levelUp = function () {
//     this.level++;
//     this.maxHp += 20;
//     this.hp = this.maxHp; // 레벨업 시 체력 완전 회복
//     this.exp = 0;
//     console.log(` 레벨업! 현재 레벨: ${this.level}`);
//     return this;
//   }),
//     // 경험치 획득 메소드
//     (this.gainExp = function (amount) {
//       this.exp += amount;
//       console.log(`경험치 +${amount} (현재: ${this.exp}/100)`);

//       if (this.exp >= 100) {
//         this.levelUp();
//       }
//       return this;
//     }));
// }

// const war = new gameCharacter('이순신');
// const defff = new gameCharacter('강감찬');

// war.gainExp(100);
// defff.gainExp(140);
