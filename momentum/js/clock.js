const clock = document.querySelector("h2#clock");

function getClock() {
  //현재 날짜 및 시간 호출
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const second = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${minutes}:${second}`;
}

//load되자 마자 시간 보여줌
getClock();
//1초 마다 반복 -> 실시간으로 보이게 함
setInterval(getClock, 1000);





//setInterval : 정한 시간 마다 함수 실행(반복)
//setInterval(실행 함수, 함수 실행 간격 시간/ ms);

//setTimeout : 일정 시간 후 함수 실행
//setTimeout(호출 함수, 기다리는 시간 ms);

//Date(); : 연월시분초 불러올 수 있는 함수


//string에 쓸 수 있는 함수,
//padStart() : 문자 앞에 지정 문자를 채워 원하는 길이로 만듦
//"string".padStart(지정 길이,"string의 길이가 지정 길이가 아닐 시 추가 할 문자");
//"1".padStart(2,"0") -> string 1 앞에 padding 처리 후 채우는 문자는 0

//padEnd() : 문자 뒤에 지정 문자를 채워 원하는 길이로 만듦
//"hello".padEnd(20,"x");

//number -> string으로 변환 : String(number);