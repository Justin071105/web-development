const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        document.getElementById("txtOutput").innerHTML = txtInput.value;
    }
    btnKopieer.addEventListener("click", kopieer);
    }
window.addEventListener("load", setup);