const listItemsEl = document.getElementById("listItems");
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");

const items = [
    "alpha","bravo","charlie","delta","echo","foxtrot","golf","hotel","india","juliet",
    "kilo","lima","mike","november","oscar","papa","quebec","romeo","sierra","tango",
    "uniform","victor","whiskey","xray","yankee","zulu","amber","beacon","cobalt","drift",
    "ember","fable","glimmer","harbor","ivory","jungle","karma","legend","matrix","nebula",
    "onyx","phoenix","quantum","ripple","shadow","tempest","utopia","vector","wander","zenith",
    "aster","blaze","crystal","dynamo","element","fusion","galaxy","horizon","inferno","jigsaw",
    "keystone","labyrinth","mirage","nexus","orbit","paradox","quasar","reactor","spectrum","titan",
    "ultra","vortex","wildfire","xenon","yonder","zephyr","anchor","binary","cascade","domain",
    "engine","fabric","gateway","helix","isotope","junction","kernel","lattice","module","network",
    "object","protocol","query","runtime","syntax","thread","utility","virtual","workflow","zone"
];

init();

function init() {
    handleEvents();
    render();
}

function handleEvents() {
    addBtn.addEventListener("click", addItem);

    listItemsEl.addEventListener("click", (e) => {
        if (e.target && e.target.tagName === "LI") {
            e.target.classList.add("completed");
        }
    });
}

function addItem() {
    const itemValue = itemInput.value.trim();
    if (!itemValue) return;

    items.push(itemValue);
    itemInput.value = "";
    render();
}

function render() {
    listItemsEl.replaceChildren();

    items.forEach(item => {
        const li = document.createElement("li");
        
        li.textContent = item;
        listItemsEl.appendChild(li);
    });
}