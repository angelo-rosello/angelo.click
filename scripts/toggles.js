window.addEventListener("load", () => {

    setupToggles();

});



function setupToggles() {

    const sections =
        document.querySelectorAll(
            '.toggle-section'
        );


    sections.forEach(section => {

        const header =
            section.querySelector(
                '.toggle-header'
            );


        header.addEventListener(
            'click',
            () => {

                section.classList.toggle(
                    'open'
                );

            }
        );

    });

}