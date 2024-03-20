const symbols = document.querySelectorAll('.symbol');

for (let s of symbols) {
    s.addEventListener('click', (e) => {
        e.target.classList.toggle('hidden');
    });
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