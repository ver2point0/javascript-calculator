var actualOperation = "";
var userInput = "";
var arrayInput = [];
var display = "";
var stringOperation = "";
var operationObjects = {
  "dot": ".",
  "percent": "%",
  "multiply": "*",
  "divide": "/",
  "minus": "-",
  "plus": "+"
}

// show button values on calculator screen
function displayResults(calculatorInput) {
  var inputHtml = calculatorInput;
  $(".showResult").html(inputHtml);
}

$(document).ready(function() {
  $("button").click(function() {
    var value = $(this).attr("value");
    
    if (!isNaN(value)) {
      userInput = userInput.concat(String(value));
      displayResults(userInput);
    } else if (value === "ac") { // clear calculator screen when 'AC' is pressed
      actualOperation = "";
      userInput = "";
      arrayInput = [];
      display = "";
      stringOperation = "";
      displayResults(userInput);
    } else if (userInput !== "") {
      if (value in operationObjects) {
        actualOperation = operationObjects[value];
        arrayInput.push(userInput);
        arrayInput.push(actualOperation);
        userInput = "";
      } else if (value === "ce") { // clear one entry when "CE" is pressed
        userInput = userInput.slice(0, -1);
        displayResults(userInput);
      } else if (value === "equal") {
        arrayInput.push(userInput);
        stringOperation = arrayInput.join(" ");
        display = eval(stringOperation);
        displayResults(display);
        actualOperation === "";
        arrayInput = [];
        userInput = "";
      }
    }
    stringOperation === "";
  });
});