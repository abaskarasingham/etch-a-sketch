const container = document.querySelector(".container");
const MAX_WIDTH = 960;
let squares = 16;

for (let i = 0; i < squares; ++i) {
    const div = document.createElement("div");
    container.appendChild(div);
}

const allDivs = Array.from(document.querySelectorAll(".container > div"));

allDivs.forEach(div => {
    div.setAttribute("style", `width: ${MAX_WIDTH / squares}px; height: ${MAX_WIDTH / squares}px;`);

    div.addEventListener("mouseenter", function(e) {
        div.setAttribute("style", `background-color: black; width: ${MAX_WIDTH / squares}px; height: ${MAX_WIDTH / squares}px;`);
    });
});