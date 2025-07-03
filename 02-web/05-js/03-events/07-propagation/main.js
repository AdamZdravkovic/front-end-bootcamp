document.addEventListener("DOMContentLoaded", function() {
    const allImg = document.querySelectorAll("img");

    allImg.forEach(img => {
        img.addEventListener("click", function(e) {
            this.style.border = "4px solid red";

            if (img.width !== 300) {
                e.stopPropagation();
            }
    })
    })

    document.addEventListener("click", function(e) {
        console.log("Clicked element:", e.target);
    });
})