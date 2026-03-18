const searchInput = document.getElementById("searchInput");
const resultsDisplay = document.getElementById("results");
const spinner = document.getElementById("spinner");

const url = "https://jsonplaceholder.typicode.com/users";

let currentController = null;
let requestId = 0;

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    if (!query) {
        resultsDisplay.replaceChildren();
        return;
    }

    requestId++;
    fetchWithCancellation(e.target.value, requestId);
});

async function fetchWithCancellation(query, id) {

    spinner.classList.add("hidden");
    resultsDisplay.textContent = "";

    if (currentController) {
        currentController.abort();
    }

    currentController = new AbortController();

    try {

        spinner.classList.remove("hidden");

        const response = await fetch(`${url}?name_like=${query}`, 
            { signal: currentController.signal });

        if (!response.ok) {
            throw new Error("Request Failed");
        }

        const data = await response.json();
        spinner.classList.add("hidden");

        if (id !== requestId) return;

        displayResults(data);
        console.log("Data:", data);
        
    } catch (error) {
        if (error.name === "AbortError") {
            return;
        }

        spinner.classList.add("hidden");
        resultsDisplay.textContent = "Couldn't load the data.";
        console.error(error.message);
    }
}

function displayResults(users) {
    resultsDisplay.replaceChildren();

    if (users.length === 0) {
        resultsDisplay.textContent = "No users found."
    }

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        resultsDisplay.appendChild(li);
    });

}