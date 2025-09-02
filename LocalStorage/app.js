// 1 Set Item
// 2 Get Item
// 3 Remove Item
// 4 Clear

// console.log(localStorage);

// Store String , Object , Array
// Always String Is Save In Local Storage

// Save Data In Local Storage
// localStorage.setItem('email','maaz@gmail.com')


// Store Array Or Object

// let todos = ['Hp','Dell','Samsung','Lenovo']

// Javascript Object Notation :JSON
// Convert String To Object Or Array
// let stringTodo = JSON.stringify(todos)
// localStorage.setItem('todos', stringTodo )

// Get Data From Local Storage
// let email = localStorage.getItem('email')
// let todos1 = localStorage.getItem('todos')

// Convert Array Or Object To String
// todos1 = JSON.parse(todos1)
// console.log(todos1);




var login_container = document.getElementById('login_container')
var home_container = document.getElementById('home_container')
var email = document.getElementById('email')
var password = document.getElementById('password')
var user_email = document.getElementById('user_email')
var todo_input = document.getElementById('todo_input')
var list = document.getElementById('list')

function loginUser(){
    if(!email.value || !password.value) return alert('Enter Your Email Or Password')

    localStorage.setItem('email',email.value)

    checkIsUserLogin()
}

function checkIsUserLogin(){
    var email = localStorage.getItem('email')
    if(email){
        login_container.style.display = 'none'
        home_container.style.display = 'block'
        user_email.innerText = email
    }else{
        login_container.style.display = 'block'
        home_container.style.display = 'none'
    }
}

checkIsUserLogin()

function logOut(){
    localStorage.removeItem('email')
    checkIsUserLogin()
}

function addTodo(){
    var email = localStorage.getItem('email')
    var obj = {
        email : email,
        todo : todo_input.value
    }
    console.log(obj);
    saveValueToLocalStorage(obj)
    todo_input.value = ''
}

function saveValueToLocalStorage(obj){
    var todos = localStorage.getItem('todos')
    console.log('Todos From Local Storage',todos);

    if(todos){
      todos = JSON.parse(todos)
      todos.push(obj)
      console.log(todos);
      
      localStorage.setItem('todos',JSON.stringify(todos))
    }else{
        todos = [obj]
        console.log(todos);
        localStorage.setItem('todos',JSON.stringify(todos))
        
    }
    
   showTodo()
}

function showTodo(){
    var todos = localStorage.getItem('todos')
    if(todos){
        list.innerHTML = ''
        todos = JSON.parse(todos)
        console.log(todos);

        // get current logged-in email
        var currentEmail = localStorage.getItem('email')

        todos.forEach(function(data, ind){
            if(data.email === currentEmail){   // only show todos of logged-in user
                var liElement = `
                    <li class="class="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
                       <p class="font-medium text-gray-800">${data.todo}</p>
                       <span class="text-sm text-gray-500">${data.email}</span>
                    </li>`;
                list.innerHTML += liElement
            }
        })
    }
}

showTodo()