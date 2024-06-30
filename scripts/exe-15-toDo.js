const   toDoMessage = document.getElementById("toDoMessage"),
        newToDoItem = document.getElementById("newToDoItem"),
        newToDoForm = document.getElementById("newToDoForm"),
        toDoItemUL = document.getElementById("toDoItemUL");


newToDoItem.value = ""; // vider le contenu d'input après soft refresh


// empeche l'envoi du Form et appel fonction pour ajouter item
newToDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewToDoItem();
})
// création d'un tableaux vide pour stocké les ToDoItems
let toDoItemList = [];
// récuperation des Items
let toDoItems = localStorage.getItem("toDoItems");

if (!toDoItems) {
    // si pas ToDoItem stocké
    toDoMessage.textContent = "Bravo, vous n'avez rien à faire!";
}else {
    toDoItemList = JSON.parse(toDoItems);
    let chose;
    // passer au singulier ou au pluriel selon le nombre ToDoItems
    toDoItemList.length === 1 ? chose = "chose" : chose = "choses"
    toDoMessage.textContent = "Vous avez "+toDoItemList.length+" "+chose+" à faire!";
    // appel de fonction pour afficher les ToDoItems
    createToDoList(toDoItemList);
}

function createToDoList(itemArray) {
    // pour chaque ToDoItem :
    for (let item of itemArray) {
        // création d'un <li> et ajoute texte
       let addLI = document.createElement("li");
       addLI.textContent = item;
       // création d'un bouton pour chaque <li>
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("removeButton");
        deleteButton.textContent = " : "+"X";
        // écouter pour suppression d'un ToDoItem
        deleteButton.addEventListener("click", removeListItem);
        // ajoute des <button> aux <li> et les <li> au <ul>
        addLI.appendChild(deleteButton);
       toDoItemUL.appendChild(addLI);
    }
}

function addNewToDoItem() {
    if(newToDoItem.value.trim().length > 0){
    // ajoute nouveau ToDoItem au tableaux
    toDoItemList.push(newToDoItem.value);
    // utilisation de JSON pour preparer la liste (car localStorage ne peut contenir que les chaines de caractères)
    let addItem = JSON.stringify(toDoItemList);
    localStorage.setItem("toDoItems", addItem);
    window.location.reload();
    }else {
        alert("Stop trying to add empty strings, Kevin :-p");
    }
}

function removeListItem() {
    // pour supprimer l'element, retrouve position dans tableaux avec comparison du text dans parent element
    let itemToRemove = this.parentElement.textContent; // this = bouton cliqué et parent, alors est le <li>
    toDoItemList.splice(toDoItemList.indexOf(itemToRemove), 1);

    if (toDoItemList.length === 0) {
        // si plus ToDoItems déstruction de toDoItems afin de permettre l'affichage du bon message
        // sans ceci, il aura toujours des [] vides dans toDoItems
        localStorage.removeItem("toDoItems");
    }else {
        // préparation des toDoItems pour injéction dans localStorage
    let deletedItemArray = JSON.stringify(toDoItemList);
        // remplacer toDoItems existant avec les nouveaux infos
    localStorage.setItem("toDoItems", deletedItemArray);
        // et supprime <li> du DOM
    this.parentElement.remove();
    }
    window.location.reload();

}