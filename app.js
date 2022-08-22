function addItem(){
    var input = document.getElementById("input")
    var list = document.getElementById("list")
    var item = document.createElement("li")
    // item.innerHTML = input.value + "<button id='btn' onclick='deleteItem()'>Delete</button>"

    item.innerHTML = input.value + btn

    var btn = document.createElement("button")
    btn.innerHTML = "Delete"

    list.appendChild(item)  
    input.value = " "
}


function deleteItem(){
    const li= btn.parentElement
    const ul = li.parentElement
    ul.removeChild(li)
}