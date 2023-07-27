// Card Template 
const cardRating = document.querySelector(".card");
const cardThanks = document.querySelector(".cardThankyou");

// button submit,back
const submit = document.getElementById("submit");
const back = document.getElementById("back");

// Rating
const scoreSelect = document.getElementById("scoreSelect");
const state = document.querySelectorAll(".state");

submit.addEventListener("click", () => {
    cardRating.style.display = "none";
    cardThanks.style.display = "flex";
})
back.addEventListener("click", () => {
    cardRating.style.display = "flex";
    cardThanks.style.display = "none";
});

state.forEach((state) => {
    state.addEventListener("click", () => {
        scoreSelect.innerHTML = state.innerHTML;
    })
})

