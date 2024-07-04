// pour ceci, je mis le commentaire dès que j'ai completer un étape. J'ai déjà fait un Snake donc ce n'est pas facile à révister ce logique
// par contre, mon niveau de JS a evolué depuis Snake V1. Alors, comments, comments, comments

const canvas = document.getElementById("snake"),
      context = canvas.getContext('2d');
// afin d'avoir qqchose sur le canvas
if (context) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(0 0 200)";
    ctx.fillRect(10, 10, 20, 20);
}

// première fois que je l'essai mais pourquoi pas écouter le DOM entière
document.addEventListener('keydown', function(btnPressed) {
    console.log(btnPressed.code); // mon mieux ami, console.log
    // Si Up/Down, ne bouge pas l'écran
    if (btnPressed.code === 'ArrowUp' || btnPressed.code === 'ArrowDown' || btnPressed.code === 'Numpad8' || btnPressed.code === 'Numpad2') {
        btnPressed.preventDefault();
    }
    // sinon, écoute les autres touches btn // Note to self : add optional choice, it will shorten the code
    if (btnPressed.code === 'ArrowLeft' || btnPressed.code === 'Numpad4' || btnPressed.code === 'KeyA') {
        console.log("left");
        } else if (btnPressed.code === 'ArrowRight' || btnPressed.code === 'Numpad6' || btnPressed.code === 'KeyD') {
        console.log("R");
     } else if (btnPressed.code === 'ArrowUp' || btnPressed.code === 'Numpad8' || btnPressed.code === 'KeyW') {
        console.log("U");
        } else if (btnPressed.code === 'ArrowDown' || btnPressed.code === 'Numpad2' || btnPressed.code === 'KeyS') {
        console.log("Dn");
    }
});

        // all good. Gotta cook soon but gonna add the alternative btn configs first
        // that worked. Should I add a choose buttons option?
 
        

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