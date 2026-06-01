// =========================================================
// LOAD WRITINGS
// =========================================================


// Wait a bit before starting this script

window.addEventListener("load", () => {

    setTimeout(() => {

        loadWritings();

    }, 10);

});



async function loadWritings() {

    // ---------- LOAD JSON ----------

    const response =
        await fetch('data/writings.json');

    const writings =
        await response.json();

    const grid =
        document.getElementById('writing-grid');


    // ---------- CREATE CARDS ----------

    writings.forEach(writing => {

        const card =
            document.createElement('div');


        // Generic + specific classes
        card.className =
            'card writing-card';


        // ---------- HTML ----------

        card.innerHTML = `

<div class="card-header writing-header">

    <span class="card-type writing-type">

        ${writing.type
                .split(",")
                .map(type => {

                    const clean =
                        type.trim().toLowerCase();

                    return `

                    <span class="writing-category ${clean}">

                        ${type.trim().toUpperCase()}

                    </span>

                `;

                })
                .join(" \u00B7 ")
            }

        \u00B7

        ${writing.lang.toUpperCase()}

        \u00B7

        ${writing.date}

    </span>


    <h3>

        ${writing.title}

    </h3>

</div>


<p class="card-preview writing-preview">

    ${writing.description}

</p>


<div class="card-content writing-content">

    ${writing.content}

</div>

`;


        // ---------- EXPANSION / COLLAPSING ----------

        card.addEventListener('click', (event) => {

            // =====================================
            // IGNORE MEDIA / LINKS
            // =====================================

            if (

                event.target.closest('audio') ||
                event.target.closest('video') ||
                event.target.closest('iframe') ||
                event.target.closest('a') ||
                event.target.closest('button')

            ) {

                return;
            }


            // =====================================
            // COLLAPSED CARD
            // =====================================

            if (!card.classList.contains('expanded')) {

                card.classList.add('expanded');

                return;
            }


            // =====================================
            // EXPANDED CARD
            // ONLY HEADER COLLAPSES
            // =====================================

            if (

                card.classList.contains('expanded') &&
                event.target.closest('.card-header')

            ) {

                card.classList.remove('expanded');
            }

        });


        // ---------- APPEND ----------

        grid.appendChild(card);

    });

}