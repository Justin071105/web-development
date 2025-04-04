let personen = [];

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();

    let voornaam = document.getElementById("txtVoornaam").value.trim();
    let familienaam = document.getElementById("txtFamilienaam").value.trim();
    let geboorteDatum = document.getElementById("txtGeboorteDatum").value.trim();
    let email = document.getElementById("txtEmail").value.trim();
    let aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();

    if (voornaam && familienaam && geboorteDatum && email && aantalKinderen) {
        let persoon = { voornaam, familienaam, geboorteDatum, email, aantalKinderen };
        let lstPersonen = document.getElementById("lstPersonen");
        let selectedIndex = lstPersonen.selectedIndex;

        if (selectedIndex === -1) {
            personen.push(persoon);
        } else {
            personen[selectedIndex]= persoon;
        }

        updatePersonenLijst();
    }
};

const updatePersonenLijst = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = ""; // Lijst leegmaken

    personen.forEach((p, index) => {
        let option = document.createElement("option");
        option.text = `${p.voornaam} ${p.familienaam}`;
        option.value = index; // Index opslaan
        lstPersonen.appendChild(option);
    });

    lstPersonen.selectedIndex = -1;
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    document.getElementById("lstPersonen").selectedIndex = -1;
};

const verwijderPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let selectedIndex = lstPersonen.selectedIndex;

    if (selectedIndex !== -1) {
        personen.splice(selectedIndex, 1);

        updatePersonenLijst();

        bewerkNieuwePersoon();
    } else {
        alert("Selecteer een persoon om te verwijderen.");
    }
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let btnVerwijder = document.getElementById("btnVerwijder");
    btnVerwijder.addEventListener("click", verwijderPersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", () => {
        let selectedIndex = lstPersonen.selectedIndex;
        if (selectedIndex !== -1) {
            let persoon = personen[selectedIndex];

            document.getElementById("txtVoornaam").value = persoon.voornaam;
            document.getElementById("txtFamilienaam").value = persoon.familienaam;
            document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
            document.getElementById("txtEmail").value = persoon.email;
            document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
        }
    });
};

window.addEventListener("load", setup);