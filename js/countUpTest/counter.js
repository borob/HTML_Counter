/**
 * Created by borob on 4/14/2015.
 */
function Counter() { //Counter object encapsulated with private variables
  "use strict";
  var countUpValue_int = 0, //value for counting up - current counter value
    initialValue_int = 0, //value used for resetting the counter.
    endValue_int = 0, //end value that should be reach in predefined time
    time_int = 0, //time needed to count up from initial value to end value
    usedTime_int = 0, //how much time did we already use
    decimalSpaces_int = 2; //decimal spaces round up

  /**
   * Decimal adjustment of a number.
   *
   * @param {Number}  value The number.
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(value, exp) {
    // If the exp is undefined or zero...
    if (!exp || +exp === 0) {
      return Math.round(value);
    }
    value = +value; //convert to number
    exp = +exp; //convert to number
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split("e");
    value = Math.round(+(value[0] + "e" + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? (+value[1] + exp) : exp));
  }

  /**
   * @function formatCash
   * Format number according to  provided numberOfDecimals
   *
   * @param {float} amount the number that will be formatted
   * @param {float} numberOfDecimals number of decimal places to set
   *
   * @return {string} formatted number as localized string
   *
   */
  function formatCash(amount, numberOfDecimals) {
    return parseFloat(amount).toFixed(numberOfDecimals);
  }
  //end of formatCash

  return { //new object which includes all the functions available for counting up

    /**
     * public function which returns current count up value
     * count changes on every countUp method call.
     *
     * @returns {number}
     */
    getValue: function () {
      return formatCash(decimalAdjust(countUpValue_int, -decimalSpaces_int), decimalSpaces_int);
    },

    /**
     * public function which updates the countUpValue and
     * returns it. Value is updated based on elapsed time
     * from latest update and based on time that should be
     * used to reach the final count up amount.
     *
     * @param elapsedTime : time in milliseconds representing
     * diff time between previous countUp method call
     */
    countUp: function (elapsedTime) {
      var movedInPercentage = 0, //how much time in percentage elapsed
        stepToMake = 0; //step that we have to make to get to the target number in time

      if (typeof countUpValue_int !== "number" || //check if all needed variables exist
          typeof initialValue_int !== "number" ||
          typeof endValue_int !== "number" ||
          typeof time_int !== "number" ||
          typeof decimalSpaces_int !== "number" ||
          typeof elapsedTime !== "number") {
        return NaN; //error during evaluation of global variables
      }

      if (time_int - usedTime_int <= 40) { //we have already used all of our time. return end value
        countUpValue_int = endValue_int;
      } else { //still some time to make adjustments to the value
        movedInPercentage = elapsedTime / (time_int - usedTime_int); //how much time elapsed time means in order to time left
        stepToMake = (endValue_int - countUpValue_int) * movedInPercentage; //the step we have to make based on elapsed time and total amount we need to reach
        countUpValue_int += stepToMake; //add the step to our current value
      }

      if (countUpValue_int > endValue_int) {//count value can exceed target value in slow frame rate
        countUpValue_int = endValue_int;
      }

      usedTime_int += elapsedTime;

      return formatCash(decimalAdjust(countUpValue_int, -decimalSpaces_int), decimalSpaces_int); //return the value
    },

    /**
     * reset internal Counter values.
     * Method is used to be called on every new count up
     * start.
     *
     * @param initialValue
     * @param endValue
     * @param time
     */
    reset: function (initialValue, endValue, time, decSpaces) {
      countUpValue_int = initialValue;
      initialValue_int = initialValue;
      endValue_int = endValue;
      time_int = time;
      usedTime_int = 0;
      //decimal spaces is an optional parameter. if not provided the value is set to 2
      decimalSpaces_int = !decSpaces ? 0 : decSpaces; //check if parameter was provided
    }
  };
}