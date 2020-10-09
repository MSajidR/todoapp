
var addBtn = document.getElementById('addBtn');

var todoList =document.getElementById('list')

function addFunction(){
var todoText = document.getElementById('todoText');

if(todoText.value.trim()){

   var listItem = document.createElement('li')
   var listItemId = 'list-item' +todoList.childNodes.length;
    listItem.setAttribute('id', listItemId)
    
   var editBtn =document.createElement('button')
   var deleteBtn =document.createElement('button')

   editBtn.innerText = "Edit"
   deleteBtn.innerText = "Delete"

   editBtn.onclick = function(){
    return editListItem(listItemId)
};


deleteBtn.onclick = function(){
    return deleteListItem(listItemId)
};


listItem.innerText= todoText.value   
   todoList.appendChild(listItem)
   listItem.appendChild(editBtn)
   listItem.appendChild(deleteBtn)



    todoText.value = ""
}}


var deleteAllBtn = document.getElementById('deleteAll')

deleteAllBtn.onclick = deleteAllTodos



function deleteListItem(id){
var listItemToDelet = document.getElementById(id);
todoList.removeChild(listItemToDelet);
}


// function editListItem(id){

// var listItemtEdit = document.getElementById(id)
// var todoText = document.getElementById('todoText')


// }


function deleteAllTodos(){
	todoList.removeChild(childNodes.length);
   


}