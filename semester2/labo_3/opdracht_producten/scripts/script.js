const setup = () => {
    let rows = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    let button = document.getElementsByTagName("input")[document.getElementsByTagName("input").length - 1];


    const updateSubtotal = (row) => {
        let price = parseFloat(row.getElementsByClassName("price")[0].textContent.replace(" EUR", ""));
        let btw = parseFloat(row.getElementsByClassName("btw")[0].textContent.replace("%", "")) / 100;
        let quantity = parseInt(row.getElementsByTagName("input")[0].value) || 0;

        let subtotal = quantity * price * (1 + btw);
        row.getElementsByClassName("output")[0].textContent = subtotal.toFixed(2);
    };

    const updateTotal = () => {
        let total = 0;

        for (let i = 0; i < rows.length; i++) {
            updateSubtotal(rows[i]); // Eerst alle subtotals berekenen
            let outputCell = rows[i].getElementsByClassName("output")[0];
            if (outputCell) {
                total += parseFloat(outputCell.textContent) || 0;
            }
        }
        document.getElementsByClassName("total")[0].textContent = total.toFixed(2);
    };


    button.addEventListener("click", updateTotal);
};

window.addEventListener("load", setup);