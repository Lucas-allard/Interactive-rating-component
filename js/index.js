const selectButton = (e) => {
    e.preventDefault()

    const buttonActive = document.querySelector(".button__rating.active")
    // on récupère le button
    const buttonRating = e.target;
    // on verifie si aucun bouton n'a la classe active
    if (buttonActive) {
        buttonActive.classList.remove("active");
        // on reactive le bouton
        buttonActive.disabled = false;
    }
    // on ajoute la classe active au bouton cliqué
    buttonRating.classList.add("active");
    // on désactive le bouton
    buttonRating.setAttribute("disabled", "disabled");
}

const displayValidation = (card, rate) => {
    if (rate) {
        // on supprime tous les éléments enfant de card
        while (card.firstChild) {
            card.removeChild(card.firstChild);
        }
        // on ajoute une classe col a card
        card.classList.add("col");

        // on ajoute une image
        const img = document.createElement("img");
        img.src = "./images/illustration-thank-you.svg";
        img.alt = "validation illustration";
        card.appendChild(img);

        // on ajoute un paragraphe avec la note sur 5 de l'utilisateur
        const p = document.createElement("p");
        p.textContent = `You selected ${rate} out of 5`;
        card.appendChild(p);

        // on ajoute un titre
        const h2 = document.createElement("h2");
        h2.textContent = "Thank you!";
        card.appendChild(h2);

        // on ajoute un paragraphe
        const p2 = document.createElement("p");
        p2.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
        card.appendChild(p2);

    }
}

window.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const form = document.querySelector("form");
    const buttonRating = document.querySelectorAll(".button__rating");
    const buttonRatingArray = Array.from(buttonRating);
    const buttonSubmit = document.querySelector('button[type="submit"]')

    buttonRatingArray.forEach(function (button) {
        button.addEventListener("click", (e) => {
            selectButton(e);
        });
    })


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const buttonActive = document.querySelector(".button__rating.active");
        if (!buttonActive) {
            alert("Select a rate");
        } else {
            const rate = buttonActive.dataset.rating
            displayValidation(card, rate);
        }
    })
});