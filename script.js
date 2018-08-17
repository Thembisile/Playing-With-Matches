function randomNumber(highest){
    return Math.floor(Math.random() * Math.floor(highest));
}
console.log(randomNumber());

let domNumber = document.querySelector('.ANY');
let domNumber2 = document.querySelector('.number2');
let domNumber3 = document.querySelector('.number3');

domNumber.innerHTML = randomNumber(10);
domNumber2.innerHTML = randomNumber(10);
domNumber3.innerHTML = randomNumber(10);