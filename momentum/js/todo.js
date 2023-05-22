const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
	// == const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];



	//입력 내용 전송 함수
function toDoSubmit(event){
	event.preventDefault(); //event 멈춤

	const newToDo = toDoInput.value; //현재 value를 새로운 변수에 복사
	toDoInput.value = ""; //엔터 시 toDoInput의 value 비움, newToDo와 상관 없음

	const newTodoObj = {
		text : newToDo,
		id : Date.now(),
	};

	toDos.push(newTodoObj); //작성한 내용 배열에 추가

	paintToDo(newTodoObj);//입력 내용 추가 함수 호출
	saveToDos(); //목록 localStorage에 저장
}

	//입력 내용 추가 함수
function paintToDo(newToDo){
	const toDoLi = document.createElement("li");//li, span element 생성, 입력 값 삽입
	toDoLi.id = newToDo.id;

	const toDoSpan = document.createElement("span");
	toDoSpan.innerText = newToDo.text;

	const toDoButton = document.createElement("button");//버튼 생성, 삭제 이벤트
	toDoButton.innerText = 'X';
	toDoButton.addEventListener("click",delToDo);

	toDoLi.appendChild(toDoSpan); //li에 span과 버튼 추가
	toDoLi.appendChild(toDoButton);

	toDoList.append(toDoLi); //나중에 추가한 목록 맨위에 추가
}


	//목록 저장 함수
function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


	//목록 삭제 함수
function delToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}
//consol.log(event.target.parentElement.innerText);
//target : 클릭 된 element
//parentElement : 클릭된 element의 부모


toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
// function test(item) {
// 	console.log("test items", item);
// } == (item) => console.log("this is the trun of", item)

//JSON.stringify(); : object, array, JScode 등을 문자열로 변경
//JSON.parse(); : object, array, JScode 등을 문자열로 변경
//forEacg : array에 있는 각각의 item을 출력
//.filter() : 지우고 싶은 item 제외