const tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
const oudWoord = "de";
const nieuwWoord = "het";

let i = 0;
let resultaatTekst = "";

while (i < tekst.length) {
    let index = tekst.indexOf(oudWoord, i);

    // Als "de" niet meer voorkomt, voeg de rest van de tekst toe en stop de lus
    if (index === -1) {
        resultaatTekst += tekst.substring(i);
        console.log(resultaatTekst); // Output van het laatste stuk
        break;
    }

    // Controleer of "de" een losstaand woord is
    let voorChar = index === 0 ? " " : tekst[index - 1]; // Teken vóór "de"
    let naChar = index + oudWoord.length === tekst.length ? " " : tekst[index + oudWoord.length]; // Teken na "de"

    let isVoorValid = /\s|[.,!?]/.test(voorChar);
    let isNaValid = /\s|[.,!?]/.test(naChar);

    if (isVoorValid && isNaValid) {
        resultaatTekst += tekst.substring(i, index) + nieuwWoord;
        i = index + oudWoord.length;
    } else {
        resultaatTekst += tekst.substring(i, index + oudWoord.length);
        i = index + oudWoord.length;
    }

    console.log(resultaatTekst); // Gaandeweg output geven
}
