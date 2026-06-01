// =========================================================
// LOAD MUSIC
// =========================================================

loadMusic();



async function loadMusic() {

    const response =
        await fetch('data/music.json');

    const entries =
        await response.json();


    // =====================================================
    // SECTION GRIDS
    // =====================================================

    const songsGrid =
        document.getElementById('songs-grid');

    const ambientGrid =
        document.getElementById('ambient-grid');

    const ostGrid =
        document.getElementById('ost-grid');

    const pianoGrid =
        document.getElementById('piano-grid');


    // =====================================================
    // CLICK MECHANIC
    // =====================================================

    function setupCard(cardElement) {

        cardElement.addEventListener('click', (event) => {

            // =============================================
            // IGNORE MEDIA / LINKS
            // =============================================

            if (

                event.target.closest('audio') ||
                event.target.closest('video') ||
                event.target.closest('iframe') ||
                event.target.closest('a') ||
                event.target.closest('button')

            ) {

                return;
            }


            // =============================================
            // COLLAPSED CARD
            // CLICK ANYWHERE TO EXPAND
            // =============================================

            if (
                !cardElement.classList.contains(
                    'expanded'
                )
            ) {

                cardElement.classList.add(
                    'expanded'
                );

                return;
            }


            // =============================================
            // EXPANDED CARD
            // ONLY HEADER COLLAPSES
            // =============================================

            if (

                cardElement.classList.contains(
                    'expanded'
                ) &&

                event.target.closest(
                    '.card-header'
                )

            ) {

                cardElement.classList.remove(
                    'expanded'
                );
            }

        });
    }


    // =====================================================
    // CREATE CARDS
    // =====================================================

    entries.forEach(entry => {

        const tags =
            entry.tags
                .split(",")
                .map(tag =>
                    tag.trim().toLowerCase()
                );


        const card =
            document.createElement('div');

        card.className =
            'card music-card';


        // =================================================
        // OPTIONAL IMAGE
        // =================================================

        let imageHTML = "";

        if (entry.image) {

            imageHTML = `

                <img
                    class="music-cover"
                    src="${entry.image}"
                    alt="${entry.title}"
                >

            `;
        }


        // =================================================
        // OPTIONAL AUDIO
        // =================================================

        let audioHTML = "";

        if (entry.audio) {

            audioHTML = `

                <div class="music-player">

                    <audio controls preload="none">

                        <source
                            src="${entry.audio}"
                            type="audio/mpeg">

                    </audio>

                </div>

            `;
        }


        // =================================================
        // OPTIONAL DESCRIPTION
        // =================================================

        let descriptionHTML = "";

        if (entry.description) {

            descriptionHTML = `

                <p class="card-preview">

                    ${entry.description}

                </p>

            `;
        }


        // =================================================
        // CARD HTML
        // =================================================

        card.innerHTML = `

<div class="card-header music-header">

    <span class="card-type music-type">

        ${entry.tags
                .split(",")
                .map(tag => {

                    const clean =
                        tag.trim().toLowerCase();

                    return `

                    <span class="music-tag ${clean}">

                        ${tag.trim().toUpperCase()}

                    </span>

                `;

                })
            .join(" \u00B7 ")
            }

        \u00B7

        ${entry.lang.toUpperCase()}

        \u00B7

        ${entry.date}

    </span>


    <h3>

        ${entry.title}

    </h3>

</div>


${imageHTML}

${audioHTML}

${descriptionHTML}


<div class="card-content music-content">

    ${entry.content}

</div>

`;


        // =================================================
        // CLASSIFICATION
        // =================================================

        let added = false;


        // =============================================
        // SONGS
        // =============================================

        if (

            tags.includes("song") ||

            tags.includes("chanson") ||

            tags.includes("rap")

        ) {

            const clone =
                card.cloneNode(true);

            setupCard(clone);

            songsGrid.appendChild(clone);

            added = true;
        }


        // =============================================
        // PIANO
        // =============================================

        if (

            tags.includes("piano")

        ) {

            const clone =
                card.cloneNode(true);

            setupCard(clone);

            pianoGrid.appendChild(clone);

            added = true;
        }


        // =============================================
        // AMBIENT / ELECTRONIC
        // =============================================

        if (

            tags.includes("ambient") ||

            tags.includes("electronic") ||

            tags.includes("electronique") ||

            tags.includes("instrumental")

        ) {

            const clone =
                card.cloneNode(true);

            setupCard(clone);

            ambientGrid.appendChild(clone);

            added = true;
        }


        // =============================================
        // OST
        // =============================================

        if (

            tags.includes("ost") ||

            tags.includes("soundtrack")

        ) {

            const clone =
                card.cloneNode(true);

            setupCard(clone);

            ostGrid.appendChild(clone);

            added = true;
        }


        // =============================================
        // FALLBACK
        // =============================================

        if (!added) {

            setupCard(card);

            songsGrid.appendChild(card);
        }

    });

}