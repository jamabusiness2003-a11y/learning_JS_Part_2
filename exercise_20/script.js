const searchInput = document.getElementById("search");
const table = document.getElementById("dynamicTable");
const pagination = document.getElementById("pagination");

const data = [
    { id: 101, name: "Hannah Brooks", role: "Data Scientist" },
    { id: 102, name: "Victor Alvarez", role: "Mechanical Engineer" },
    { id: 103, name: "Layla Hassan", role: "UX Designer" },
    { id: 104, name: "Ethan Clarke", role: "Cybersecurity Analyst" },
    { id: 105, name: "Maya Patel", role: "Pediatric Nurse" },
    { id: 106, name: "Oliver Schmidt", role: "Financial Advisor" },
    { id: 107, name: "Zara Ibrahim", role: "Content Strategist" },
    { id: 108, name: "Lucas Moreau", role: "Airline Pilot" },
    { id: 109, name: "Isabella Rossi", role: "Interior Designer" },
    { id: 110, name: "Marcus Johnson", role: "Project Manager" },
    { id: 111, name: "Daniel Kim", role: "Software Engineer" },
    { id: 112, name: "Sophia Nguyen", role: "Pharmacist" },
    { id: 113, name: "Liam O'Connor", role: "Civil Engineer" },
    { id: 114, name: "Ava Thompson", role: "Marketing Manager" },
    { id: 115, name: "Noah Dubois", role: "Game Developer" },
    { id: 116, name: "Chloe Martin", role: "Architect" },
    { id: 117, name: "Benjamin Lee", role: "AI Researcher" },
    { id: 118, name: "Amelia Garcia", role: "HR Specialist" },
    { id: 119, name: "William Brown", role: "Electrician" },
    { id: 120, name: "Emily Davis", role: "Journalist" },
    { id: 121, name: "James Wilson", role: "Police Officer" },
    { id: 122, name: "Charlotte Walker", role: "Graphic Designer" },
    { id: 123, name: "Alexander Young", role: "Dentist" },
    { id: 124, name: "Mia Hernandez", role: "Physiotherapist" },
    { id: 125, name: "Henry Scott", role: "Chef" },
    { id: 126, name: "Ella Green", role: "Environmental Scientist" },
    { id: 127, name: "Jack Turner", role: "Photographer" },
    { id: 128, name: "Grace Baker", role: "Speech Therapist" },
    { id: 129, name: "Samuel Carter", role: "Logistics Manager" },
    { id: 130, name: "Lily Adams", role: "Veterinarian" }
];


let state = { 
    isAscending: true,
    sortColumn: null,
    isMatching: false,
    currentPage: 1
};

const columnMap = {
    ID: "id",
    Name: "name",
    Profession: "role"
};

const TOTAL_ITEMS = data.length;
const ITEM_PER_PAGES = 5;

searchInput.addEventListener("input", filterRows);

table.addEventListener("click", (e) => {
    const columnKey = columnMap[e.target.textContent];

    if (!columnKey) return;

    state.isAscending = state.sortColumn === columnKey 
        ? !state.isAscending
        : true;
    
    state.sortColumn = columnKey;

    toggleSortIndicator(e.target);

    const sortedData = sortByColunm(data, columnKey, state.isAscending);
    renderTable(sortedData, state.currentPage);
});

function toggleSortIndicator(element) {
    const headers = table.querySelectorAll("th");

    headers.forEach(header => {
        header.classList.remove("sort-asc", "sort-desc");
    });

    element.classList.add(state.isAscending ? "sort-asc" : "sort-desc");
}

function renderTable(rows, currentPage) {
    const tbody = table.querySelector("tbody");
    const unorderedList = pagination.querySelector("ul"); 
    const pageData = paginate(rows, currentPage);
    const pageCount = Math.ceil(TOTAL_ITEMS / ITEM_PER_PAGES);
    
    tbody.innerHTML = "";
    unorderedList.innerHTML = "";

    pageData.forEach(({id, name, role}) => {
        const row = document.createElement("tr");
        
        [id, name, role].forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });

    for (let page = 1; page <= pageCount; page++) {
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = page;

        link.addEventListener("click", () => {
            state.currentPage = page;
            renderTable(rows, state.currentPage);
        });

        li.appendChild(link);
        unorderedList.appendChild(li);
    }
}

function sortByColunm(data, column, isAscending = true) {
    return data.sort((a, b) => {
        const valA = a[column];
        const valB = b[column];

        if (typeof valA === "number") {
            return isAscending
                ? valA - valB
                : valB - valA;
        }

        return isAscending
            ? String(valA).localeCompare(String(valB))
            : String(valB).localeCompare(String(valA));
    });
}

function filterRows() {
    const searchValue = searchInput.value.toLowerCase();
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(row => {
        state.isMatching = row.textContent.toLowerCase().includes(searchValue);

        row.classList.toggle("hidden", searchValue && !state.isMatching);
    });
}

function paginate(rows, currentPage) {
    const start = (currentPage - 1) * ITEM_PER_PAGES;
    const end = currentPage * ITEM_PER_PAGES;

    return rows.slice(start, end);  
}


renderTable(data, state.currentPage);