const fetchBtn = document.getElementById("fetchBtn");
const statusDisplay = document.getElementById("statusDisplay");
const loader = document.getElementById("loader");
const retryBtn = document.getElementById("retryBtn");

const url = "https://api.example.com/"

fetchBtn.addEventListener("click", () => fetchData(url));
retryBtn.addEventListener("click", () => fetchData(url));

async function fetchWithRetry(callback, retries = 5, backoff = 5000) {
    for (let attempts = 0; attempts < retries; attempts++) {
        try {
            loader.classList.remove("hidden");
            statusDisplay.classList.add("hidden");
            return await callback();
        } catch (error) {
            if (attempts === retries - 1){
                loader.classList.add("hidden");
                statusDisplay.classList.remove("hidden");
            }
            const delay = backoff * Math.pow(2, attempts);    
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    };
}

async function fetchData(url) {
    try {
        const data = fetchWithRetry(() => fetch(url));
        console.log("Data fetched", data);
    } catch (error) {
        console.error(error.message);
    }
}
