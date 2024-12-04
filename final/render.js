import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

// render table heading
function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Budget", "FoodCost", "Time Available", "Suggestion", "Actions"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

const onUpdate = (index, data) => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

const renderTblBtn = (obj, index, data) => {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', e => {
        onUpdate(index, data);
    });
    btnEdit.addEventListener('click', e => {
        FORM[1].value = obj.setBudget;
        FORM[2].value = obj.diningCost;
        FORM[3].value = obj.time;
        onUpdate(index, data);
    })
    return td;
}

// render table body
function renderTblBody(data) {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
        const tr = document.createElement("tr");
        const keys = ["setBudget", "diningCost", "time", "diningSuggestion"];
        keys.forEach(key => {
            const td = document.createElement("td");
            td.textContent = obj[key];
            tr.appendChild(td);
        })
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

function renderTbl(data) {
    TBL.innerHTML = "";
    if (data.length !== 0) {
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
    }
}

export { renderTbl, renderTblHeading };