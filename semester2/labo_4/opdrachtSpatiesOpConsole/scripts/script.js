const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }

    return result.trim(); // Zorgt ervoor dat er geen extra spatie op het einde staat
};

const setup = () => {
    let inputField = document.getElementById('string');
    let button = document.getElementById('button');

    button.addEventListener('click', () => {
        let inputText = inputField.value; // Haal de tekst uit het invoerveld
        let output = maakMetSpaties(inputText); // Roep de functie aan
        console.log(output); // Toon de bewerkte tekst in de console
    });
};

window.addEventListener("load", setup);