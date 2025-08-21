// let parent = document.getElementById('parent')
// let child2 = document.getElementById('child2')
// console.log('parent ==>',parent);
// console.log('parent with children ==> ',parent.children);

// console.log('child2 ==> ',child2);
// console.log('child2 parent ==> ',child2.parentElement);
// console.log('child2 previousSibling ==> ',child2.previousElementSibling);
// console.log('child2 nextSibling ==> ',child2.nextElementSibling);

let todo_input = document.getElementById('todo_input')
let add_todo_btn = document.getElementById('add_todo_btn')
let delete_all_todo_btn = document.getElementById('delete_all_todo_btn')
let todo_list = document.getElementById('todo_list')

add_todo_btn.addEventListener('click',function(){
    if(!todo_input.value) return alert('Please Add Todo')

    let list_item = `<li class="todo_item">
    <span>${todo_input.value}</span>
     <i class="fa-solid fa-pen-to-square editIcon" onclick="edit_todo(this)" title="Edit"></i>
        <i class="fa-solid fa-trash deleteIcon" onclick="delete_todo(this)" title="Delete"></i>
    </li>`
    todo_list.innerHTML += list_item
    
    todo_input.value = ''
})


function delete_todo(element){
    element.parentElement.remove()
    // console.log('Delete == >', element.parentElement);
    
}

function edit_todo(element){
    let previousValue = element.previousElementSibling.innerText;
    let updatedValue = prompt('Enter Updated Value',previousValue)
    element.previousElementSibling.innerText = updatedValue
    console.log('Edit == >', element.parentElement);
    
}

delete_all_todo_btn.addEventListener('click',function(){
    todo_list.innerHTML = ''
})