import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const start = (first = "defaultFN", last = "defaultLN", houseMembers = 1, houseSize = "small",...cfpInputs) => {  
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
    //extraInputs: cfpInputs,
  });

  console.log(cfpInputs);
}

renderTbl(cfpData);

//  Function to validate a single field
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  } else {
    fieldError.textContent = '';
    event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

FORM.addEventListener('submit', e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = ' ';
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value,"extraInput1", 2);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
});

// rest operator 
// const add2 = function(...a) {
//   return 2 + a[3];
// }

// const result = add2(1,2,3,4);

// arrow function
const add2 = a => 2 + a;


const result = add2(100);

//IIFE

const a = 3;

(function(a){
  console.log("inside IIFE");
  console.log(a);
})(a);

