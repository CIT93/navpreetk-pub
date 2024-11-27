import { cfpData } from "./storage.js";

const getAverageFP = () => {
    const totalArr = cfpData.map(cfpData => cfpData.total);
    const totalFP = totalArr.reduce((sum, len) => sum + len, 0);
    const averageFP = (totalFP / totalArr.length).toFixed(0);
    return averageFP;
}

function addAvgRow() {
    const avgFP = getAverageFP();

    const tableRef = document.getElementById("table-id");

    // Insert a row at the end of the table
    const newRow = tableRef.insertRow(-1);

    // Insert a cell 
    let newCell = newRow.insertCell(0);
    newCell.colSpan = 5;

    // Append a text node to the cell
    let newText1 = document.createTextNode(`Average Footprint: ${avgFP}`);
    newCell.appendChild(newText1);
}

export { addAvgRow, getAverageFP }

