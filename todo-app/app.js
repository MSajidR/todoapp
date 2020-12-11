
var addBtn = document.getElementById('addTodo');

var todoList = document.getElementById('list')

function addFunction() {


    var todoText = document.getElementById('todoText');
    if (todoText.value === '') {

        alert('todo is empty')

    } else
        if (todoText.value.trim()) {


            var listItem = document.createElement('div')
            var listItemId = 'list-item' + todoList.childNodes.length;
            listItem.setAttribute('id', listItemId)



            var sepr = document.createElement('span')
            var editBtn = document.createElement('button')

            var sepr2 = document.createElement('span')
            var deleteBtn = document.createElement('button')


            editBtn.innerText = "Edit"
            deleteBtn.innerText = "Delete"

            editBtn.onclick = function () {
                return editListItem(listItemId)
            };


            deleteBtn.onclick = function () {
                return deleteListItem(listItemId)
            };


            listItem.innerText = todoText.value
            todoList.appendChild(listItem)

            listItem.appendChild(sepr)

            listItem.appendChild(editBtn)
            listItem.appendChild(sepr2)
            listItem.appendChild(deleteBtn)


            todoText.value = ""
            editBtn.setAttribute('class', 'btn btn-primary')
            deleteBtn.setAttribute('class', 'btn btn-danger')
            sepr.setAttribute('class', 'sep2')
            sepr2.setAttribute('class', 'sep')
            

console.log(todoList.childNodes)


        }
}




var deleteAllBtn = document.getElementById('deleteAll')

deleteAllBtn.onclick = deleteAllTodos



function deleteListItem(id) {
    var listItemToDelet = document.getElementById(id);
    todoList.removeChild(listItemToDelet);
 
    console.log(todoList.childNodes)
    


}



function editListItem(id) {

    var listItemtEdit = document.getElementById(id)
    var todoText = document.getElementById('todoText')

    todoText.value = listItemtEdit.childNodes[0].nodeValue

    addBtn.innerText = "Save";
    addBtn.onclick = function () {

        return saveAgainText(id)
    }


}


function saveAgainText(id) {

    var listItemtEdit = document.getElementById(id)
    var todoText = document.getElementById('todoText')

    listItemtEdit.childNodes[0].nodeValue = todoText.value

    todoText.value = '';
    addBtn.innerText = "Add";
    addBtn.onclick = addFunction


}

function deleteAllTodos() {

    todoList.innerHTML = ''
    todoText.value = ''
    addBtn.innerText = "Add";
    addBtn.onclick = addFunction

}



if (todoList.NodeList[1]){
    console.log("hi")
}