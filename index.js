let tapaOne = document.querySelector('.tapa');
let tapaTwo = document.querySelector('.tapa_');
let pages = document.querySelector('#pages')
let page = document.querySelector('.item');
let btnTapaOne = document.querySelector('.close-tapa');
let btnTapaTwo = document.querySelector('.close-tapa-two');
let paperOne = document.querySelector('.paper');
let paperTwo = document.querySelector('.paper-two');
let paperThree = document.querySelector('.paper-three');
let paperFour = document.querySelector('.paper-four');

const openTapa = () => {
    tapaOne.style.backgroundImage = 'url(./images/creditos.svg)';
    tapaOne.style.backgroundPosition = 'right';
    tapaOne.style.transform = 'rotateY(180deg)';
    tapaOne.style.zIndex = '-1';
    btnTapaOne.style.left = '0';
    tapaOne.onclick = closeTapa;
};

const closeTapa = () => {
    tapaOne.style.backgroundImage = '';
    tapaOne.style.backgroundPosition = '';
    tapaOne.style.transform = '';
    tapaOne.style.zIndex = '';
    btnTapaOne.style.left = '';
    tapaOne.onclick = openTapa;
};

tapaOne.onclick = openTapa;
btnTapaOne.onclick = closeTapa;
paperOne.onclick = function() {
    btnTapaOne.style.left = '';
};

paperTwo.onclick = function() {
    btnTapaOne.style.left = '0';
};

const openTapaTwo = () => {
    tapaTwo.style.backgroundImage = '';
    tapaTwo.style.backgroundPosition = '';
    tapaTwo.style.transform = '';
    tapaTwo.style.zIndex = '';
    btnTapaTwo.style.right = '0';
    tapaTwo.onclick = closeTapaTwo;
};

const closeTapaTwo = () => {
    tapaTwo.style.backgroundImage = 'url(./images/contraportada.svg)';
    tapaTwo.style.transform = 'rotateY(0deg)';
    tapaTwo.style.zIndex = '4000';
    btnTapaTwo.style.right = '';
    tapaTwo.onclick = openTapaTwo;
};

tapaTwo.onclick = openTapaTwo;

paperThree.onclick = function() {
    btnTapaTwo.style.right = '0';
};

paperFour.onclick = function() {
    btnTapaTwo.style.right = '';
};

btnTapaTwo.onclick = closeTapaTwo;