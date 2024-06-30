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
       let addLI = document.createElement("li");
       addLI.textContent = item;
        let XX = document.createElement("button");
        XX.classList.add("removeButton");
        XX.textContent = "XX";
        XX.addEventListener("click", removeListItem);
        addLI.appendChild(XX);
       toDoItemUL.appendChild(addLI);
    }
}

function addNewToDoItem() {
    toDoItemList.push(newToDoItem.value);

    // Stringify the array to store it in localStorage
    let addItem = JSON.stringify(toDoItemList);
    localStorage.setItem("toDoItems", addItem);
    window.location.reload();
}

function removeListItem() {
    let itemToRemove = this.parentElement.textContent;
    toDoItemList.splice(toDoItemList.indexOf(itemToRemove), 1);
    console.log(toDoItemList.length);
    if (toDoItemList.length === 0) {
        localStorage.removeItem("toDoItems");
    }else {
    let deletedItemArray = JSON.stringify(toDoItemList);
    localStorage.setItem("toDoItems", deletedItemArray);
    this.parentElement.remove();
    }
    window.location.reload();

}