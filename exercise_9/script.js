const quoteEl = document.getElementById("quote");
const randQuoteBtn = document.getElementById("randQuoteBtn");

const quotes = [
    "“You don’t find yourself—you build yourself, one decision at a time.”", 
    "“The version of you that started would be proud of the version that stayed.”", 
    "“Small habits are quiet architects of loud futures.”", 
    "“Your fear is just your potential wearing a mask.”", 
    "“Growth feels like confusion before it feels like clarity.”", 
    "“Not everything that slows you is stopping you.”", 
    "“You can outgrow places without hating where you came from.”", 
    "“Discipline is self-respect in motion.”", 
    "“Even storms need somewhere to pass through.”", 
    "“You are allowed to rewrite the rules you were taught.”"
];

let previousIndex; 

randQuoteBtn.addEventListener("click", getRandQuote);

function getRandQuote() {
    const quotesLength = quotes.length;
    let randIndex;
   
    do {
        randIndex = Math.floor(Math.random() * quotesLength);
    } while (previousIndex === randIndex);

    previousIndex = randIndex;

    quoteEl.classList.add("fade-out");

    setTimeout(() => {
        quoteEl.textContent = quotes[randIndex];
        quoteEl.classList.remove("fade-out");
    }, 400);
    

}
