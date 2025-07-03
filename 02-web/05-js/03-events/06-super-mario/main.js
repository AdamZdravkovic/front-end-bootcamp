document.addEventListener("DOMContentLoaded", function () {
  const mario = document.getElementById("mario");
  const gameContainer = document.querySelector(".game-container");

  // Movement state
  let startPosition = 0;
  let isMoving = false;
  let intervalId = null;
  let currentDirection = null; // ✅ Tracks current moving direction (left or right)

  // 🕹️ KEYDOWN - When a key is pressed
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const newDirection = e.key;

      // 🔄 If you're changing direction, stop the previous movement
      if (currentDirection !== newDirection) {
        clearInterval(intervalId);
        intervalId = null;
        isMoving = false;
      }

      // ▶️ Start movement only if not already moving
      if (!isMoving) {
        isMoving = true;
        currentDirection = newDirection;
        mario.src = "img/mario_running.gif";

        if (newDirection === "ArrowRight") {
          mario.style.transform = "scaleX(1)"; // face right

          intervalId = setInterval(() => {
            startPosition -= 2; // move background left
            gameContainer.style.backgroundPosition = `${startPosition}px bottom`;
          }, 16); // ~60fps

        } else if (newDirection === "ArrowLeft") {
          mario.style.transform = "scaleX(-1)"; // face left

          intervalId = setInterval(() => {
            startPosition += 2; // move background right
            gameContainer.style.backgroundPosition = `${startPosition}px bottom`;
          }, 16); // ~60fps
        }
      }
    }
  });

  // 🛑 KEYUP - When a key is released
  document.addEventListener("keyup", function (e) {
    // Stop only if the released key matches the current movement
    if (e.key === currentDirection) {
      isMoving = false;
      currentDirection = null;
      clearInterval(intervalId);
      intervalId = null;
      mario.src = "img/mario.png"; // back to idle image
    }
  });

  // ⬆️ JUMP - Space key releases trigger a jump
  document.addEventListener("keyup", function (e) {
    if (e.key === " " || e.code === "Space") {
      mario.style.bottom = "25vh"; // jump up

      setTimeout(() => {
        mario.style.bottom = "18vh"; // land back down
      }, 250); // hang time
    }
  });
});
