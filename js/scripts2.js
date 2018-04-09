// business logic

// created empty array to push index in
var emptyArray = [];

// used push method to populate index into array

var programLogic = function(userInput) {
   for(var i = 0; i <= userInput; i++) {
     emptyArray.push(i);
  }
};
// User Interface Logic
// created new function to output array through user logic and seperated user logic from business logic.
// seperated displayLogic into global scope

var displayLogic = function(outputArray) {
   for(var i = 0; i <= outputArray.length; i++) {
    //  used .toString method to change 0 into string so I could use the String method "includes" to find zeros in outputArray
     if (outputArray[i].toString().includes("0"))  {
       $("#result").append("<li>Beep!</li>");
     } else if (outputArray[i] === 1) {
       $("#result").append("<li>Boop!</li>")
     } else if (outputArray[i] % 3 === 0 ) {
       $("#result").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>")
     } else {
       $("#result").append("<li> " + outputArray[i] + "</li>")
     }

  }
};
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // this variable will take the users input and give it a value.
    var userInput = parseInt($("#enternumber").val());
    // If the character is not a number than it will append the string "Please enter a number"
    if (isNaN(userInput)) {
      $("#result").append("Please enter a number")
    } else {
    var result = programLogic(userInput);
    //callback
    displayLogic(emptyArray);
  }
});
});
