const cfpData = [];

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
    if (size === "large") {
        houseSizePoints = 10;
    } else if (size === "medium") {
        houseSizePoints = 7;
    } else if (size === "small") {
        houseSizePoints = 4;
    } else if (size === "apt") {
        houseSizePoints = 2;
    }
    return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints;
}

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput () {
    for (arr of cfpData){
      console.log(arr);  
      const output = document.getElementById("output");
      const newP1 = document.createElement("p");
      newP1.textContent = `The score based on number of household members for ${arr[0]} members is ${arr[2]}. The score based on size of house that is ${arr[1]} is ${arr[3]}.`;
      output.appendChild(newP1);
      const newP = document.createElement("p");
      newP.textContent = `Carbon Footprint total is ${arr[4]}.`;
      output.appendChild(newP);
    }

}



start(5,"apt");
start(4,"large");
start(3,"medium");

start(2,"apt");
start(7,"large");
start(6,"medium");
start(1,"small");

displayOutput ();