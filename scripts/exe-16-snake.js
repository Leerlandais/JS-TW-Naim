const canvas = document.getElementById("snake");

if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(0 0 2000)";
    ctx.fillRect(10, 10, 20, 20);

}
