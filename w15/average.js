import { cfpData } from "./storage.js";
import { TBL } from "./global.js";

const getAverageFP = () => {
    const totalArr = cfpData.map(cfpData => cfpData.total);
    const totalFP = totalArr.reduce((sum, len) => sum + len, 0);
    const averageFP = (totalFP / totalArr.length).toFixed(2);
    return averageFP;
}

function addAvgRow() {
    const avgFP = getAverageFP();

    // Insert a row at the end of the table
    let newRow = TBL.insertRow(-1);

    // Insert a cell in the row at index 0
    let newCell1 = newRow.insertCell(0);

    // Append a text node to the cell
    let newText1 = document.createTextNode(`Average Footprint: ${avgFP}`);
    newCell1.appendChild(newText1);
}

export { addAvgRow, getAverageFP }

