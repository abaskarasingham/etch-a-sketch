const container = document.querySelector(".container");
const MAX_WIDTH = 700;

function generateGrid(input) {
    let squares = input;
    const totalSquares = squares ** 2;
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
        div.addEventListener("mouseenter", function (e) {
            div.style.backgroundColor = `rgb(
                                            ${Math.floor(Math.random() * 256)},
                                            ${Math.floor(Math.random() * 256)},
                                            ${Math.floor(Math.random() * 256)}
            )`;

            if (div.style.opacity) {
                div.style.opacity -= 0.1;
            } else {
                div.style.opacity = 1;
            }

        });
    });
}
generateGrid(50);

const button = document.querySelector("button");
button.addEventListener("click", function(e) {
    const input = prompt("Please enter the number of squares per side for the new grid.\n(1-100, inclusive)", container.childNodes.length**0.5);

    if (input !== null && input !== "") {
        if (isNaN(input)) {
            alert("Please enter a valid number!");
        } else {
            if (input > 100) {
                alert("Maximum number of squares is 100!");
            } else {
                container.replaceChildren();
                (input > 0) ? generateGrid(Math.trunc(input)) : generateGrid(0);
            }
        }
    }
});