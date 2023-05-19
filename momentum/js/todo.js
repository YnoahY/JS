const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
	// == const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

const TODOS_KEY = "toDos";


	//입력 내용 전송 함수
function toDoSubmit(event){
		//event 멈춤
	event.preventDefault();
		//현재 value를 새로운 변수에 복사
	const newToDo = toDoInput.value;
		//엔터 시 toDoInput의 value 비움, newToDo와 상관 없음
	toDoInput.value = "";

		//입력 내용 추가 함수 호출
	paintToDo(newToDo);
}

//입력 내용 추가 함수
function paintToDo(newToDo){
		//li, span element 생성, 입력 값 삽입
	const toDoLi = document.createElement("li");
	const toDoSpan = document.createElement("span");
	toDoSpan.innerText = newToDo;

		//버튼 생성, 삭제 이벤트
	const toDoButton = document.createElement("button");
	toDoButton.innerText = 'X';
	toDoButton.addEventListener("click",delToDo);

		//li에 span과 버튼 추가
	toDoLi.appendChild(toDoSpan);
	toDoLi.appendChild(toDoButton);

		//작성한 내용 배열에 추가
	toDos.push(newToDo);
		//나중에 추가한 목록 맨위에 추가
	toDoList.append(toDoLi);

		//목록 localStorage에 저장
	saveToDos();
}


//목록 저장 함수
function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


	//목록 삭제 함수
function delToDo(event) {
	const li = event.target.parentElement;
	li.remove();
}
//consol.log(event.target.parentElement.innerText);
//target : 클릭 된 element
//parentElement : 클릭된 element의 부모


//form에
toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);

	parsedToDos.forEach((item) => console.log("this is the trun of", item));
}
// function test(item) {
// 	console.log("test items", item);
// } == (item) => console.log("this is the trun of", item)




//JSON.stringify(); : object, array, JScode 등을 문자열로 변경
//JSON.parse(); : object, array, JScode 등을 문자열로 변경
//forEacg : array에 있는 각각의 item을 출력