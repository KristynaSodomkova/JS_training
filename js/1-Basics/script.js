// console.log("Hello world!!!");

let vek=84;

let jmeno;
jmeno = "Panoramix";

// alert("Jmeuji se " + jmeno + " a je mi " + vek + " let.");

/* let asterixuvVek = prompt("Zadej Asterixův věk");

console.log(asterixuvVek);

let asterixVaha = 55;
let obelixVaha = 55;

if (asterixVaha > obelixVaha) {
    console.log("Asterix je těžší než Obelix");
} else if (asterixVaha < obelixVaha) {
    console.log("Obelix je těžší než Asterix");
} else {
    console.log("Oba dva váží stejně");
}*/

let asterixVek = 26;
let obelixVek = 28;
let panoramixVek = 84;

//let aoVek = asterixVek + obelixVek;

/*if (asterixVek + obelixVek > panoramixVek) {
    console.log("Součet věku Asterixe a Obelixe je větší než věk Panoramixe.");
} else if (asterixVek + obelixVek < panoramixVek) {
    console.log("Panoramix je starší než oni oba dohromady.");
} else {
    console.log("Jsou stejně staří.");
}*/

/*for (let i=1; i < 5; i++) {
    console.log(i + ". říman");
}*/

/*let opakuj = true;
while (opakuj) {
    let hod = Math.ceil(Math.random() * 6);
    console.log(hod);

    if (hod == 6) {
        opakuj = false
    }
}*/

/*for (let i=10; i > 0; i = i - 1) {
    console.log(i);
}*/

let zacatek = 5;
let konec = 20;

for (let i=zacatek; i < 21; i++) {
    let zbytek = i%2;
    if (zbytek == 0)
        console.log(i);
}