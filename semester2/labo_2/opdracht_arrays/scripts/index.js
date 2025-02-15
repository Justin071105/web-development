const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}
window.addEventListener("load", setup);

const namen = ["Justin", "Pol", "Henk", "Jan", "Piet"];
console.log(namen.length);
console.log(namen[0] + namen[2] + namen[4] );


function VoegNaamToe(array) {
    let nieuweNaam = prompt("Voer een extra familienaam in:");
    if (nieuweNaam) {
        array.push(nieuweNaam);
    }
}
VoegNaamToe(namen);
console.log(namen);
console.log(namen.toString());