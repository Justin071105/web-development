const setup = () => {
    window.alert("Wat is uw naam?");
    let bevestiging = window.confirm("Weet u het zeker?");
    console.log(bevestiging)
    let naam = window.prompt("Wat is uw naam?","onbekend");
    console.log(naam);
}

window.addEventListener("load", setup);
