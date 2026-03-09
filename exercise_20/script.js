const searchInput = document.getElementById("search");
const table = document.getElementById("dynamicTable");
const pagination = document.getElementById("pagination");

const tbody = table.querySelector("tbody");
const paginationList = pagination.querySelector("ul");

const ITEMS_PER_PAGE = 5;

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

const columnMap = {
    ID: "id",
    Name: "name",
    Profession: "role"
};

const state = { 
    isAscending: true,
    sortColumn: null,
    currentPage: 1,
    searchTerm: ""
};


searchInput.addEventListener("input", handleSearch);
table.addEventListener("click", handleSort);



function handleSearch(e) {
    state.searchTerm = e.target.value.toLowerCase();
    state.currentPage = 1;
    update();
}

function handleSort(e) {
    const column = columnMap[e.target.textContent];

    if (!column) return;

    state.isAscending = 
        state.sortColumn === column ? !state.isAscending : true;

    state.sortColumn = column;

    toggleSortIndicator(e.target);
    update();
}

function update() {
    let processed = [...data];

    processed = filterData(processed, state.searchTerm);

    if (state.sortColumn) {
        processed = sortData(processed, state.sortColumn, state.isAscending);
    }

    const pageCount = Math.ceil(processed.length / ITEMS_PER_PAGE);
    const pageData = paginateData(processed, state.currentPage);

    renderRows(pageData);
    renderPagination(pageCount);
}

function filterData(rows, searchTerm) {
    if (!searchTerm) return rows;

    return rows.filter(row => 
        Object.values(row)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm)
    );
}

function sortData(rows, column, isAscending) {
    return [...rows].sort((a, b) => {
        const valA = a[column];
        const valB = b[column];

        if (typeof valA === "number") {
            return isAscending ? valA - valB : valB - valA;
        }

        return isAscending
            ? String(valA).localeCompare(String(valB))
            : String(valB).localeCompare(String(valA));
    });
}

function paginateData(rows, currentPage) {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return rows.slice(start, start + ITEMS_PER_PAGE);
}

function renderRows(rows) {
    tbody.innerHTML = "";

    rows.forEach(({id, name, role}) => {
        const tr = document.createElement("tr");
        
        [id, name, role].forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}

function renderPagination(pageCount) {
    paginationList.innerHTML = "";

    for (let page = 1; page <= pageCount; page++) {
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = page;

        if (page === state.currentPage) {
            link.classList.add("active");
        }

        link.addEventListener("click", () => {
            state.currentPage = page;
            update();
        });

        li.appendChild(link);
        paginationList.appendChild(li);
    }
}

function toggleSortIndicator(element) {
    const headers = table.querySelectorAll("th");

    headers.forEach(header => {
        header.classList.remove("sort-asc", "sort-desc");
    });

    element.classList.add(state.isAscending ? "sort-asc" : "sort-desc");
}

update();