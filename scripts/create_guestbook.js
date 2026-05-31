window.addEventListener("load", () => {

    loadGuestbook();

});



async function loadGuestbook() {

    const response =
        await fetch('data/guestbook.json');

    const entries =
        await response.json();

    const container =
        document.getElementById(
            'guestbook-entries'
        );


    // =============================================
    // EMPTY GUESTBOOK
    // =============================================

    if (!entries || entries.length === 0) {

        container.innerHTML = `

            <div class="guestbook-empty">

                No entry... yet :)

            </div>

        `;

        return;
    }


    // =============================================
    // ENTRIES
    // =============================================

    entries.forEach(entry => {

        const div =
            document.createElement('div');

        div.className =
            'guestbook-entry';


        // =========================================
        // OPTIONAL WEBSITE
        // =========================================

        let websiteHTML = "";

        if (entry.website) {

            websiteHTML = `

                (

                <a
                    href="${entry.website}"
                    target="_blank">

                    website

                </a>

                )

            `;
        }


        // =========================================
        // ENTRY HTML
        // =========================================

        div.innerHTML = `

            <p class="guestbook-message">

                ${entry.message}

            </p>


            <div class="guestbook-signature">

                - ${entry.name}, ${entry.date}

                ${websiteHTML}

            </div>

        `;

        container.appendChild(div);

    });

}