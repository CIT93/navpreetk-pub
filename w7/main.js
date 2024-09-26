import { renderTbl } from "./render.js";
import { determineHouseHoldPts,determineHouseSizePts } from "./cfp.js";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const cfpData = [];

function start(first, last, houseMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
        firstName: first,
        lastName: last,
        houseM: houseMembers,
        houseS: houseSize,
        houseHoldMPTS: houseHoldPTS,
        houseSPTS: houseSizePTS,
        cfpTotal: total,
    });
}

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(firstName, lastName, houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    //displayOutput();
    renderTbl(cfpData);
    FORM.reset();
});

