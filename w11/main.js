import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

const start = (first, last, houseMembers, houseSize) => {  
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
    //start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP (FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    // fpObj.houseHoldPoints();
    // fpObj.HouseSizePoints();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
});

// const me = {
//   name: "Navpreet",
//   hairColor: "black",
//   location: "home",
//   sleepScore: 90,
//   introduce: function (){
//     console.log(`This is ${this.name} with ${this.hairColor} hair is in ${this.location} right now!`);

//   }
// }


// const you = {
//   name: "Jan",
//   hairColor: "Brown",
//   location: "Home",
//   sleepScore: 55,
//   introduce: function (){
//     console.log(`This is ${this.name} with ${this.hairColor} hair is in ${this.location} right now!`);

//   }
// }

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name,hairColor,location,sleepScore){
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location 
//     this.sleepScore = sleepScore
//   }
//   introduce () {
//     console.log(`This is ${this.name} with ${this.hairColor} hair is in ${this.location} and had a sleepScore of  ${this.sleepScore}!`);
//   }
// }

// const navpreet = new Human("Navpreet","black","home",90);
// const jane =  new Human("Jan","brown","home",55);
// navpreet.introduce();
// jane.introduce();
// navpreet.hrv= 7;