//화살표 함수 () => {};-------------------------------------------

let date = new Date();
let hour = date.getHours();

const result = document.getElementById("result");
if (hour >= 17) {
  result.textContent = "안녕";
  result.className = "aa";
} else if (hour >= 13) {
  result.textContent = "잠잔다";
  result.className = "bb";
}

// document.getElementById("testBtn").addEventListener("click", () => {
//   alert("실행 결과");
// });

//const : 상수,불변 /document :html파일 /Element : 요소 /By : 선택
//addEventListener() : 귀를 다는 (뭘 하는지 알수있게 하는) 함수
