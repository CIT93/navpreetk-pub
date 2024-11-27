class FP {
  constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, waterConsumValue, dishAndWasher, hPurchaseValue) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterConsumValue = waterConsumValue;
    this.dishAndWasher = dishAndWasher;
    this.hPurchaseValue = hPurchaseValue;
    this.calwaterConsumPoints();
    this.calHouseHoldPoints();
    this.calHouseSizePoints();
    this.calFoodChoicePoints();
    this.calFoodSourcePoints();
    this.calhPurchasePoints();
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

  calwaterConsumPoints() {
    const value = parseInt(this.waterConsumValue);
    if (this.dishAndWasher === true) {
      this.waterConsumPoints = value * 2;
    } else {
      this.waterConsumPoints = value;
    }
  }

  calhPurchasePoints() {
    this.hPurchasePoints = parseInt(this.hPurchaseValue);
   
  }

  calTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodPoints +
      this.foodSourcePoints +
      this.waterConsumPoints +
      this.hPurchasePoints;
  }
}

export { FP };
