const listItems = document.getElementById("listItems");
const items = [...document.querySelectorAll("li")];

let draggedItem = null;

items.forEach(item => {
    item.draggable = true;
    
    item.addEventListener("dragstart", () => {
        draggedItem = item;
    });

    item.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    item.addEventListener("drop", (e) => {
        e.preventDefault();

        const tempPlaceHolder = document.createElement("div");

        draggedItem.replaceWith(tempPlaceHolder);
        item.replaceWith(draggedItem);
        tempPlaceHolder.replaceWith(item);

        saveOrder();
    });
});

function saveOrder() {
    const order = [...listItems.children].map(item => item.id);
    localStorage.setItem("drag_drop", JSON.stringify(order));
}

function loadOrder() {
    const saveOrder = JSON.parse(localStorage.getItem("drag_drop"));
    if (!saveOrder) return;

    saveOrder.forEach(id => {
        const item = document.getElementById(id);
        listItems.appendChild(item);
    });
}

loadOrder();
