const container = document.querySelector(".container");
const MAX_WIDTH = 700;
let squares = 100;
const dimensions = (MAX_WIDTH / squares);

for (let i = 0; i < squares**2; ++i) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.setAttribute("style", `width: ${dimensions}px; height: ${dimensions}px;`);
    container.appendChild(div);
}

const allDivs = Array.from(document.querySelectorAll(".square"));

allDivs.forEach(div => {
    div.addEventListener("mouseenter", function(e) {
        div.setAttribute("style", `background-color: black; width: ${dimensions}px; height: ${dimensions}px;`);
        // div.setAttribute("style", "background-color: black;");
    });
});