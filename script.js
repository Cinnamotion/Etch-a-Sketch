const container = document.getElementById("container");
const buttons = document.querySelectorAll("button");

function createSquares(event) {
	container.innerHTML = "";
	const dimension = event.target.value;
	for (let i = 0; i < dimension * dimension; i++) {
		const newDiv = document.createElement("div");
		// newDiv.classList.add("cuadrado");
		newDiv.addEventListener("mouseover", changeColor);
		const size = container.clientWidth / dimension - 2;
		newDiv.style.width = size + "px";
		newDiv.style.height = size + "px";
		newDiv.style.background = "black";
		newDiv.style.border = "1px solid black";
		container.appendChild(newDiv);
	}
}

buttons.forEach((button) => {
	button.addEventListener("click", createSquares);
});

function changeColor() {
	this.style.background = "white";
}
