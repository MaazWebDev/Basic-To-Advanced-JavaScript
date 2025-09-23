// Synchoronous Behaviour is that code executed line by line
// Asynchoronous Behaviour

// async makes a function return a Promise
// await makes a function wait for a Promise
// SetTimeOut
// Fetch get data from link

// Promise  :
// "I Promise a Result!"
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code
// JavaScript Promise Object
// A Promise contains both the producing code and calls to the consuming code:

var a = 'A'
var b = 'B'

// setTimeout(()=>{
//     console.log(b);
    
// },2000)

// console.log(a);

// CallBack
// I will call back later!"
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished



// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((res) => res.json())
//   .then((data) => console.log("data==>", data));

// console.log(b);

//callbacks
//A callback is a function passed as an argument to another function

// function login(callback) {
//   setTimeout(() => {
//     console.log("User login");
//     callback();
//   }, 1000);
// }

// function getUserData() {
//   let userInfo = {
//     fullName: "Bilal Raza",
//   };
//   setTimeout(() => {
//     console.log(userInfo);
//   }, 500);
// }

// login(getUserData);

// let productsArr = [];
// function getProductsFromApi(callBack) {
//   fetch("https://api.escuelajs.co/api/v1/products")
//     .then((res) => res.json())
//     .then((products) => {
//       console.log("products==>", products);
//       callBack(products);
//     });
// }

// function displayProducts(products) {
//   console.log("See all products", products);
// }

// getProductsFromApi(displayProducts);

// let token = "";

// function login(callback) {
//   setTimeout(() => {
//     console.log("User is Logged In");
//     token = "ABCD";
//     callback();
//   }, 300);
// }

// function getUserData() {
//   setTimeout(() => {
//     console.log("token=>", token);
//     if (token) {
//       const user = {
//         fullName: "Bilal Raza",
//       };
//       return user;
//     }
//   }, 1000);
// }

// login(getUserData);
// getUserData();

// let isValid = false;

// const p = new Promise((resolve, reject) => {
//   if (isValid) {
//     resolve("kaam hogya");
//   } else {
//     reject("Kaam aapka nahn hosaka");
//   }
// });

// p.then((data) => console.log(data))
// .catch((err) => console.log("error=>", err));

// let isValid = false;

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isValid) {
//         resolve("ABCD");
//       } else {
//         reject("Server is down");
//       }
//     }, 500);
//   });
// }

// login()
//   .then((token) => {
//     console.log("User is logged In");
//     getUserData(token);
//   })
//   .catch((err) => console.error(err));

// function getUserData() {
//   setTimeout(() => {
//     const user = {
//       fullName: "Bilal Raza",
//     };
//     console.log(user)
//     return user;
//   }, 1000);
// }
let products = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    displayProducts();
  }).catch((err)=> console.log(err));

function displayProducts() {
  let list = document.getElementById("list");
  products.forEach((data) => {
    let li = `<li>${data.title} ($${data.price})</li>`;
    list.innerHTML += li;
  });
}

//A = ARRAY WITH PRODUCTS
//B = EMPTY ARRAY