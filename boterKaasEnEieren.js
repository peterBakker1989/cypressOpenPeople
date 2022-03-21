// btns and eventlistners
const speler = document.getElementById('speler');
const stand = document.getElementById('stand');
document.querySelectorAll('.veld').forEach(cell => cell.addEventListener('click', clickOpVeld));
document.getElementById('restart').addEventListener('click', restartGame);

let player = "X";
let velden = ["", "", "", "", "", "", "", "", ""];
let turnCounter = 0;
const winCondities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function clickOpVeld(dataCellIndex) {
    const geselecteerdVeld = dataCellIndex.target.getAttribute('data-cell-index')
    if (document.querySelector(`[data-cell-index="${geselecteerdVeld}"]`).innerHTML === "") {
        turnCounter++;
        updateVeld(geselecteerdVeld);
        checkForWinner();
        veranderSpeler();
    }
    console.log(turnCounter);
}

function updateVeld(geselecteerdVeld) {
    document.querySelector(`[data-cell-index="${geselecteerdVeld}"]`).innerHTML = player;
    velden[geselecteerdVeld] = player;
}

function veranderSpeler() {
    if (player === "X") {
        player = 'O'
    }
    else if (player === "O") {
        player = "X";
    }
    speler.innerHTML = `Speler: ${player}`;
}

function checkForWinner() {
    winCondities.forEach(winConditie => {
        if (velden[winConditie[0]] === player && velden[winConditie[1]] === player && velden[winConditie[2]] === player) {
            stand.innerHTML = `Speler ${player} heeft gewonnen`;
        } else if (turnCounter === 9) {
            stand.innerHTML = "Gelijk spel";
        }
    }

    )
}

function restartGame() {
    player = "X";
    speler.innerHTML = `Speler: ${player}`;
    velden = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.veld').forEach(cell => cell.innerHTML = "");
    stand.innerHTML = "";
    turnCounter = 0;
}