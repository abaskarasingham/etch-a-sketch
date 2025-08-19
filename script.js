const container = document.querySelector(".container");
const MAX_WIDTH = 700;

let squares = 100;
const totalSquares = squares**2;
const dimensions = (MAX_WIDTH / squares);

for (let i = 0; i < totalSquares; ++i) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${dimensions}px`;
    div.style.height = `${dimensions}px`;
    
    container.appendChild(div);
}

const allDivs = Array.from(document.querySelectorAll(".square"));

allDivs.forEach(div => {
    div.addEventListener("mouseenter", function(e) {
        div.style.backgroundColor = "black";
    });
});