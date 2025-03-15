const setup = () => {

}
window.addEventListener("load", setup);
function vraagGemeenten() {
    let gemeenten = [];
    let invoer;

    while (true) {
        invoer = prompt("Voer een gemeente in (typ 'stop' om te beëindigen):");

        if (invoer === null || invoer.toLowerCase() === "stop") {
            break;
        }

        if (invoer.trim() !== "") {
            gemeenten.push(invoer.trim());
        }
    }

    // Sorteer alfabetisch
    gemeenten.sort();

    // Select element vullen
    let select = document.getElementById("gemeenten");
    select.innerHTML = '<option value="">-- Kies een gemeente --</option>'; // Reset opties

    gemeenten.forEach(gemeente => {
        let optie = document.createElement("option");
        optie.value = gemeente;
        optie.textContent = gemeente;
        select.appendChild(optie);
    });
}