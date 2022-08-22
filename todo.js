function addItem(){
    var input = document.getElementById("input")
    var list = document.getElementById("list")
    var items = document.createElement("li")
    var del = document.createElement("button")
    del.innerHTML = "delete"
    del.setAttribute('onclick','deleteItem(event)')
    var edit = document.createElement("button")
    edit.innerHTML = "Edit"
    edit.setAttribute('onclick','editItems(event)')
    items.innerHTML = input.value 
    list.appendChild(items)
    items.appendChild(del)
    items.appendChild(edit)

    input.value = " "
}


function deleteItem(event){
    var li = event.target.parentElement
    var ul = li.parentElement
    ul.removeChild(li)
}


function editItems(event){
   
    var edit = prompt("Enter Item")
    edit = document.createElement("li")
    var li = event.target.parentElement
    var ul = li.parentElement
    var edited = ul.removeChild(li)
    var a = ul.appendChild(edit)
    edit.innerHTML = edit
}
