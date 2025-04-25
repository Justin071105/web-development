

const storeSliderValues = () => {
    const sliders = {
        red: document.getElementById('sldRed').value,
        green: document.getElementById('sldGreen').value,
        blue: document.getElementById('sldBlue').value
    };

    const jsonText = JSON.stringify(sliders);
    localStorage.setItem('sliderValues', jsonText);
};

const restoreSliderValues = () => {
    const jsonText = localStorage.getItem('sliderValues');
    if (jsonText) {
        const sliders = JSON.parse(jsonText);

        document.getElementById('sldRed').value = sliders.red;
        document.getElementById('sldGreen').value = sliders.green;
        document.getElementById('sldBlue').value = sliders.blue;

    }

    update();
};


const storeSwatches = () => {
    let swatches = document.querySelectorAll('.swatch:not(#swatch)');
    let swatchData = [];

    swatches.forEach(swatch => {
        let red = swatch.getAttribute("data-red");
        let green = swatch.getAttribute("data-green");
        let blue = swatch.getAttribute("data-blue");

        swatchData.push({ red, green, blue });
    });

    localStorage.setItem('swatches', JSON.stringify(swatchData));
};


const restoreSwatches = () => {
    const jsonText = localStorage.getItem('swatches');
    if (jsonText) {
        const swatches = JSON.parse(jsonText);
        const swatchesContainer = document.getElementById('swatchComponents');
        swatchesContainer.innerHTML = '';

        swatches.forEach(({ red, green, blue }) => {
            addSwatchComponent(red, green, blue);
        });
    }
};



