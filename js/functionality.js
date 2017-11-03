var operationResult = "";
var actualOperation = "";
var userInput = "";
var arrayInput = [];
var display = "";
var stringOperation = "";
var operationObjects = {
  "dot" : ".",
  "percent" : "%",
  "mutiply" : "*",
  "divide" : "/",
  "minus" : "-",
  "plus" : "+"
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
      operationResult = "";
      actualOperation = "";
      userInput = "";
      arrayInput = [];
      display = "";
      stringOperation = "";
      displayResults(userInput);
    } else if (userInput !== "") {
      if (value === "ce") {
        userInput = userInput.slice(0, -1);
        displayResults(userInput);
      } else if (value in operationObjects) {
        actualOperation = operationObjects[value];
        arrayInput.push(userInput);
        arrayInput.push(actualOperation);
        userInput = "";
      }
    }
    
  });
});