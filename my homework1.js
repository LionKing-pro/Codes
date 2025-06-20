//Question 1


//Version 1
let number = "(123)-456-7890"
number.replace('(123)-456-7890',  "**7890")

//Version 2
let number1 = "(123)-456-7890"
let number2 = number1.slice(10)
let number3 = "**" + number2
number3

//Version 3
let number11 = "(123)-456-7890"
let number22 = number11.slice(10)
let number33 = "**".concat(number22)
number33


//Question 2


//Version 1
let JavaScript = "JavaScript"
JavaScript.replace("JavaScript","t-p-i-r-c-S-a-v-a-J")

//Version 2
let JS = "JavaScript"
let JSreversed = JS.split('').reverse().join('-');
JSreversed