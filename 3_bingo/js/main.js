
function init() {
    console.log("Init function called");
    console.log("Board before initialization:", board);
    initializeBoard();
    console.log("Board after initialization:", board);
    renderBoard();
    console.log("Board rendering completed");

    const shuffleButton = document.getElementById('shuffleButton');
    shuffleButton.addEventListener('click', shuffleNumbers);
}

console.log("main.js loaded");
init();
