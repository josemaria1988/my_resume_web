document.addEventListener("DOMContentLoaded", function (event) {
    // MODAL

    const modal = document.getElementById("myModal");
    const img = document.getElementById("smart-thumbnail");
    const modalImg = document.getElementById("img01");
    const span = document.getElementById("close-modal");

    img.onclick = function () {
        modal.style.display = "block";
        span.style.display = "block";
        modalImg.src = this.src;
    }

    span.onclick = function () {
        modal.style.display = "none";
        span.style.display == "none";
    }

    modal.onclick = function() { 
        modal.style.display = "none";
        span.style.display = "none";
    }
});