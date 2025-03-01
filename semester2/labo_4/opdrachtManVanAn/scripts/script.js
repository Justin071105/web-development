const setup = () => {
    const tekst = "De man van An geeft geen hand aan ambetante verwanten";
    const sequence = "an";

    const telSequentieMetIndexOf = (text, sequence) => {
        let count = 0;
        let index = text.indexOf(sequence);

        while (index !== -1) {
            count++;
            index = text.indexOf(sequence, index + 1);
        }

        return count;
    };

    const telSequentieMetLastIndexOf = (text, sequence) => {
        let count = 0;
        let index = text.lastIndexOf(sequence);

        while (index !== -1) {
            count++;
            index = text.lastIndexOf(sequence, index - 1);
        }

        return count;
    };

    console.log("Aantal keer 'an' (indexOf):", telSequentieMetIndexOf(tekst, sequence));
    console.log("Aantal keer 'an' (lastIndexOf):", telSequentieMetLastIndexOf(tekst, sequence));
};

window.addEventListener("load", setup);
