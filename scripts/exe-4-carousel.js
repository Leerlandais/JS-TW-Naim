const windowHolder = document.querySelector(".windowHolder"),
      portalWindow = document.querySelector('.portalWindow'),
      imageArray = ['url("images/MoustacheGlasses.svg"',
                            'url("images/PurpleDevil.svg"',
                            'url("images/StarsEyes.svg"',
                            'url("images/GlassesSmirk.svg"',
                            'url("images/MoneySmile.svg"',
                            'url("images/TongueSmile.svg"',
                            'url("images/WinkSmile.svg"',
                            'url("images/TongueSquint.svg"' ];
let count = 0;
    windowHolder.addEventListener("click", makeItSpin);
portalWindow.style.backgroundImage = imageArray[0];


function makeItSpin() {
    setInterval(() => {
    count++;

    windowHolder.classList.toggle("spinIt");
    setTimeout(function () {
        portalWindow.style.backgroundImage = imageArray[count % imageArray.length]
    }, 850);
    }, 3000);
}

makeItSpin();


