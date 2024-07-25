const board = [];

function initializeBoard() {
    board.length = 0;
    let id = 1;
    for (let row = 0; row < 5; row++) {
        const rowData = [];
        for (let col = 0; col < 5; col++) {
            rowData.push({
                id,
                value: id,
                isRed: false,
            });
            id++;
        }
        board.push(rowData);
    }
}

function resetBoard() {
    board.flat().forEach((cell) => {
        cell.isRed = false;
    });
}
