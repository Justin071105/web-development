const setup = () => {
    let colorDemo = document.querySelector(".colorDemo");

    let redSlider = document.getElementById("red");
    let greenSlider = document.getElementById("green");
    let blueSlider = document.getElementById("blue");

    let redValue = document.getElementById("redValue");
    let greenValue = document.getElementById("greenValue");
    let blueValue = document.getElementById("blueValue");

    const updateColor = () => {
        let r = redSlider.value;
        let g = greenSlider.value;
        let b = blueSlider.value;

        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;

        colorDemo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        console.log(`RGB: (${r}, ${g}, ${b})`);
    };

    // Event listeners toevoegen voor live updates
    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);

    // Start met de standaardwaarden
    updateColor();
};

window.addEventListener("load", setup);