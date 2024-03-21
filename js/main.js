const gameBoard = document.getElementById('game-board');
let first = null, second = null;

const createBoard = () => {
    first = null;
    second = null;
    const symbols = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black'];
    const shuffled = shuffle(symbols.concat(symbols.slice()));

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const tileElem = document.createElement('div');
            tileElem.classList.add('tile');

            const symbolElem = document.createElement('div');
            symbolElem.classList.add('symbol');

            symbolElem.classList.add(shuffled.pop());
            symbolElem.data
            hide(symbolElem);

            symbolElem.addEventListener('click', (e) => {
                if (first === null) {
                    first = e.target;
                    show(first);
                } else if (second === null && e.target !== first) {
                    second = e.target;
                    show(second);
                    setTimeout(() => {
                        hide(first);
                        hide(second);
                        first = null;
                        second = null;
                    }, 1200);
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
