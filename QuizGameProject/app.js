let questions = [
    'Age Group Categorization',
'Movie Ticket Pricing',
'Grade Calculator',
'Fruit Ripeness Checker',
'Weather Activity Suggestion',
'Transportation Mode Selection',
'Coffee Customization',
'Password Strength Checker',
'Leap Year Checker',
'Pet Food Recommendation',
'Counting Positive Numbers',
'Sum of Even Numbers',
'Multiplication Table Printer',
'Reverse a String',
'Find the First Non-Repeated Character',
'Factorial Calculator',
'Validate Input',
'Prime Number Checker',
'List Uniqueness Checker',
'Exponential Backoff',
]
console.log(questions[0]);

let allBoxes = document.getElementsByClassName('box')
// console.log(allBoxes);

for( let i = 0 ; i < allBoxes.length ; i++){
    allBoxes[i].addEventListener('click',function(){
        // console.log(this);
        clearAll()
        this.style.backgroundColor = 'white'
        this.style.color = 'black'
        this.style.border = '1px solid black'
        this.innerText = questions[Math.floor(Math.random()*20)]
        
    })
}
function  clearAll() {
    for( let i = 0 ; i < allBoxes.length ; i++){
        allBoxes[i].style.backgroundColor = 'black'
        allBoxes[i].style.color = 'white'
        allBoxes[i].innerText = i + 1
}
}