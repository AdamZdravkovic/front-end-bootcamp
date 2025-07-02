const button = document.getElementById("toggleBtn");
const body = document.getElementsByTagName("body")[0];

button.addEventListener("click", function() {
    body.classList.toggle("dark");
});