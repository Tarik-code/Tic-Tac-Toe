// Game Board
const gameBoard = (function () {

    // Dom variables
    const boxes = document.querySelectorAll('.box')
    const gameBoard = document.getElementById("gameBoard")
    const vs = document.getElementById("vs")
    const form = document.getElementById("form")
    const announceWinner = document.getElementById("announceWinner")
    const playerNames = document.getElementById("playerNames")
    const restartBtn = document.getElementById("restartBtn")

    // Variables
    let player = 1;
    let winner;
    let arrayTie = []

    // Allow user to select option
    boxes.forEach(box => {
    box.addEventListener('click', function handleClick(event) {
        if (event.target.innerText === "" && player === 1) {
            event.target.innerText = "X"
            player = 2;
            arrayTie.push("x")
            checkWinner()
        } else if (event.target.innerText === "" && player === 2){
            event.target.innerText = "O"
            player = 1;
            arrayTie.push("x")
            checkWinner()
        }
    });
    });
        //Dom variables for players Names
        const playerOne = document.getElementById("playerOne")
        const playerTwo = document.getElementById("playerTwo")
    
        const updateOne = document.getElementById("playerOneName")
        const updateTwo = document.getElementById("playerTwoName")

        //Update Player Names
        const updateNames = () => {
            updateOne.innerText = playerOne.value;
            updateTwo.innerText = playerTwo.value;
            gameBoard.style.pointerEvents = "all";
            vs.style.display = "block"
            form.style.display = "none"
        }
        const submit = document.getElementById('submit')
        submit.addEventListener('click', updateNames)

    // Check winning conditions
    const checkWinner = () => {
        //Horizontal check
    if (boxes[0].innerText === 'X' && boxes[1].innerText === 'X' && boxes[2].innerText === 'X' ){
        winner = 1;
        declareWinner()

    } else if (boxes[0].innerText === 'O' && boxes[1].innerText === 'O' && boxes[2].innerText === 'O'){
        winner = 2;
        declareWinner()

    } else if (boxes[3].innerText === 'X' && boxes[4].innerText === 'X' && boxes[5].innerText === 'X'){
        winner = 1;
        declareWinner()

    } else if (boxes[3].innerText === 'O' && boxes[4].innerText === 'O' && boxes[5].innerText === 'O'){
        winner = 2;
        declareWinner()

    } else if (boxes[6].innerText === 'X' && boxes[7].innerText === 'X' && boxes[8].innerText === 'X'){
        winner = 1;
        declareWinner()

    } else if (boxes[6].innerText === 'O' && boxes[7].innerText === 'O' && boxes[8].innerText === 'O'){
        winner = 2;
        declareWinner()
        // Vertical check
    } else if (boxes[0].innerText === 'X' && boxes[3].innerText === 'X' && boxes[6].innerText === 'X'){
        winner = 1;
        declareWinner()

    } else if (boxes[0].innerText === 'O' && boxes[3].innerText === 'O' && boxes[6].innerText === 'O'){
        winner = 2;
        declareWinner()

    } else if (boxes[1].innerText === 'X' && boxes[4].innerText === 'X' && boxes[7].innerText === 'X'){
        winner = 1;
        declareWinner()

    } else if (boxes[1].innerText === 'O' && boxes[4].innerText === 'O' && boxes[7].innerText === 'O'){
        winner = 2;
        declareWinner()

    } else if (boxes[2].innerText === 'X' && boxes[5].innerText === 'X' && boxes[8].innerText === 'X'){
        winner = 1;
        declareWinner()

    }  else if (boxes[2].innerText === 'O' && boxes[5].innerText === 'O' && boxes[8].innerText === 'O'){
        winner = 2;
        declareWinner()

        // Diagonal Check
    } else if (boxes[0].innerText === 'X' && boxes[4].innerText === 'X' && boxes[8].innerText === 'X'){
        winner = 1;
        declareWinner()

    }  else if (boxes[0].innerText === 'O' && boxes[4].innerText === 'O' && boxes[8].innerText === 'O'){
        winner = 2;
        declareWinner()

    }  else if (boxes[2].innerText === 'X' && boxes[4].innerText === 'X' && boxes[6].innerText === 'X'){
        winner = 1;
        declareWinner()

    }  else if (boxes[2].innerText === 'O' && boxes[4].innerText === 'O' && boxes[6].innerText === 'O'){
        winner = 2;
        declareWinner()
        
    } else if (arrayTie.length === 9){
        announceWinner.innerText = (`Its a tie`)
        playerNames.style.display = "none"
        restartBtn.style.display = "block"
    }}

    // Declare Winner
    const declareWinner = () => {
        if (winner === 1){
            announceWinner.innerText = (`${playerOne.value} has won!!`)
            gameBoard.style.pointerEvents = "none";
            playerNames.style.display = "none"
            restartBtn.style.display = "block"

        } else if (winner === 2){
            announceWinner.innerText = (`${playerTwo.value} has won!!`)
            gameBoard.style.pointerEvents = "none";
            playerNames.style.display = "none"
            restartBtn.style.display = "block"
        }}
})();
