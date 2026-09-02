const envelope = document.getElementById("envelope");

const card = document.getElementById("card");

const cardWrapper =
    document.getElementById("cardWrapper");

const letters =
    document.getElementById("letters");

const instructions =
    document.getElementById("instructions");


let envelopeOpened = false;


/* =========================
   OPEN ENVELOPE
========================= */

envelope.addEventListener("click", function () {

    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    envelope.classList.add("open");

    instructions.textContent =
        "Watch the card come out 💌";


    /*
        Halfway through the animation
        the card reaches the top.

        At this point we move the
        envelope front BEHIND the card.

        This means the card can smoothly
        come back down in front of it.
    */

    setTimeout(function () {

        envelope.classList.add(
            "card-coming-down"
        );

        cardWrapper.style.zIndex = "6";

    }, 1750);


    /*
        Card has completely finished
        moving.

        NOW animate PAMA.
    */

    setTimeout(function () {

        letters.classList.add(
            "animate"
        );

        instructions.textContent =
            "Tap the card to open 💕";

    }, 3500);

});


/* =========================
   OPEN CARD
========================= */

card.addEventListener("click", function (event) {

    event.stopPropagation();


    if (!envelopeOpened) {
        return;
    }


    card.classList.toggle("open");


    if (card.classList.contains("open")) {

        instructions.textContent =
            "Tap the card to close 💕";

    } else {

        instructions.textContent =
            "Tap the card to open 💕";

    }

});