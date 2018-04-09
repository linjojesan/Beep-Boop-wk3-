// business logic

// created empty array to push index in
var emptyArray = [];
var programLogic = function(userInput) {
   for(var i = 0; i <= userInput; i++) {
     emptyArray.push(i);
  }
};
// User Interface Logic
// created new function to output array through user logic and seperated user logic from business logic. 

var outPutLogic = function(outputArray) {
   for(var i = 0; i <= outputArray.length; i++) {
     if (String(i).indexOf("0") > -1) {
       var inputBeep = $("result").append("<li>Beep!</li>");
     } else if (String(i).indexOf("1") > -1) {
       $("#result").append("<li>Boop!</li>")
     } else if (i % 3 === 0) {
       $("#result").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>")
     } else {
       $("#result").append("<li> " + i + "</li>")
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




    }
});
});
