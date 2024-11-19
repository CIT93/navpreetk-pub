import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";
import { addAvgRow } from "./average.js";

const renderTblHeading = () => {
    // TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Food Choice", "Footprint", "Actions"];
    headingTextArr.forEach(text => {
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
        FORM.firstname.value = obj.first;
        FORM.lastname.value = obj.last;
        FORM.housem.value = obj.houseMembers;
        FORM.houses.value = obj.houseSize;
        FORM.food.value = obj.foodChoice;
        onUpdate(index, data);
    })
    return td;
}

const renderTblBody = data => {
    const tbody = document.createElement("tbody");   
    data.forEach((obj, index) => {
        const tr = document.createElement("tr");
        const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"]
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

const renderTbl = data => {
    TBL.innerHTML = "";
    if (data.length !== 0) {
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
        addAvgRow("tab-data");
    }
}

export { renderTbl };

