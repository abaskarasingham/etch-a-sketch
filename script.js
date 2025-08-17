const container = document.querySelector(".container");

for (let i = 0; i < 256; ++i) {
    const div = document.createElement("div");
    container.appendChild(div);
}

const allDivs = Array.from(document.querySelectorAll(".container > div"));
allDivs.forEach(div => {
    div.addEventListener("mouseenter", function(e) {
        div.setAttribute("style", "background-color: greenyellow;");
    });
});