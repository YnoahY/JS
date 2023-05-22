const images = [
	"hunter-reilly.jpg",
	"marek-piwnicki.jpg",
	"saira.jpg",
	"vincenzo-godono.jpg",
	"wolfgang-hasselmann.jpg",
	"zetong-li.jpg",
	"zetong.jpg",
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);


//createElement(); : js통해 HTML element를 생성
//appendChild(); : 특정 부모 노드의 자식 목록에 노드를 추가(마지막에 추가 됨)
//prepend(); : : 특정 부모 노드의 자식 목록에 노드를 추가(맨위에 추가됨)


