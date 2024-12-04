class DiningRec {
    constructor(setBudget, diningCost, time) {
        this.setBudget = setBudget;
        this.diningCost = diningCost;
        this.time = time;
        this.ifWithinBudget();
        this.budgetDifference();
        this.diningSuggestion();
    }

    // determine if within budget 
    ifWithinBudget() {
        this.ifWithinBudget = this.diningCost <= this.setBudget;
    }

    // calculate budget difference
    budgetDifference() {
        this.budgetDifference = this.diningCost - this.setBudget;
    }

    // determine the suggestion based on user inputs
    diningSuggestion() {
        if (this.time === "plenty of time" && this.ifWithinBudget) {
            this.diningSuggestion = "you may eat out or eat at home";
        } else if ((this.time === "plenty of time" && !this.ifWithinBudget) || (this.time === "limited time" && !this.ifWithinBudget)) {
            this.diningSuggestion = `You are out of budget by $${this.budgetDifference}, you are suggested to eat at home`;
        } else if (this.time === "limited time" && this.ifWithinBudget) {
            this.diningSuggestion = "you are suggested to eat out";
        }
    }

}

export { DiningRec}

