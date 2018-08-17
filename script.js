function randomNumber() {
    return Math.ceil(Math.random() * 10);
}

let elems = document.querySelectorAll('.any');
let displayElem = document.querySelector('.display');

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    element.innerHTML = randomNumber(); 
}