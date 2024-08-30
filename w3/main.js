function determineHouseHoldPts(numberInHousehold) {
   // console.log("Inside the function")
    if (numberInHousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the number of member in the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
 }
 
 let carbonFootprintPoints = 0;
 //const numberInHousehold = 3;
 

 // global scope
 
determineHouseHoldPts(3);
// determineHouseHoldPts(4)

// gives output of points from house size only
function determineHouseSizePts(homeSize) {
    let carbonFootprintPoints = 0;
    if (homeSize === "a large house") {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (homeSize === "a medium-size house") {
        carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (homeSize === "a small house") {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (homeSize === "an apartment") {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`If you live in ${homeSize} the points would be ${carbonFootprintPoints}.`);
}

determineHouseSizePts("a large house");


 


