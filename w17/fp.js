class FP {
  constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, waterValue, waterConsum, dishAndWasher, hPurchases, waste, recycle, personalVehicle, publicTrans, flights) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterValue = waterValue;
    this.waterConsumPoints = waterConsum;
    this.dishAndWasher = dishAndWasher;
    this.hPurchasesPoints = hPurchases;
    this.wastePoints = waste;
    this.recycle = recycle;
    this.personalVehiclePoints = personalVehicle;
    this.publicTransPoints = publicTrans;
    this.flightsPoints = flights;
    this.calHouseHoldPoints();
    this.calHouseSizePoints();
    this.calFoodChoicePoints();
    this.calFoodSourcePoints();
    this.calTotal();
  }

  calHouseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }

  calHouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }

  calFoodChoicePoints() {
    if (this.foodChoice === "meatDaily") {
      this.foodPoints = 10;
    } else if (this.foodChoice === "meatWeekly") {
      this.foodPoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodPoints = 4;
    } else if (this.foodChoice === "veganOrWild") {
      this.foodPoints = 2;
    }
  }

  calFoodSourcePoints() {
    if (this.foodSource === "prepackaged") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balanced") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePoints = 2;
    }
  }

  calTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodPoints +
      this.foodSourcePoints +
      this.waterConsumPoints +
      this.hPurchasesPoints +
      this.wastePoints +
      this.recycle.recyclePoints +
      this.personalVehiclePoints +
      this.publicTransPoints +
      this.flightsPoints;
  }
}

export { FP };
