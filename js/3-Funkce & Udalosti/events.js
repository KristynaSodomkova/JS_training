// Funkce
function pozdrav () {
    console.log("Hello World");
}

//pozdrav()
function secti(cislo1, cislo2) {
    let soucet = cislo1 + cislo2;
    return soucet;
}

//console.log(secti(5, 8));
function obarviNaBarvu(vybranaBarva) {
    //získat element obdélníku
    let obdelnik = document.querySelector(".obdelnik");
    //obarvit na červenou
    obdelnik.style.backgroundColor = vybranaBarva;
}

//obarviNaCerveno();
// pak se do konzole dá také zadat obarviNaBarvu("rgb(34, 228, 202)")

function calculator() {
    let userNumber1 = prompt("Write your first number here: ");
    let number1 = parseInt(userNumber1);
    let operator = prompt("Write the operator: ");
    let userNumber2 = prompt("Write your second number here: ");
    let number2 = parseInt(userNumber2);
        if (operator === "+") {
            let result = number1 + number2;
            return alert("Your result is " + result);
        } else if (operator === "-") {
            let result = number1 - number2;
            return alert("Your result is " + result);
        } else if (operator === "*") {
            let result = number1 * number2;
            return alert("Your result is " + result);
        } else if (operator === "/") {
            let result = number1 / number2;
            return alert("Your result is " + result);
        } else {
            let result = "You have inserted a wrong operator.";
            return alert(result);
        }
}


// Události

let ctverec = document.querySelector(".ctverec");
let obdelnik = document.querySelector(".obdelnik");

/*ctverec.addEventListener("click", zaobli);

function zaobli() {
    ctverec.classList.toggle("kruh");
}*/

//s anonymní funkcí

ctverec.addEventListener("click", function() {
    ctverec.classList.toggle("kruh");
});

obdelnik.addEventListener("mouseenter", function() {
    obdelnik.style.backgroundColor = "#ff4242";
});

obdelnik.addEventListener("mouseleave", function() {
    obdelnik.style.backgroundColor = "white";
});

window.addEventListener("keydown", function(udalost) {
    if (udalost.key === " "){
        obdelnik.classList.toggle("otoc");
    }
    console.log(udalost.key);
});

