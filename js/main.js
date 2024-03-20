const gameBoard = document.getElementById('game-board');

const createBoard = () => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');

            const symbol = document.createElement('div');
            symbol.classList.add('symbol');
            symbol.classList.add('red');
            hide(symbol);

            symbol.addEventListener('click', (e) => {
                e.target.classList.toggle('hidden');
            });

            tile.appendChild(symbol);
            gameBoard.appendChild(tile);
        }
    }
};

const hide = (e) => {
    if (!e.classList.contains('hidden')) {
        e.classList.add('hidden');
    }
}

const reveal = (e) => {
    if (e.classList.contains('hidden')) {
        e.classList.remove('hidden');
    }
}

createBoard();
