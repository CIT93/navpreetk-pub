const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    TBL.innerHTML = "";
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

function renderTblBtn(index, data, FORM) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function (e) {
        console.log("Hello from inside the delete button");
        console.log(e);
        data.splice(index, 1);
        renderTbl(data);
    });
    btnEdit.addEventListener('click', function (e) {
        const obj = data[index];
        FORM.firstname.value = obj.firstName;
        FORM.lastname.value = obj.lastName;   
        FORM.housem.value = obj.houseM;      
        FORM.houses.value = obj.houseS;  
        data.splice(index, 1);
        renderTbl(data);
    })
    return td;
}

function renderTblBody(data,FORM) {
    const tbody = document.createElement("tbody");
    data.forEach(function (obj, index) {
        console.log(index);
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(obj)) {
            if (key !== "lastName" && key !== "houseHoldMPTS" && key !== "houseSPTS") {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
        }
        const td = renderTblBtn(index, data, FORM);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}


function renderTbl(data, FORM) {
    if (data.length === 0) {
        TBL.innerHTML = ""; 
        return; 
    }
    const table = renderTblHeading();
    const tbody = renderTblBody(data, FORM);
    table.appendChild(tbody);
    TBL.appendChild(table);
}

export { renderTbl };

