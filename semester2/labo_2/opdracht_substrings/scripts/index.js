const setup = () => {
     let tekstInput = document.getElementById("txtLinks");
     let getal1Input = document.getElementById("getal1");
     let getal2Input = document.getElementById("getal2");
     let btn = document.getElementById("btnSubstring"); // Knop om de substring te genereren

     const substring = () => {
          let tekst = tekstInput.value;
          let begin = parseInt(getal1Input.value);
          let eind = parseInt(getal2Input.value);

          // Controleer of de getallen geldig zijn
          if (isNaN(begin) || isNaN(eind) || begin < 0 || eind > tekst.length || begin > eind) {
               console.log("Ongeldige invoer!");
               return;
          }

          let resultaat = tekst.substring(begin, eind);
          console.log("Substring:", resultaat);
          document.getElementById("output").textContent = "Substring: " + resultaat;
     };

     btn.addEventListener("click", substring); // Start de functie als er op de knop wordt geklikt
};

window.addEventListener("load", setup);