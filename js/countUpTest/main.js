var counter = new Counter(), //counter used for the testing
  roundedValue, //rounded initial after this round test
  lastStepTime = 0, //last step time
  currentTime = 0, //current time
  fpsStep = 16.86, //frame rate step in 60 fps
  counting = false; //if we are currently counting

function updateCounter() {
  "use strict";
  if (counting) {
    currentTime = new Date().getTime();
    roundedValue = counter.countUp(currentTime - lastStepTime);
    lastStepTime = currentTime;
    $("#counterVal").text(roundedValue);

    if (+roundedValue === +$("#countTo").val()) {
      counting = false;
      console.log("counting stopped");
    }
  }
}

function update() {
  "use strict";
  updateCounter();
  setTimeout(update, fpsStep); //frame rate defined on the page
}

$("document").ready(function () { //everything is ready to start
  "use strict";
  $("#countUpForm").on("submit", function (event) { //override submit function on count up form
    counting = false; //disable counting if it is already in progress
    var tpmFPS = +$("#fps").val();

    console.log("count up form triggered");
    event.preventDefault();

    //start the count up
    counter.reset(0, +$("#countTo").val(), +$("#time").val(), +$("#dec").val()); //set the meters as they are (not rounded
    fpsStep = (typeof tpmFPS !== "number") ? fpsStep : 1000 / tpmFPS;
    lastStepTime = new Date().getTime();
    counting = true;
  });

  update(); //stats update cycles
});



