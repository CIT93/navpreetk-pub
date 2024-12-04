const diningDecisionData = getLS();

function saveLS (diningDecisionData) {
    const serializedArr = JSON.stringify(diningDecisionData);
    localStorage.setItem("diningDecision",serializedArr);
}

function getLS() {
    const retrievedArry = localStorage.getItem("diningDecision");
    if(retrievedArry !== null) {
        return JSON.parse(retrievedArry);
    }
    else {
        return [];
    }
}

export {diningDecisionData,saveLS, getLS};