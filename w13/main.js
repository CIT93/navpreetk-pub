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
  output.appendChild(newH1);
  output.appendChild(newH2);
}

function startTime1(time, endTime) {
  const timer = formatTime(time);
  const newP = document.createElement("p");
  newP.textContent = '...🏋🏻‍♀️🏋🏻‍♀️🏋🏻‍♀️'
  output.appendChild(newP);
  return new Promise((resolve, reject) => {
    if (time <= 1) {
      reject('Invalid time input. Please enter time value greater than 1.');
      return;
    }
    startDisplay();
    setTimeout(() => {
      const endMessage = "Time is up!"
      resolve(endMessage);
    }, timer)
  })
}

function handleError(errorMessage) {
  const newH3 = document.createElement("h3");
  newH3.textContent = errorMessage;
  output.appendChild(newH3);
}

function endTime(endMessage) {
  const newH3 = document.createElement("h1");
  newH3.textContent = endMessage;
  output.appendChild(newH3);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  output.innerHTML = '';
  startTime1((parseInt(form.time.value)))
    .then(endTime)
    .catch(handleError)
  form.reset();
});
