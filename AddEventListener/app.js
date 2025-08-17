function sayHello () {
  alert('Hello Class')
}

// var btn = document.getElementById('helloBtn')

// btn.addEventListener('click', function () {
//   alert('Hello Class')
// })

// btn.addEventListener('mouseover', function () {
//   console.log(btn.id)
//   btn.style.backgroundColor = 'blue'
//   btn.style.color = 'white'
// })

// btn.addEventListener('mouseout', function () {
//   btn.style.backgroundColor = 'white'
//   btn.style.color = 'black'
// })

var cow_img = document.getElementById('cow_img')
console.log(cow_img)

cow_img.addEventListener('mouseover', function () {
  console.log('this==>', this)
  this.src =
    'https://images.unsplash.com/photo-1755129307402-667c73e44703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
  this.style.borderRadius = '100%'
})

cow_img.addEventListener('mouseout', function () {
  this.src =
    'https://images.unsplash.com/photo-1755127803263-bffee0361cfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'
})