#Name of App
DineInorOut
#Description of purpose
This app will help you decide whether you should eat out or instead eat at home. The app will take into consideration user time and budget set.
#Variables:
##Least 3 global variables - at least 1 of the following: string, number and boolean
##Use const and let were appropriate
const time (string):  Holds whether there is time constraint or not. 
const withinBudge (boolean)t: Return true if costs are within the set budget. 
const setBudget (number): Is the set budget for the week. 
const outFoodCost (number): Is the cost of eatting out
let overBudget (number): Represents the over budget cost

#Decision Making Process
If there is a time constraint, and you are within budget then you are suggested to go ahead and order out. 

If there is no time constraint and you are within budget, you have the option to order out or make something at home. 

If there is a time constraint and you are out of budget, you are warned, and displayed by how much you are out of budget and suggested to eat at home. 

If there is no time constraint and you are out of budget, you are suggested to eat at home. 

The app will also give the amount you are over budget by if you are not wihtin budget.
#Output
The output will display the budget you've set. Then it will output the user time available selected and whether you are within budget and based on that suggests to eat out or eat at home. If over budget the app will give output by how much. 


## step 3 

To set up the event listener and array of objects, I reviewed previous code we have done, and refactored the code to my code. I believe I am capturing all the inputs and all the calculated data. I also set up 3 new global variables, one for the array of objects and set up html elements for form and output. I did have difficulties in displaying the form outputs separate from the ones I test in code and creating a seperate heaeder. It was diffucult to successfully implementing that.  

## step 6
I added a new function for suggestion given the user inputs, now the suggestion can be implemented into the table. 

## step 7 
I ran into an error when adding the diningSuggstion into the diningRec class. Before I was testing the false condition with this.!ifWithinBudget and kept getting errors, so I used chatGPT to figure out why I got the error message. I found the syntax I was using was wrong, and in js . cannot follow since . operator is used to access the properties. 

## final
I changed the validateField function to check for empty fields for input and select field. I ran into an error where the function was not working for select,so I debugged the code using chatGPT. I found I could not use event.target.value for the select input, so I took the recommended update which separated field and field value. Additionally, I also added the step attribute for the number inputs to take two decimal places and updated the rest of the code accordingly using parseFloat for the values. 
