// Run this code only after the full HTML document has loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get references to HTML elements
  const field = document.querySelector(".field-wrapper");
  const player = document.getElementById("player");
  const toggleBtn = document.getElementById("toggleMoveBtn");

  // Drag state and offsets
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // Control whether movement is allowed or not
  let isMovementEnabled = true;

  // Toggle movement on or off when the button is clicked
  toggleBtn.addEventListener("click", () => {
    isMovementEnabled = !isMovementEnabled; // Flip the state
    toggleBtn.textContent = isMovementEnabled ? "Disable Movement" : "Enable Movement";
  });

  // Move player to click position (if movement is allowed)
  field.addEventListener("click", (e) => {
    if (!isMovementEnabled || isDragging) return; // Don't move while dragging or if disabled

    // Get field's position relative to the screen
    const rect = field.getBoundingClientRect();

    // Get click coordinates relative to the field
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Get player's size
    const playerWidth = player.offsetWidth;
    const playerHeight = player.offsetHeight;

    // Adjust so that player moves centered on click
    const newLeft = clickX - playerWidth / 2;
    const newTop = clickY - playerHeight / 2;

    // Move player
    player.style.left = `${newLeft}px`;
    player.style.top = `${newTop}px`;
  });

  // Start dragging the player (mouse down on player)
  player.addEventListener("mousedown", (e) => {
    if (!isMovementEnabled) return; // Don't allow drag if disabled

    isDragging = true;

    // Get where the mouse clicked inside the player image
    const rect = player.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    // Turn off transition for smooth dragging
    player.style.transition = "none";
    player.style.cursor = "grabbing";

    e.preventDefault(); // Prevent default behavior (like image dragging in browser)
  });

  // Move player with mouse while dragging
  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return; // Only move if dragging

    // Get field boundaries
    const fieldRect = field.getBoundingClientRect();

    // Calculate new position
    let newLeft = e.clientX - fieldRect.left - offsetX;
    let newTop = e.clientY - fieldRect.top - offsetY;

    // Keep player inside field bounds
    newLeft = Math.max(0, Math.min(newLeft, fieldRect.width - player.offsetWidth));
    newTop = Math.max(0, Math.min(newTop, fieldRect.height - player.offsetHeight));

    // Move the player
    player.style.left = `${newLeft}px`;
    player.style.top = `${newTop}px`;
  });

  // Stop dragging when mouse is released
  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      player.style.cursor = "grab";
      player.style.transition = "top 0.2s, left 0.2s"; // Smooth return for click movement
    }
  });
});
