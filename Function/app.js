// Function ? Function is a block of code that run particular task

//Types Of Function

//1.Function with function keyword

function hello(){
    console.log("Hello World");
}

//2.Anonymous Function

var myFunction = function(){
    console.log("Say My Function");
}

//SetInterval(function(){},1000)

//3.Arrow Function
let greetings = () => console.log("Say Greetings");
greetings();

//Parameters And Arguments

function sum(a,b){ // a , b are parameters
    let total = a + b ;
    return total;
}

//Invokation or Declaration
console.log(sum(5,10));  //Arguments

// let array = ["a","b"];
// console.log(array.push("c"));

// function isEven(num){
//     if(num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(10));
// console.log(isEven(7));

let input = document.getElementById('num');
let answer = document.getElementById('answer');

function isEven() {
    let num = input.value;
    console.log(num);
    if(num % 2 == 0){
        answer.innerText = "Even Number"
        
    }else{
        answer.innerText = "Odd Number"
        
    }
    
}

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('Calculation_Result')

function calculate(sign){
    let num1Value = parseInt(num1.value);
    let num2Value = parseInt(num2.value);
    console.log(sign,num1Value,num2Value);

    if(sign == '+'){
        result.innerText = "Result " + (num1Value + num2Value);
    }else if(sign == '-'){
        result.innerText = "Result " + (num1Value - num2Value);
    }else if(sign == '*'){
        result.innerText = "Result " + (num1Value * num2Value);
    }else if(sign == '/'){
        result.innerText = "Result " + (num1Value / num2Value);
    }
    
}