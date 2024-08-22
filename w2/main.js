// Carbon footprint caculation 

const householdSize = 2;
// number of members in household 

const homeSize = 7;
// size of home

const foodChoice = 14;
// food consumption and source

const waterConsumption = 2;
// water consumption from appliances

const householdPurchases = 6; 
// number of items purchased for household

const wasteProduced = 5;
// trash cans filled per week

const wasteRecycled = 5;
// types of items you recycle

const transportationScore = 6;
// annual transportation 

const cfpTotal = householdSize + homeSize + foodChoice + waterConsumption + householdPurchases + wasteProduced + wasteRecycled + transportationScore
// all points added together to get the total carbon footprint  

const result = document.querySelector("h2");
// element selcted   
result.textContent = cfpTotal;
// element content updated



