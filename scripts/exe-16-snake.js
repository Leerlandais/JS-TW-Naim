const canvas = document.getElementById("snake");

// afin d'avoir qqchose sur le canvas
if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(0 0 200)";
    ctx.fillRect(10, 10, 20, 20);
}

// première fois que je l'essai mais pourquoi pas écouter le DOM entière
document.addEventListener('keydown', function(btnPressed) {
    // ça marche?
    console.log(btnPressed.code);
    if (btnPressed.code === 'ArrowLeft') {
        console.log("left");
    }else if (btnPressed.code === 'ArrowRight') {
        console.log("R");
    }else if (btnPressed.code === 'ArrowUp') {
        console.log("U");
    }else if (btnPressed.code === 'ArrowDown') {
        console.log("Dn");
        // all good. Gotta cook soon but gonna add the alternative btn configs first
    }
});