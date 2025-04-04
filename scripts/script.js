document.addEventListener("DOMContentLoaded", function() {
    const labos = document.querySelectorAll("ul > li");

    labos.forEach(labo => {
        labo.addEventListener("click", function() {
            const ol = this.querySelector("ol");
            if (ol) {
                ol.classList.toggle("active");
            }
        });
    });
});
