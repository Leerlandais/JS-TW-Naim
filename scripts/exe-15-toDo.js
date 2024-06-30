const   toDoMessage = document.getElementById("toDoMessage"),
        newToDoItem = document.getElementById("newToDoItem"),
        newToDoButton = document.getElementById("newToDoButton"),
        newToDoForm = document.getElementById("newToDoForm"),
        toDoItemUL = document.getElementById("toDoItemUL");


newToDoItem.value = "";
newToDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewToDoItem();
})
let toDoItemList = [];
let toDoItem = localStorage.getItem("toDoItems");

if (!toDoItem) {
    toDoMessage.textContent = "Bravo, vous n'avez rien à faire!";
}else {
    toDoItemList = JSON.parse(toDoItem);
    console.log(toDoItemList);
    createToDoList(toDoItemList);
}

function createToDoList(ItemArray) {
    for (let item of ItemArray) {
        console.log(item);
    }
}

function addNewToDoItem() {
    toDoItemList.push(newToDoItem.value);

    // Stringify the array to store it in localStorage
    let addItem = JSON.stringify(toDoItemList);
    localStorage.setItem("toDoItems", addItem);
    window.location.reload();
}