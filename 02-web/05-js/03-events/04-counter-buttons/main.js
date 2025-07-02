document.addEventListener("DOMContentLoaded", function () {
  const increase = document.getElementById("increaseBtn");
  const decrease = document.getElementById("decreaseBtn");
  const reset = document.getElementById("resetBtn");

  increase.addEventListener("click", function () {
    const currNumber = parseInt(document.getElementById("count").textContent);
    const newNumber = currNumber + 1;
    document.getElementById("count").textContent = newNumber;
  });

  decrease.addEventListener("click", function () {
    const currNumber = parseInt(document.getElementById("count").textContent);
    const newNumber = currNumber - 1;
    document.getElementById("count").textContent = newNumber;
  });

  reset.addEventListener("click", function () {
    document.getElementById("count").textContent = "0";
  });
});
