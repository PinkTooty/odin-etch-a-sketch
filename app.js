const container = document.querySelector('#container')
const button = document.querySelector('button')

let input;

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function userInput() {
    resetGrid()
    input = parseInt(prompt('Enter your desired grid dimensions'))
    makeRows(input)
}

// creates a x by x grid, changes color randomly when hovered
// awful looking code, fix when im better at it (give me a year or several)
function makeRows(x) {
    container.style.setProperty('--grid-rows', x);
    container.style.setProperty('--grid-cols', x);
    for (c = 0; c < (x * x); c++) {
        if (c < 10000) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = random_rgba()
            })
            cell.addEventListener('mouseout', () => {
                cell.style.transition = '0.1s'
                cell.style.backgroundColor = '#F3DAD8'
            })
        }
        else {
            resetGrid()
        }
    };
};

button.addEventListener('click', userInput)
