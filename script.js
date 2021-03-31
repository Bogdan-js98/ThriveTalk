document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("show-more");
    const moreCards = document.getElementById("more-cards");

    button.addEventListener("click", () => {
        moreCards.classList.add("active");
        button.classList.add("hidden");
    });
});