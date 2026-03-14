const loadBtn = document.getElementById("loadBtn");
const resultsContainer = document.getElementById("resultsContainer");
const timeline = document.getElementById("timeline");

const url = "https://jsonplaceholder.typicode.com";

loadBtn.addEventListener("click", async () => {
    timeline.innerHTML = "";

    const parallelPerformance = await mesurePerformance(parallelFetch);
    const sequentialPerformance = await mesurePerformance(sequentialFetch);

    displayCompletionTime(parallelPerformance, sequentialPerformance);
});

async function sequentialFetch() {

    const userResponse = await fetch(url + "/users/1");
    const userData = await userResponse.json();

    const postsResponse = await fetch(url + `/posts?userId=${userData.id}`);
    const postsData = await postsResponse.json();

    addTimelineBar(150);

    return {userData, postsData};
}

async function parallelFetch() {
    const userPromise = fetch(url + "/users/1");
    const postsPromise = fetch(url + "/posts");  

    const [userResponse, postsResponse] = await Promise.all([userPromise, postsPromise]);

    const userData = await userResponse.json();
    const postsData = await postsResponse.json();

    addTimelineBar(50);

    return {userData, postsData};
}

function displayCompletionTime(leftTime, rightTime) {
    const results = [...resultsContainer.children];

    results.forEach(result => {
        if (result.classList.contains("left-result")) {
            const leftP = result.querySelector("p");
            leftP.textContent = `Execution time: ${leftTime} milliseconds`;
        }

        if (result.classList.contains("right-result")) {
            const rightP = result.querySelector("p");
            rightP.textContent = `Execution time: ${rightTime} milliseconds`;
        }
    });
}

function addTimelineBar(width) {
    const bar = document.createElement("div");
    bar.classList.add("timeline-bar");

    bar.style.width = width + "px";
    timeline.appendChild(bar);
}

async function mesurePerformance(func) {
    const startTime = performance.now();

    const dataObject = await func();

    const endTime = performance.now();

    console.log("All Data : ", dataObject);

    const duration = (endTime - startTime).toFixed(2);
    return duration;
}