# Beep boop

A web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

* Numbers that contain a 0 are replaced (all digits) with "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."
# Specifications


| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **If the user does not enter a number than the program will append "Please enter a number" ** | User input: hello | Output: "Please enter a number" |
| **Program Gathers numbers from User Input and displays a number ** | User input: 8978 | Output: "8978" |
| **If the number contains a 0 the program will replace that number with "Beep!"**| Input: 10 | Output: "Beep!",1,2,I'm sorry Dave, I'm afraid I can't do that.",4,5,I'm sorry Dave, I'm afraid I can't do that.",7,8,9,"Beep!" |
| **If the number contains a 1 the program will replace the number with "Boop!" | Input: "1" | Output: 0 Boop! |
| **If the number is divisible by 3 the program will replace the number with "I'm sorry, Dave. I'm afraid I can't do that."**| Input: "3" | output: "Beep!", "Boop", 2,  "I'm sorry Dave. I'm afraid I can't do that." |
| **Program takes a number and displays the range of numbers from 0 to the inputted number **| User Input: "10" | Output: " "Beep!","Boop!",2,"I'm sorry Dave, i'm afraid you can't do that." 4 5,"I'm sorry Dave, i'm afraid you can't do that." 7 8 "I'm sorry Dave, i'm afraid I can't do that" 10" |

# Set Up/Installation
  Clone Repository
  Open index.html in your browser

## Known Bugs

  N/A

#Technologies Used

* HTML, CSS, JS, JQuery
