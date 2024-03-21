const gameBoard = document.getElementById('game-board');
const turns = document.getElementById('turns-value');
const pairs = document.getElementById('pairs-value');

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
                if (e.target.dataset.matched === "1") {
                    // it has already been matched
                    return;
                }

                if (first === null) {
                    // if the first one is not already turned over
                    first = e.target;
                    show(first);
                } else if (second === null && e.target !== first) {
                    // if the first one is turned over, the second one isn't, and it's not the same element
                    turns.textContent = String(parseInt(turns.textContent) + 1);

                    second = e.target;
                    show(second);

                    if (first.dataset.symbol !== second.dataset.symbol) {
                        // retain the elements
                        // if they are not a match
                        // retain a reference to the elements, so they can be hidden after the timeout
                        const pair = [first, second];
                        setTimeout(() => {
                            hide(pair[0]);
                            hide(pair[1]);
                        }, FADE_TIMEOUT);
                    } else {
                        // they are a match
                        pairs.textContent = String(parseInt(pairs.textContent) + 1);
                    }
                    // reset the first and the second
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

const resetStats = () => {
    pairs.textContent = "0";
    turns.textContent = "0";
}

createBoard();
