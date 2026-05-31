const fadeElement =
    document.querySelector(".fade");

const background =
    document.querySelector(
        ".background-pattern"
    );


// ---------- FADE IN ----------

window.addEventListener("load", () => {

    setTimeout(() => {

        requestAnimationFrame(() => {

            fadeElement.classList.add("visible");
            background.classList.add("visible");

        });

    }, 100);

    
});




// ---------- FADE OUT ----------

document.querySelectorAll("a").forEach(link => {

    // Ignore external links
    if (
        link.hostname !== window.location.hostname
    ) {
        return;
    }

    link.addEventListener("click", e => {

        const href = link.href;

        // Ignore anchors
        if (
            href.includes("#")
        ) {
            return;
        }

        e.preventDefault();

        fadeElement.classList.remove("visible");
        background.classList.remove("visible");

        setTimeout(() => {

            window.location.href = href;

        }, 500);
    });
});