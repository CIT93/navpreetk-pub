const TBL = document.getElementById("tab-data");


function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

function renderTbl(data) {
    //const table = renderTblHeading();
    let table = TBL.querySelector("table");

    if (!table) {
        table = renderTblHeading();
        TBL.appendChild(table);
    }

    const existingTbody = table.querySelector("tbody");
    if (existingTbody) {
        table.removeChild(existingTbody);
    }
    const tbody = document.createElement("tbody");

    data.forEach(function (text) {
        console.log(text);
        const tr = document.createElement("tr");

        const selectedData = [text.firstName, text.houseM, text.houseS, text.cfpTotal];
        selectedData.forEach(function (text2) {
            const td = document.createElement("td");
            td.textContent = text2;
            tr.appendChild(td);
        });
        const td = document.createElement("td");
        const btnEdit = document.createElement("button");
        const btnDel = document.createElement("button");
        btnEdit.textContent = "Edit";
        btnDel.textContent = "Del";

        td.appendChild(btnEdit);
        td.appendChild(btnDel);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
}

export { renderTbl, renderTblHeading };

