//앙직DB를 배우기 전이다
//그래도 코드가 아닌 공간에 별도의 공용 공간을 만들어서 활용하려고 한다
//예 : 나의 로그인 상태를 로그아웃 할 때 까지
//웹 브라우저의 화면을 전환하여도 그대로 유지
//리액트 끝나기 전까지
//함수--------------------------------------------------------
//클로저: 숨긴다 남들에게 보이지 않는다----------------------------

// function createCounter() {
//   let count = 0; // 외부에서 직접 접근할 수 없는 '비밀' 변수

//   return function () {
//     count++; // 클로저를 통해 count에 접근
//     return count;
//   };
// }

// let counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

//전역변수(global) & 지역변수(Iocal)----------------------------

// let rec = 0; //밖에 있어야함

// function createCounter() {
//   rec += 1;
//   return rec;
// }
// //변수에 담지 말고, 매번 함수를 호출()하세요
// console.log(createCounter());
// console.log(createCounter());
// console.log(createCounter());

//리턴 함수 ----------------------------------------------------
// 두개의 정수를 입력 받아 둘 중에 더 큰 구를 반환하는 함수를 만드시오
// function addCal(a, b) {
//   if (a < b) {
//     // let rec = b;
//     return b; //rec;
//   } else if (a === b) {
//     return a + " 값이 같습니다.";
//   } else {
//     // let rec = a;
//     return a; //rec;
//   }
// }

// let tot = addCal(24, 14);
// console.log(tot);

// function addCal(a, b) {
//   let rec = a + b;
//   return rec;
// }

// let tot = addCal(7, 14);
// console.log(tot);

// -----------------------------------------------------------
// function greetUset(name, email) {
//   console.log("안녕하세요" + name + "님!!!");
//   console.log(email + "반갑습니다.");
// }

// greetUset(" 김푸름 ", "gndusdl719");

// -----------------------------------------------------------
// function 안녕() {
//   console.log("Welcome");
// }

// 안녕();
