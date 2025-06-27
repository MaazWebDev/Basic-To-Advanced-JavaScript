//For Loop ? Some Work we are doing for some of times which we want

//Syntax :
// 1. Variable
// 2. Condition (How much time loop Run)
// 3. Increament or Decreament

for(let i = 0 ; i <= 7 ; i++){
    console.log(i + "Run");
}

//Multiplication Table

// for(let j = 1 ; j <= 20 ; j++){
//        console.log("2 X "+ j + " = " + 2*j);
       
// }

//Multiplication Table From User

let tableNumber = prompt("Enter Table Number");
let times = prompt("How Many Times Table Run");

for(let j = 1 ; j <= times ; j++){
       console.log(tableNumber + " X " + j + " = " + tableNumber*j);
       
}

document.write(" <h4>Q1. Square from 1 to 10</h4>")
for (var k = 1; k <= 10; k++) {
    document.write(`<li>${k * k}</li>`)
}

document.write(` <h4>Q2. Find largest number from this 
Array [ 0 , 30 , 10 , 31 , 42 , 22 , 144 , 21 , 42 ]</h4>`)
var arr = [0, 30, 10, 31, 42, 22, 144, 21, 42]
var largestNumber = 0

for (var l = 0; l < arr.length; l++) {
    if (arr[l] > largestNumber) {
        largestNumber = arr[l]
    }
}
document.write(`<p>Largest number is <b>${largestNumber}</b> </p>`)

document.write(` <h4>Q2. Find Smallest number from this 
Array [ 6 , 30 , 2 , 31 , 42 , -2 , 144 , -5 , 42 ]</h4>`)
var arr = [6, 30, 2, 31, 42, -2, 144, -5, 42]

var smallestNumber = arr[0]

for (var m = 0; m < arr.length; m++) {
    if (arr[m] < smallestNumber) {
        smallestNumber = arr[m]
    }
}
document.write(`<p>Smallest number is <b>${smallestNumber}</b> </p>`)

document.write(` <h4>Q3. Print number like this ,
1
123
1234
12345
123456 .... So On </h4>`)

var numString = ''
for (var n = 1; n <= 20; n++) {
    numString = numString + n
    document.write(`<li>${numString}</li>`)
}