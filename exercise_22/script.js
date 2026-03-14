const fetchBtn = document.getElementById("fetchBtn");
const spinner = document.getElementById("spinner");
const statusText = document.getElementById("statusText");

const url = "https://jsonplaceholder.typicode.com/posts/1/"

fetchBtn.addEventListener("click", () => {
    fetchWithRetry(url);
});


async function fetchWithRetry(url, retries = 5, delay = 1000) {
    statusText.parentElement.classList.remove("error-box");

    try {

        spinner.classList.remove("hidden");
        statusText.textContent = "Loading...";

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Request Failed");
        }

        const data = await response.json();

        spinner.classList.add("hidden");
        statusText.textContent = `Success: ${data.title}`

    } catch (error) {

        if (retries > 0) {

            statusText.textContent = `Retry... Attempts left: ${retries}`;
        
            await wait(delay);

            return fetchWithRetry(url, retries - 1, delay * 2);   
        } else {
            spinner.classList.add("hidden");
            displayErrorBox();
        }
    }
}


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayErrorBox() {
    statusText.textContent = "⚠️ Failed to load data.";
    statusText.parentElement.classList.add("error-box");
}