// Pole k úkolu
let postavy = ["Asterix", "Obelix", "Caesar", "Idefix", "Panoramix", "Alfabetix",
"Caius Bonus", "Gaius Papulus", "Kleopatra", "Archaix", "Lapiduchus", "Lovestorix",
"Lucius Detritus", "Marcus Junius Brutus", "Numerobis", "Tojehnus", "Amonbofis",
"Caius Antivirus", "Caligula Minus", "Falbala", "Oceanix", "Kovomatix", "Trubadix"];

let falbala = postavy.indexOf("Falbala");
let poradiFalbala = falbala + 1;
//let majestatix = postavy.indexOf("Majestátix");

if (postavy.indexOf("Majestátix") === -1) {
    console.log("Majestátix opravdu není na seznamu.");
} else {
    console.log("Majestátix je na seznamu.");
}

if (postavy.indexOf("Falbala") === -1) {
    console.log("Falbala opravdu není na seznamu.");
} else {
    console.log("Falbala je " + poradiFalbala + ". na seznamu.");
}



for (let i = 0; i < postavy.length; i++) {
    let soucasnaPostava = postavy[i];
    console.log(soucasnaPostava);
}


/////////////////////////////////
//////* Zde piš svůj kód *//////

/*
let pole = [25, "Ahoj", false, "Asterix"];

//vypsat prvek z pole:
console.log(pole[3]);

//přepis prvku v poli:
pole[2] = true; 

//vypsat celé pole:
console.log(pole);

//přidání prvku na konec:
pole.push("Obelix");

//přidání prvku na začátek pole:
pole.unshift("Panoramix");

// přidání více prvků do pole:
pole.push("říman", "říman", "říman");

//odstranění posledního prvku z pole:
pole.pop();

//uložení odstraněné položky z pole do proměnné:
let riman = pole.pop();
console.log(riman);

//smazání první položky z pole:
let panoramix = pole.shift();
console.log(panoramix);
console.log(pole);

//vyhledání prvku v poli, okud tam prvek není, vypíše konzole hodnotu -1:
console.log(pole.indexOf(false));
console.log(pole.indexOf("Asterix"));
*/