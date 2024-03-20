const symbols = document.querySelectorAll('.symbol');

for (let s of symbols) {
    s.addEventListener('click', (e) => {
        e.target.classList.toggle('hidden');
    });
}