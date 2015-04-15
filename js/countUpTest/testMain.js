/**
 * Created by borob on 4/14/2015.
 */

//test the rounding algorithm
function roundingTest() {
  "use strict";
  var counter = new Counter(), //counter used for the testing
    roundedValue; //rounded initial after this round test
  counter.reset(1.134443, 1.233, 1000, 2); //set the meters as they are (not rounded)
  roundedValue = counter.getValue(); //get the current value which should be rounded
  console.log("roundedValue = " + roundedValue); //print the rounded value to the console
  return roundedValue;
}

function roundingTestZeroDecimal() {
  "use strict";
  var counter = new Counter(), //counter used for the testing
    roundedValue; //rounded initial after this round test
  counter.reset(1.00134443, 1.233, 1000, 2); //set the meters as they are (not rounded)
  roundedValue = counter.getValue(); //get the current value which should be rounded
  console.log("roundedValue = " + roundedValue); //print the rounded value to the console
  return roundedValue;
}

//test for counting up
function countUp() {
  "use strict";
  var counter = new Counter(), //counter used for the testing
    roundedValue; //rounded initial after this round test
  counter.reset(0, 100, 2000, 2); //set the meters as they are (not rounded)
  roundedValue = counter.countUp(100);
  return roundedValue;
}

//test for counting up
function countUpToTheEnd() {
  "use strict";
  var counter = new Counter(), //counter used for the testing
    roundedValue = 0, //rounded initial after this round test
    i = 0;
  counter.reset(0, 99.583, 2000, 3); //set the meters as they are (not rounded)

  for (i = 0; i < 20; i += 1) { //make 20 steps to reach the final value of 100
    roundedValue = counter.countUp(100);
    console.log("  tmp rounded value = " + roundedValue);
  }
  return roundedValue;
}

//test for counting up with extra time
function countOver() {
  "use strict";
  var counter = new Counter(), //counter used for the testing
    roundedValue = 0, //rounded initial after this round test
    i = 0;
  counter.reset(0, 99.58, 2000, 2); //set the meters as they are (not rounded)

  for (i = 0; i < 50; i += 1) { //make 20 steps to reach the final value of 100
    roundedValue = counter.countUp(100);
    console.log("  tmp rounded value = " + roundedValue);
  }
  return roundedValue;
}

//test wierd decimal numbers
function countUpDecimalTest() {
  "use strict";
  var counter = new Counter(), //counter used for the testing
    roundedValue = 0, //rounded initial after this round test
    i = 0;
  counter.reset(0, 100, 2000, 2); //set the meters as they are (not rounded)

  for (i = 0; i < 150; i += 1) { //make 20 steps to reach the final value of 100
    roundedValue = counter.countUp(22);
    console.log("  tmp rounded value = " + roundedValue);
  }
  return roundedValue;
}

//run the tests
//rounding tests
console.log("Running the ROUNDING TEST");
console.log("-- expected output = 1.13 --");
var result = roundingTest(), //run the test
  i = 0; //counter for
if (result === "1.13") {
  console.log("-- test successful --");
} else {
  console.warn("-- test error : faulty result --");
}
console.log("-- test end --");

console.log("Running the ROUNDING TEST ZERO DECIMAL");
console.log("-- expected output = 1.00 --");
result = roundingTestZeroDecimal(); //run the test
if (result === "1.00") {
  console.log("-- test successful --");
} else {
  console.warn("-- test error : faulty result --");
}
console.log("-- test end --");

//count up tests
//test the count up step
console.log("Running the count up step");
console.log("-- expected output = 5.00 --");
result = countUp(); //run the test
if (result === "5.00") {
  console.log("-- test successful --");
} else {
  console.warn("-- test error : faulty result --");
}
console.log("-- test end --");

//test the count up cycle
console.log("Running the count up step");
console.log("-- expected output = 100 --");
result = countUpToTheEnd(); //run the test
if (result === "99.583") {
  console.log("-- test successful --");
} else {
  console.warn("-- test error : faulty result --");
}
console.log("-- test end --");

//test the count up cycle
console.log("Running the count up with extra time step");
console.log("-- expected output = 100 --");
result = countUpDecimalTest(); //run the test
if (result === "100.00") {
  console.log("-- test successful --");
} else {
  console.warn("-- test error : faulty result --");
}
console.log("-- test end --");