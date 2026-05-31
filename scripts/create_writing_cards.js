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


        // ---------- EXPANSION ----------

        const header =
            card.querySelector('.card-header');


        header.addEventListener('click', () => {

            card.classList.toggle('expanded');

        });


        // ---------- APPEND ----------

        grid.appendChild(card);

    });

}