console.log("hello from inside the main.js file");

//let myVar;

const myVar = "navpreet";
const myVarType = typeof(myVar);
console.log("myVarType "+ myVarType);
console.log(`myVarType ${myVarType}`);



function runNow () {
    if(myVarType === "number") {
        console.log(`will this 11 line willrun`);
    } else {
        console.log(`will this 13 line run`);
    }
}

runNow ();
runNow ();