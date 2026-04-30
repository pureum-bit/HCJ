//화살표 함수 () => {};-------------------------------------------

//--------------------------------------------------------

// const scores = [85, 92, 78, 96, 88, 73, 91];

// // const highScores1 = scores.filter((score) => score >= 90);
// const highScores1 = scores.filter(function (score) {
//   return score >= 90;
// });

// console.log(highScores1);

// // scores(시작위치)filter(걸러낼내용) : 필터(걸러낼 내용(변수안에 담아야한다))
// //각 칸마다 하나씩 꺼내어 너가 인식하고 그 인식된 값을  90과 비교하라
// //scores:전체, score : 각 하나씩
// //score => score >= 90
// //매개변수
// //score는 재료인데 filter 함수가 처리할 데이터이다(여기서는 하나의 정수)
// //=> 이 재료를 가지고 우측의 행동을 진행하라
// //score >=90 재료ㅗ가 90이상인지 확인하여 걸러내라
// //필터링 과정 (거름망 통과)
// //컴퓨터는 scores 배열에 들어있는 7개의 점수를 하나씩 꺼내어 조건문(score >= 90)을 대입해서 참 거짓을 가려낸다

//---------------------------------------------------------
// const result = document.getElementById("result");

// function oldAdd(a, b) {
//   return a + b;
// }

// const newAdd = (a, b) => a,
//   b;

// result.innerHTML = `
// <p>기존 함수 : ${oldAdd(5, 3)}</p>
// <p>기존 함수 : ${newAdd(5, 3)}</p>
// `;
// // //result.innerHTML= : 태그, 백틱 꼭 필요

//---------------------------------------------------------------
// function add(a, d) {
//   return a + d;
// }

// let rec = add(3, 6);
// //여기까지 함수 원형

// //아래도 같은 함수/ 대신 함수 이름이 없다(대기상태)
// //1.
// const add = function (a, b) {
//   return a + d;
// };

// //2.
// const add = (a, b) => {
//   return a + d;
// };

// //3.
// const add = (a, b) => a,
//   b;

// const sayHello = () => console.log("Welcome");

// const double = (x) => x*2;
// const double = x => x*2;//매개변수가 한개일때는 소괄호까지 생략가능

//----------------------------------------------------------------
// const result = document.getElementById("result");
// const hours = new Date().getHours();

// if (hours >= 13 && hours < 17) {
//   result.textContent = "안녕";
//   result.className = "daytime";
// } else {
//   result.textContent = "잠잔다";
//   result.className = "nighttime";
// }

// let date = new Date();
// let hour = date.getHours();

// const result = document.getElementById("result");
// if (hour >= 13 && hour < 17) {
//   result.textContent = "안녕";
//   result.className = "daytime";
// } else {
//   result.textContent = "잠잔다";
//   result.className = "nighttime";
// }

//클릭 시 ------------------------------------------------------
// document.getElementById("testBtn").addEventListener("click", () => {
//   alert("실행 결과");
// });

//const : 상수,불변 /document :html파일 /Element : 요소 /By : 선택
//addEventListener() : 귀를 다는 (뭘 하는지 알수있게 하는) 함수
