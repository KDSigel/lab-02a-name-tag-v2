const nameEl = document.getElementById('name-placeholder');

const buttonEl = document.getElementById('change-button');

const purpleButtonEl = document.getElementById('color-button-purple');

const darkgreenButtonEl = document.getElementById('color-button-darkgreen');

const lightblueButtonEl = document.getElementById('color-button-lightblue');

const stickerEl = document.getElementById('background-color');

buttonEl.addEventListener('click', () => {
    const newNameEl = document.getElementById('name-input');

    // console.log(newNameEl.value);

    nameEl.textContent = newNameEl.value;

});

purpleButtonEl.addEventListener('click', () => {

    stickerEl.style.backgroundColor = 'purple';

});

darkgreenButtonEl.addEventListener('click', () => {

    stickerEl.style.backgroundColor = 'forestgreen';

});

lightblueButtonEl.addEventListener('click', () => {

    stickerEl.style.backgroundColor = 'lightblue';

});