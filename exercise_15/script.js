const cardGrid = document.querySelector(".card-grid");
const movesEl = document.getElementById("moves");
const timerEl = document.getElementById("timer");

let cardValues = [
    '@', '@', '/', '/', '$', 
    '$', '%', '%', '&', '&', 
    '*', '*', '(', '(', '¤',
    '¤', '=', '=', '+', '+'
];

let flippedCards = [];
let completedCards = [];
let lockBoard = false;
let isMatching = false;
let move = 0;
let totalTimes = 0;
let intervalId = null;


cardGrid.addEventListener("click", (e) => {
    const clickedCard = e.target.closest(".card");

    if (lockBoard) return;
    if (!clickedCard) return;
    
    if (clickedCard) {
        if (clickedCard.classList.contains("flipped")) return;

        clickedCard.classList.add("flipped");
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            move++;
            updateMoves();
            lockBoard = true;
            checkMatches();
        }

        completeGame();
    }
});



function checkMatches() {
    const firstCardBack = flippedCards[0].querySelector(".card-back");
    const secondCardBack = flippedCards[1].querySelector(".card-back");

    const firstCardValue = firstCardBack.dataset.cardValue;
    const secondCardValue = secondCardBack.dataset.cardValue;

    if (firstCardValue === secondCardValue) {
        completedCards.push(flippedCards[0], flippedCards[1]);
        isMatching = true; 
        resetBoard();
    } else {
        setTimeout(() => {
            flippedCards[0].classList.remove("flipped");
            flippedCards[1].classList.remove("flipped");
            resetBoard();
        }, 1000);
        isMatching = false;
       
    }

    if (isMatching) {
        setTimeout(() => {
            firstCardBack.classList.add("matching");
            secondCardBack.classList.add("matching");
        }, 1000);
    }
}

function updateTimer() {
    const mins = Math.floor(totalTimes / 60); 
    const secs = totalTimes % 60;
    const formatMins = String(mins).padStart(2, "0"); 
    const formatSecs = String(secs).padStart(2, "0");

    timerEl.textContent = `${formatMins}:${formatSecs}`;
}

function updateMoves() {
    movesEl.textContent = `Moves: ${move}`;
}

function resetBoard() {
    flippedCards = [];
    lockBoard = false;
}

function completeGame() {
    if (completedCards.length === cardValues.length) {
        setTimeout(() => {
            flippedCards = [];
            completedCards = [];
            lockBoard = false;
            isMatching = false;
            move = 0;
            totalTimes = 0;

            const newShuffled = shuffleArray(cardValues);
            updateMoves();
            clearInterval(intervalId);
            updateTimer();
            renderGame(newShuffled);
        }, 3000);
    }
}

function renderGame(shuffleArray) {
    cardGrid.innerHTML = "";

    shuffleArray.forEach(cardValue => {
        // Create Cards
        const card = document.createElement("div");
        const cardInner = document.createElement("div");
        const cardFront = document.createElement("div");
        const cardBack = document.createElement("div");

        card.classList.add("card");
        cardInner.classList.add("card-inner");  
        cardFront.classList.add("card-front");  
        cardBack.classList.add("card-back");

        cardFront.textContent = "?";

        cardBack.dataset.cardValue = cardValue;
        cardBack.textContent = cardValue;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);

        card.appendChild(cardInner);
        cardGrid.appendChild(card);
    });

    intervalId = setInterval(() => {
        totalTimes++;
        updateTimer();
    }, 1000);
}


function shuffleArray(array) {
    // Create a copy of the array
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        // Swaping cards
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

renderGame(shuffleArray(cardValues));
