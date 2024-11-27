import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
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

const WC = document.getElementById("water");
const DW = document.getElementById("dishAndWasher");

function waterCheck() {
  WC.value === "0" ? (DW.checked = false, DW.disabled = true) : (DW.disabled = false)

  // if (WC.value === "0") {
  //   DW.checked = false;
  //   DW.disabled = true; //  got this part from chatGPT
  // } else {
  //   DW.disabled = false;
  // }
}

WC.addEventListener("change", waterCheck);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
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
      e.target.dishAndWasher.checked
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
});

// function getPizza () {
//   return "🍕"
// }
// const pizza = getPizza()
// console.log(`${pizza}`)

// let pizza;

// function orderPizza() {
//   console.log('Order pizza');
//   setTimeout(() => {
//       pizza = '🍕';
//       console.log(`${pizza} is ready`)
//   }, 2000)
//   console.log('Pizza was ordered');
// }
// orderPizza();
// console.log('Call Qoli')
// console.log(`Eat ${pizza}`);

// function orderPizza (callback) {
//   setTimeout(() => {
//     const pizza = '🍕'
//     callback(pizza);
//   },2000)
// }

// function pizzaReady (pizza) {
//   console.log(`Eat ${pizza}`);
// }

// orderPizza(pizzaReady)
// console.log('Call Qoli')

// window.addEventListener('click', callback)
//   function callback () {
//   console.log('Clicked')
//   }

// function thing1() {
//   // call pizza shop
// }

// function thing2() {
//   // Order the pizza
// }

// function thing3() {
//   // Eat the pizza
// }

// function thing1(callback) {
//   callback()
// }

// function thing2(callback) {
//   callback()
// }

// function thing3(callback) {
//   callback()
// }

// thing1(() => {
//   thing2(() => {
//     things3()
//   })
// })
