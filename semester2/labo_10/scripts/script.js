const input = document.getElementById("searchInput");
const button = document.getElementById("goButton");
const historyContainer = document.getElementById("history");
let historyArray = JSON.parse(localStorage.getItem("history")) || [];

const platforms = {
    "/g": { title: "Google", baseUrl: "https://www.google.com/search?q=", class: "google" },
    "/y": { title: "YouTube", baseUrl: "https://www.youtube.com/results?search_query=", class: "youtube" },
    "/x": { title: "X", baseUrl: "https://x.com/hashtag/", class: "x" },
    "/i": { title: "Instagram", baseUrl: "https://www.instagram.com/explore/tags/", class: "instagram" }
};

function createCard(entry) {
    const col = document.createElement("div");
    col.className = "col-md-6";

    const card = document.createElement("div");
    card.className = `card ${entry.class}`;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = entry.title;

    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = entry.text;

    const link = document.createElement("a");
    link.href = entry.url;
    link.target = "_blank";
    link.className = "btn btn-outline-primary";
    link.textContent = "Go!";

    cardBody.append(title, text, link);
    card.appendChild(cardBody);
    col.appendChild(card);
    historyContainer.prepend(col);
}

function updateLocalStorage() {
    localStorage.setItem("history", JSON.stringify(historyArray));
}

function handleSearch() {
    const inputValue = input.value.trim();
    const [command, ...queryParts] = inputValue.split(" ");
    const query = queryParts.join(" ");

    if (!platforms[command] || query === "") {
        alert("Ongeldig commando of lege zoekopdracht.");
        return;
    }

    let url = platforms[command].baseUrl + encodeURIComponent(query);
    if (command === "/x" || command === "/i") {
        url += "/";
    }

    const entry = {
        title: platforms[command].title,
        text: query,
        url: url,
        class: platforms[command].class
    };

    window.open(entry.url, "_blank");
    historyArray.push(entry);
    updateLocalStorage();
    createCard(entry);
    input.value = "";
}

// Voeg bestaande history toe bij het laden
historyArray.forEach(createCard);
button.addEventListener("click", handleSearch);
