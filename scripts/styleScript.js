// injéction de CSS et Text genérale
const   mainHeading = document.getElementById("mainHeading"),
        globalDiv   = document.getElementById("globalDiv");
mainHeading.className   = "block font-sans text-5xl font-semibold leading-tight tracking-normal text-gray-700 underline italic antialiased";
mainHeading.textContent = " à mon projet du weekend";
globalDiv.className     = "container-fluid flex justify-center pt-16 mx-auto bg-gradient-to-t from-green-400 to-sky-600 h-screen";

let theUrl  = window.location.href,
    getLast = theUrl.split('/').pop();
let ourPage = getLast.replace('.html', '');

console.log('this ; ' + ourPage); // première con.log - je n'ai plus besoin de verifier chaque étape mais ceci est nouveau pour moi, alors je .log :D
// maintenant, je sais sur quel page est affiché. La reste est facile

switch (ourPage) {
    case 'index':
        mainHeading.textContent = "You are home";
        break;
    case "exe-0-jokes" :
        mainHeading.textContent = "exe-0-hahahah";
        break;
// put more cases here

}
