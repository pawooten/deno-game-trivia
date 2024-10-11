const onGameConnectClicked = () => {
    const gameID = document.getElementById('game-id').value;
    updateGameLabel(gameID);
    log(`Connecting to game ${gameID}`);
};

const gameLog = document.querySelector('#game-log');
const log = (message) => {
    console.log(message);
    gameLog.appendChild(document.createTextNode(message))
    gameLog.appendChild(document.createElement('br'));
}

const updateGameLabel = (gameID) => {
    document.getElementById('game-label').innerText = `Game ID: ${gameID}`;
};