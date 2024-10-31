const form = document.getElementById("form");
const output = document.getElementById("output");

function formatTime(time) {
  return time * 1000;
}

function startDisplay() {
  const newH1 = document.createElement("h1");
  newH1.textContent = `Time has begun: Timer set for ${form.time.value} second(s)`
  const newH2 = document.createElement("h2");
  newH2.textContent = `Exercise: ${form.exercise.value} with a goal of ${form.reps.value} reps`
  console.log(newH1.textContent);
  output.appendChild(newH1);
  output.appendChild(newH2);
}


function startTime(time, endTime) {
  const timer = formatTime(time);
  setTimeout(() => {
    const endMessage = "Time is up!"
    endTime(endMessage);
  }, timer)

  const newP = document.createElement("p");
  newP.textContent = '...🏋🏻‍♀️🏋🏻‍♀️🏋🏻‍♀️'
  output.appendChild(newP);

}

function endTime(endMessage) {
  //  console.log(`${workingOut}`)
  const newH3 = document.createElement("h1");
  newH3.textContent = endMessage;
  output.appendChild(newH3);
}


form.addEventListener('submit', function (e) {
  e.preventDefault();
  startDisplay();
  startTime((parseInt(form.time.value)), endTime)
  form.reset();
});
