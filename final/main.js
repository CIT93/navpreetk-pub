import { FORM } from "./global.js";
import { renderTbl } from "./render.js";
import { saveLS, diningDecisionData } from "./storage.js";
import { DiningRec } from "./diningRec.js";

renderTbl(diningDecisionData);

// Function to validate a single field
const validateField = function (event) {
    const field = event.target;
    const fieldId = field.id;
    const fieldError = document.getElementById(`${fieldId}Error`);
    const fieldValue = field.value.trim();

    if (fieldValue === "") {
        fieldError.textContent = `Invalid ${fieldId}`;
        fieldError.style.display = "inline";
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
};

FORM.setbudget.addEventListener('blur', validateField);
FORM.diningcost.addEventListener('blur', validateField);
FORM.timeavailable.addEventListener('blur', validateField);

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    if (parseFloat(FORM.diningcost.value) > 0 && parseFloat(FORM.setbudget.value) > 0) {
        submitError.textContent = ' ';
        const DiningRecObj = new DiningRec(parseFloat(FORM.setbudget.value), parseFloat(FORM.diningcost.value), FORM.timeavailable.value);
        diningDecisionData.push(DiningRecObj);
        saveLS(diningDecisionData);
        renderTbl(diningDecisionData);
        FORM.reset();
    } else {
        submitError.textContent = "Food cost and budget must be greater than 0.";
    }
});