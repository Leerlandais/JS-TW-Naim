const passForm = document.getElementById("passForm"),
      passInput  =  document.getElementById("passInput"),
      passButton = document.getElementById("passButton");

passForm.addEventListener("submit", function (form) {
   form.preventDefault();
   validateInputs();
});

function validateInputs() {
    console.log("Hi")
}