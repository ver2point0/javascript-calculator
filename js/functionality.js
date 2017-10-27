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

$(document).ready(function() {
  // function to show button values on calculator screen
  function displayResults(calculatorInput) {
    var inputHtml = calculatorInput;
    $(".showResult").html(inputHtml);
  }
  
  $("button").click(function() {
    var value = $(this).attr("value");
    userInput = userInput.concat(String(value));
    displayResults(userInput);
  });
});