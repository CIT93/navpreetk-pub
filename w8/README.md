With breakpoint at main calling renderTbl function, clicking step takes you to the renderTbl function in the render.js file 
Then the first code is declaring table cont equal to renderTblHeading function - table is defined by calling another function 
Then the code jumps into that function, it clears the DOM, then goes through and creates the table and its header, and the row 
Then define array containing the heading text, next use forEach loop to iterate over the array, creating new heading and appending it to row.
Next out of the loop, append row to thead and thead to table, lastly return the table.
Then the code returns back to line of code in the renderTbl fuction 
It creates the tbody, then runs forEach loop for the data, which is passed by reference 
This loop declares tr, which will create a new row for each array (each new set of data entry by user). The function loops through all the objects for each array. 
Each time a cell is created and defined, then each cell is appended to row, and the row appended to tbody. For each object we are building a row (tr) and column (td).
Then once loop is done the tbody is appended to table and table appended to TBL, the DOM element. We see table in DOM after this is run. 
Then code goes back to main.js and form is reset


The video was helpful and went more into depth with each parts of the code. I did not document starting from the beginning of code in the event listener, instead I started from the breakpoint and how the code executed in dev tools from there. So it is really informative seeing how all the code worked. I also got more clarity of using dev tools. Overall, it helped clarify the code and understand how to communicate it, hopefully it will help me be able to communicate the code more accurately. 


Edit button
To edit the user input values and update the other values accordingly maybe the edit will need to reference the start function. Especially when editing the house size or household, you would need the footprint updated also at the same time. Based on what the user selects to edit, the code can run accordingly. To repopulate on the DOM, maybe we can similarly pass the updated data into renderTbl(data); as we did for the delete button. 
