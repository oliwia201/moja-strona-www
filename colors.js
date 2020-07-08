const red = document.querySelector('.red');
const maritime = document.querySelector('.maritime');
const brightGreen = document.querySelector('.bright-green');
const purple = document.querySelector('.purple');
const blue = document.querySelector('.blue');
const pink = document.querySelector('.pink');

function changeColor(){
    document.body.className = this.className;
}

red.addEventListener('click', changeColor);
maritime.addEventListener('click', changeColor);
brightGreen.addEventListener('click', changeColor);
purple.addEventListener('click', changeColor);
blue.addEventListener('click', changeColor);
pink.addEventListener('click', changeColor);

