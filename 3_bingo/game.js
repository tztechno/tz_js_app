let shuffledNumbers = [];
let intervalId = null;
let currentIndex = 0;

function shuffleNumbers() {
    resetGame();
    shuffledNumbers = getShuffledNumbers();
    startColorChangeInterval();
}

function getShuffledNumbers() {
    const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

function startColorChangeInterval() {
    clearInterval(intervalId);
    currentIndex = 0;
    intervalId = setInterval(changeColor, 1000);
}

function changeColor() {
    if (currentIndex < shuffledNumbers.length) {
        const cellId = shuffledNumbers[currentIndex];
        const cell = board.flat().find((c) => c.value === cellId);
        if (cell) {
            cell.isRed = true;
            renderBoard();
            if (checkBingo()) {
                clearInterval(intervalId);
                return;
            }
        }
        currentIndex++;
    } else {
        clearInterval(intervalId);
    }
}

function checkBingo() {
    const flatBoard = board.flat();

    // 行チェック
    for (let i = 0; i < 5; i++) {
        const row = flatBoard.slice(i * 5, i * 5 + 5);
        if (row.every((cell) => cell.isRed)) {
            return true;
        }
    }

    // 列チェック
    for (let i = 0; i < 5; i++) {
        const column = flatBoard.filter((cell, index) => index % 5 === i);
        if (column.every((cell) => cell.isRed)) {
            return true;
        }
    }

    // 対角線チェック
    const diagonal1 = [];
    const diagonal2 = [];

    for (let i = 0; i < 25; i += 6) {
        diagonal1.push(flatBoard[i]);
    }

    for (let i = 4; i < 21; i += 4) {
        diagonal2.push(flatBoard[i]);
    }

    if (diagonal1.every((cell) => cell.isRed) || diagonal2.every((cell) => cell.isRed)) {
        return true;
    }

    return false;
}

function resetGame() {
    clearInterval(intervalId);
    currentIndex = 0;
    shuffledNumbers = [];
    resetBoard();
    renderBoard();
}
