//키보드 입력 방식을 반드시 알아야 한다
//prompt() : 입력방식

while (1) {
  let input = parseInt(prompt("정수 입력하시오."));
  if (input === 7) {
    console.log("7이 입력되었으니 종료합니다");
    break;
  }
  let tot = 0;
  for (i = 1; i <= input; i++) {
    tot += i;
  }
  console.log(tot);
}

// while (1) {
//   let input = parseInt(prompt("정수 입력하시오."));
//   if (input === 7) {
//     console.log("7이 입력되었으니 종료합니다");
//     break;
//   }
// }

//---------------------------------------------------------------------------------------------------------------------
//제어문 : 반복
// 종료 조건(무한 반복) -----------------------------------------

// let i = 1;

// while (1) {
//   console.log("Welcome");
//   if (i === 7) {
//     break;
//   }
//   i++;
// }

// let i = 1;
// let tot = 0;

// while (i <= 10) {
//   tot += i;
//   i++;
// }

// console.log(tot);

// 반복 조건 ---------------------------------------------------

// let score = [73, 32, 83, 57, 52];
// score.length
// let tot = 0;
// for (i = 0; i < 5; i++) {
//   tot += score[i];
// }
// console.log(tot);

// for (i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// let tot = 0;
// for (i = 1; i <= 100; i += 2) {
//   tot += i;
// }
// console.log(tot);

// let tot = 0;
// for (i = 1; i <= 10; i++) {
//   tot += 1 / i;
// }

// console.log(tot);

// 조건문 -----------------------------------------------------
// //현재 시간을 출력하기 위하여 우선 현재 시간을 구하자!!
// // 오전 오후
// let date = new Date();
// let hour = date.getMonth();

// if (3<= month && month <= 5) {
//   alert('봄');
// } else if (6<=month && month <=8) {

// }

// if (hour < 5) {
//   alert("잠자기");
// } else if (hour < 7) {
//   alert("출근 준비");
// } else if (hour < 9) {
//   alert("출근");
// } else if (hour < 12) {
//   alert("오전 업무");
// } else if (hour < 14) {
//   alert("점심 식사");
// } else if (hour < 17) {
//   alert("오후 업무");
// } else if (hour < 18) {
//   alert("툌!!!! 꺄륵 ><");
// } else {
//   alert("아몰랑 야르~ 내 세상");
// }

// if (hour < 12) {
//   alert("오전");
// } else {
//   alert("오후");
// }
//---------------------------------------------------
// let check = prompt(이름 입력", "이름");-입력란
// let check = confirm("무엇을 클릭하실 것인가요?");-확인 취소

// alert("Hello");-확인 하나
// // document(문서).write(기능)("여기는 본문에 출력"); - 본문에 출력
