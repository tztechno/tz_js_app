function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    board.forEach((row) => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        row.forEach((cell) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.textContent = cell.value;
            if (cell.isRed) {
                cellElement.classList.add('red');
            }
            rowElement.appendChild(cellElement);
        });
        boardElement.appendChild(rowElement);
    });
}
