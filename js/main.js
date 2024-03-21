const gameBoard = document.getElementById('game-board');
let first = null, second = null;

// fade timeout in milliseconds before another tile can be clicked
const FADE_TIMEOUT = 800;

const createBoard = () => {
    first = null;
    second = null;
    const symbols = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black'];
    const shuffled = shuffle(symbols.concat(symbols.slice()));

    let tileElem, symbolElem, symbol;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            tileElem = document.createElement('div');
            tileElem.classList.add('tile');

            symbolElem = document.createElement('div');
            symbolElem.classList.add('symbol');

            symbol = shuffled.pop();
            symbolElem.classList.add(symbol);
            symbolElem.dataset.symbol = symbol;
            hide(symbolElem);

            symbolElem.addEventListener('click', (e) => {
                if (first === null) {
                    first = e.target;
                    show(first);
                } else if (second === null && e.target !== first) {
                    second = e.target;
                    show(second);

                    if (first.dataset.symbol !== second.dataset.symbol) {
                        // retain the elements
                        const pair = [first, second];
                        setTimeout(() => {
                            hide(pair[0]);
                            hide(pair[1]);
                        }, FADE_TIMEOUT);
                    }
                    setTimeout(() => {
                        first = null;
                        second = null;
                    }, FADE_TIMEOUT);
                }
            });

            tileElem.appendChild(symbolElem);
            gameBoard.appendChild(tileElem);
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

const show = (e) => {
    if (e.classList.contains('hidden')) {
        e.classList.remove('hidden');
    }
}

createBoard();
