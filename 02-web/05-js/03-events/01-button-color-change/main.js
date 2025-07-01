// Keeps track of whether color changing is currently allowed
let isEnabled = true;

// Generates a random hex color like "#A1B2C3"
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Changes the page background to a random color if enabled
function changeColor() {
  if (!isEnabled) return; // Do nothing if disabled
  document.body.style.backgroundColor = getRandomColor();
}

// Get references to the buttons from the HTML
const colorBtn = document.getElementById("colorBtn");
const disableBtn = document.getElementById("disableBtn");
const enableBtn = document.getElementById("enableBtn");

// When "Change Background" button is clicked, try to change color
colorBtn.addEventListener("click", changeColor);

// When "Disable" button is clicked, turn off color changing
disableBtn.addEventListener("click", function () {
  isEnabled = false;
  updateState(); // Update button styles and labels
});

// When "Enable" button is clicked, turn color changing back on
enableBtn.addEventListener("click", function () {
  isEnabled = true;
  updateState(); // Update button styles and labels
});

// Updates the visual state of the "Enable" and "Disable" buttons
function updateState() {
  if (isEnabled) {
    // If enabled: highlight the "Enable" button
    enableBtn.classList.add("active");
    disableBtn.classList.remove("active");

    enableBtn.textContent = "Enable ✅";
    disableBtn.textContent = "Disable";
  } else {
    // If disabled: highlight the "Disable" button
    disableBtn.classList.add("active");
    enableBtn.classList.remove("active");

    disableBtn.textContent = "Disable ❌";
    enableBtn.textContent = "Enable";
  }
}

// Set the initial button states on page load
updateState();