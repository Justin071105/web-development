const setup = () => {
let globaleVariabelen= {
    input : document.getElementById('getal'),
    goBtn : document.getElementById('goBtn'),
    container : document.getElementById('tafelsContainer'),
    label : document.querySelector("label[for='getal']")
}
    // Zorg dat klik op label de focus naar input zet
    globaleVariabelen.label.addEventListener("click", () => {
        globaleVariabelen.input.focus();
    });

    // Klik op Go-button
    globaleVariabelen.goBtn.addEventListener("click", () => {
        const waarde = parseInt(globaleVariabelen.input.value.trim());

        if (isNaN(waarde) || waarde === null) {
            alert("Gelieve een geldig getal in te voeren.");
            return;
        }

        const getal = waarde;
        const tijd = new Date();
        const tijdStr = tijd.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        const tafelDiv = document.createElement("div");
        tafelDiv.classList.add("tafel");

        const header = document.createElement("div");
        header.classList.add("tafel-header");
        header.innerText = `Tafel van ${getal} aangemaakt op: ${tijdStr}`;
        tafelDiv.appendChild(header);

        for (let i = 1; i <= 10; i++) {
            const rij = document.createElement("div");
            rij.classList.add("tafel-rij");
            if (i % 2 === 0) rij.classList.add("even");
            rij.innerText = `${getal} x ${i} = ${getal * i}`;
            tafelDiv.appendChild(rij);
        }

        globaleVariabelen.container.appendChild(tafelDiv);

        globaleVariabelen.input.value = "";
        globaleVariabelen.input.focus();
    });
};

window.addEventListener("load", setup);
