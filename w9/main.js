import { renderTbl } from "./render.js";
import { determineHouseHoldPts,determineHouseSizePts } from "./cfp.js"; 
import { FORM } from "./global.js";
import { saveLS, cfpData} from "./storage.js";

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
 
renderTbl(cfpData);

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
  if (firstName && lastName){
    start(firstName, lastName, houseMembers,houseSize);
    saveLS (cfpData);
    renderTbl(cfpData);
    FORM.reset();
  }
});



