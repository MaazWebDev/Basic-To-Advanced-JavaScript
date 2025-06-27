var name1 = "Maaz";
var name2 = "Ahmed";
var name3 = "Hasan";

//What is Array ? Array store multiple data in it

var names = ["Maaz","Hasan","Ahmed","Sheikh","Shams"];
console.log(names);

// Length of Array :
var Length = names.length
console.log(length);

//Getting Value From Array Index :
var index = names[2]
console.log("Index 2 : " + length);

//Last Index of array
console.log("Last Index : " + names[names.length - 1]);

//First Index of array
console.log("First Index : " + names[0]);

//Second Last Index of array
console.log("Second Last Index : " + names[names.length - 2]);

//Update Value In Array
names[3] = "Sheikh3";
console.log(names);

//Add Value In Array
names[names.length] = "Added";
console.log(names);

var country = ["Pakistan","India","Bangladesh"];
console.log(country);

//Methods Of Array :
// 1.Push
// 2.Pop
// 3.Shift
// 4.Unshift
// 5.Splice
// 6.Slice

// Push == To Add Element in the end of an array
country.push("China","Afghanistan");
console.log("After Push : " , country);

// Pop == To Remove last element from array
country.pop();
console.log("After Pop : " , country);

// UnShift == To Add value in the start of array
country.unshift("Sri Lanka");
console.log("After Unshift : " , country);

// Shift == To remove first element from array
country.shift();
console.log("After Shift : " , country);

// Splice == To add or remove from particular index of array
var fruits = ["Apple","Mango","Banana","PineApple","Strawberry","Guava"];

// To add at particular index
fruits.splice(1,0,"Peach","Leeche");
console.log(fruits);


// To remove from particular index

var deleted = fruits.splice(2,1);
console.log("Deleted Value : " , deleted);
console.log(fruits);

// To add or remove both

var updated = fruits.splice(4,1,"Kiwi");
console.log("Updated Value : " , updated);
console.log(fruits);

//Slice == Use to copy element

var copy3 = fruits.slice(1,4);
console.log("Copied : " , copy3);
console.log(fruits);








