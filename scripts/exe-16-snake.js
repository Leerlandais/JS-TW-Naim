// pour ceci, je mis le commentaire dès que j'ai completer un étape. J'ai déjà fait un Snake donc ce n'est pas facile à révister ce logique
// par contre, mon niveau de JS a evolué depuis Snake V1. Alors, comments, comments, comments

const canvas = document.getElementById("snake"),
      context = canvas.getContext('2d');
const canvasWidth = canvas.width,    // afin de le rendre plus facile de positioner le Snake
      canvasHeight = canvas.height,
      snakeSegment = 20,       // et de lui donner une taille
      snakeBaseLength = 5;  // et un longeur

// très facile de trouver le centre avec canvas...je me rappel de les difficultés pour faire le même avec snake_v1
let snakeX = canvasWidth/ 2,
    snakeY = canvasHeight / 2;

let snakeBodyArray = []; // un tableaux pour contenir le Snake

// et un boucle pour le definir
for (let i = 0; i < snakeBaseLength; i++) {
    // essai de faire avec un objet - avant, j'ai calculer à chaque moment...ceci est plus éfficace (j'espère)
    snakeBodyArray.push({ x: snakeX + i * snakeSegment, y: snakeY });
}

// et un fonction pour lui placer sur le canvas
function createSnake() {
    context.clearRect(0, 0, canvasWidth, canvasHeight); // Bonne pratique, vide toujours le Canvas avant commencer

let headPos = true; // pour couleurer la tête du Snake
    snakeBodyArray.forEach(snakePart => {
        headPos ? context.fillStyle = "rgb(0 0 200)" : context.fillStyle = "rgb(0 200 0)" // tête = bleue, corp = vert
        context.fillRect(snakePart.x, snakePart.y, snakeSegment, snakeSegment); // possibilité de faire un changement de sna
        headPos = false;
    });
}
// appel de fonction pour créér le Snake
createSnake();

// première fois que je l'essai mais pourquoi pas écouter le DOM entière
document.addEventListener('keydown', function(btnPressed) {
    // Si Up/Down, ne bouge pas l'écran
    if (btnPressed.code === 'ArrowUp' || btnPressed.code === 'ArrowDown' || btnPressed.code === 'Numpad8' || btnPressed.code === 'Numpad2' || btnPressed.code === "KeyW" || btnPressed === 'KeyS') {
        // sans doute mieux dans un tableaux?? dontMoveArray.includes(btnPress.code)?
        btnPressed.preventDefault();
    }
    // sinon, écoute les autres touches btn // Note to self : add optional choice, it will shorten the code
    if (btnPressed.code === 'ArrowLeft' || btnPressed.code === 'Numpad4' || btnPressed.code === 'KeyA') { 
        // même que avant, mettre les boutons pour chaque diréction dans des tableaux... leftMoveButtons = ["ArrowRight","Num6", etc]
        } else if (btnPressed.code === 'ArrowRight' || btnPressed.code === 'Numpad6' || btnPressed.code === 'KeyD') {
     } else if (btnPressed.code === 'ArrowUp' || btnPressed.code === 'Numpad8' || btnPressed.code === 'KeyW') {
        } else if (btnPressed.code === 'ArrowDown' || btnPressed.code === 'Numpad2' || btnPressed.code === 'KeyS') {
    }
});

/*
TO DO :
Create snake. Length 4. Try to do it OO
Tie movement to buttons
Add food and tie growth to food
Add food replacement
Add collision event
Add highscore
Add button selection (separate js file) and tie it in here
*/