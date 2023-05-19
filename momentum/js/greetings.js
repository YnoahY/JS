//html에서 element를 가져와 변수에 대입
//document 또는 하나의 element를 통해 검색 가능
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//2-1의 함수. 로그인 버튼 클릭 이벤트 함수
function loginBtn(event) {
	//이벤트 기본 행동 발생 방지
		event.preventDefault();

	//input값 대입
	const typeUsername = loginInput.value;
	//locasStorage에 username 저장
		localStorage.setItem(USERNAME_KEY, typeUsername);

	//loninForm에 hidden 클래스 추가
		loginForm.classList.add(HIDDEN_CLASSNAME);
		paintGreetings(typeUsername);

}

//2-2의 함수. username 표시와 class 삭제
//함수 뒤의 (괄호) 안에 들어가는 것은 그 함수 안에서 사용할 변수의 이름을 임의로 지어주는 것
function paintGreetings(argUsername) {
		greeting.innerText = `Hello ${argUsername}`;
		greeting.classList.remove(HIDDEN_CLASSNAME);
}


	//1. localStorage에 username이 있는지를 확인
		const savedUesrName = localStorage.getItem(USERNAME_KEY);

	//2. usrname의 null여부 유효성 검사
		if(savedUesrName === null) {
		//2-1. null일때 class="hidden" 삭제 후 longinBtn 함수 실행
			loginForm.classList.remove(HIDDEN_CLASSNAME);
			loginForm.addEventListener("submit",loginBtn);
	} else {
		//2-2. username이 null이 아닐 시 아래함수 실행
			paintGreetings(savedUesrName);
	}
