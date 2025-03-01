const setup = () => {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");

    const updateColorB1 = () => {
        if (button1.style.backgroundColor === "white") {
            button1.style.backgroundColor = "red";
        }
        else {
            button1.style.backgroundColor = "white";
        }
    }
    const updateColorB2 = () => {
        if (button2.style.backgroundColor === "white") {
            button2.style.backgroundColor = "blue";
        }
        else {
            button2.style.backgroundColor = "white";
        }
    }
    const updateColorB3 = () => {
        if (button3.style.backgroundColor === "white") {
            button3.style.backgroundColor = "green";
        }
        else {
            button3.style.backgroundColor = "white";
        }
    }
    button1.addEventListener("click", updateColorB1);
    button2.addEventListener("click", updateColorB2);
    button3.addEventListener("click", updateColorB3);

}


window.addEventListener("load", setup);