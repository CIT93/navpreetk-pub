import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT, WC, BOTH } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

renderTbl(cfpData);

//  Function to validate a single field
const validateField = (event) => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

// Attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

WC.addEventListener("change", e => {
  if(parseInt(WC.value) === 0) {
    BOTH.disabled = true;
  } else {
    BOTH.disabled = false;
  }
});

const determineRecycleItems = e => {
  const numberChecked = document.querySelectorAll('.recycle:checked').length
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    aluminum: e.target.aluminum.checked,
    steel: e.target.steel.checked,
    food: e.target.foodW.checked,
    recyclePoints: (24-(numberChecked * 4))
  }
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
 //  const recycleObj = determineRecycleItems(e);
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = " ";
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.food.value,
      e.target.foodSource.value,
      e.target.water.value,
      e.target.dish_washer.checked ? parseInt(e.target.water.value) * 2 : parseInt(e.target.water.value),
      e.target.dish_washer.checked,
      parseInt(e.target.hPurchases.value),
      parseInt(e.target.waste.value),
      determineRecycleItems(e),
      parseInt(e.target.personalVehicle.value),
      parseInt(e.target.publicTrans.value),
      parseInt(e.target.flights.value)
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
    BOTH.disabled = false; 
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
});
