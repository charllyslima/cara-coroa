const button = document.querySelector('.button');
const coin = document.querySelector('.coin');
const root = document.querySelector(':root');
const win = document.querySelector('#win');

button.addEventListener('click', () => {
    coin.classList.add('coin-spin');
    const timeSpin = Math.floor(Math.random() * 4000) + 2000;
    setTimeout(() => {
        coin.classList.remove('coin-spin');
        const rand = Math.floor(Math.random() * 2);
        coin.style.backgroundImage = null;

        if (rand % 2 === 0) {
            root.style.setProperty('--front', "url('./assets/img/02.png')");
            root.style.setProperty('--back', "url('./assets/img/01.png')");
            win.innerText = 'Coroa Venceu!';
        } else {
            root.style.setProperty('--front', "url('./assets/img/01.png')");
            root.style.setProperty('--back', "url('./assets/img/02.png')");
            win.innerText = 'Cara Venceu';
        }
    }, timeSpin);
})