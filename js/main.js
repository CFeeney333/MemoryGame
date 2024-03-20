const gameBoard = document.getElementById('game-board');

const createBoard = () => {
    const symbols = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black'];
    const shuffled = shuffle(symbols.concat(symbols.slice()));

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');

            const symbol = document.createElement('div');
            symbol.classList.add('symbol');
            symbol.classList.add(shuffled.pop());
            hide(symbol);

            symbol.addEventListener('click', (e) => {
                e.target.classList.toggle('hidden');
            });

            tile.appendChild(symbol);
            gameBoard.appendChild(tile);
        }
    }
};

const shuffle = (array) => {

    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];

    }
    return array;
}

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
