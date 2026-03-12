const searchInput = document.getElementById("search");
const resultList = document.getElementById("resultList");
const loading = document.getElementById("loading");

const items = [
    "apple", "banana", "mango", "orange", "strawberry",
    "pineapple", "grape", "watermelon", "peach", "kiwi"
];

const TIMEOUT_DELAY = 500;

const debounceSearch = debounce(handleSearch, TIMEOUT_DELAY);
const throttleSearch = throttle(handleSearch, TIMEOUT_DELAY);

searchInput.addEventListener("input", debounceSearch);

function handleSearch(e) {
    const searchValue = e.target.value.toLowerCase();

    let filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchValue) 
    );

    renderResult(filteredItems);
}

function debounce(callback, delay) {
    let timeoutId;
   
    return (...args) => {
        clearTimeout(timeoutId);
        loading.classList.remove("hidden");
        timeoutId = setTimeout(() => {
            callback.apply(this, args);
            loading.classList.add("hidden");
        }, delay);
    };
}

function throttle(callback, delay) {
    let lastCall = 0;

    return (...args) => {
        const now = new Date().getTime();

        if (now - lastCall >= delay) {
            lastCall = now;
            callback.apply(this, args);
        }
    };
}

function renderResult(items) {
    resultList.replaceChildren();

    items.forEach(item => {
        const li = document.createElement("li");

        li.textContent = item;

        resultList.appendChild(li);
    });
}

renderResult(items);