const setup = () => {
    let tekst = document.getElementById("btnClick");
    let pElement = document.getElementById("txtOutput");

    let functie = () => {
        pElement.innerHTML = "Welkom!";
    }

    tekst.addEventListener('click', functie);
}

window.addEventListener("load", setup);