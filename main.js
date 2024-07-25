function init() {
    initializeBoard();
    renderBoard();

    const shuffleButton = document.getElementById('shuffleButton');
    shuffleButton.addEventListener('click', shuffleNumbers);
}

init();
