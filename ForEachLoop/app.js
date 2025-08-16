var arrOfObjects = [
  {
    type: "Man",
    img: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww",
  },
  {
    type: "T Shirt",
    img: "https://media.istockphoto.com/id/514685863/photo/going-for-the-laid-back-look.webp?a=1&b=1&s=612x612&w=0&k=20&c=FPZOEW5h37yf8PYBvWISfE1f1xbEmrd3e2kE84EiWN4=",
  },
  {
    type: "Shirt",
    img: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    type: "Shoes",
    img: "https://images.unsplash.com/photo-1664505504065-31f8937d2261?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    type: "Bag",
    img: "https://images.unsplash.com/photo-1665832102447-a853788f620c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwYmFnfGVufDB8fDB8fHww",
  },
  {
    type: "Wallet",
    img: "https://images.unsplash.com/photo-1675582090584-4ae9400f7326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

// for (var i = 0; i < arrOfObjects.length; i++) {
//   console.log(i, arrOfObjects[i]);
// }

// arrOfObjects[1].type = 'Australian Cow'

arrOfObjects.splice(1, 1);
console.log(arrOfObjects);


arrOfObjects.forEach(function (item, i) {
  console.log(i, item.type);
  
});