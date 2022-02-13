document.addEventListener("DOMContentLoaded", (ev) => {
    const showMobileMenu = () => {
        document.addEventListener("click", (ev) => {
            const menuEl = document.querySelector(".menu_header");
            const burgerLineEl = document.querySelectorAll(".burger__line");

            if (ev.target && ev.target.classList.contains("burger") || ev.target && ev.target.classList.contains("burger__line") || ev.target && ev.target.classList.contains("menu__link")) {
                menuEl.classList.toggle("open");
                burgerLineEl.forEach(item => {
                    item.classList.toggle("clear");
                });

            }
        })
    }
    showMobileMenu();

    const disabledCheckBox = () => {
        document.addEventListener("click", (ev) => {
            if ( ev.target && ev.target.classList.contains("menu__link")) {
                document.getElementById("burger__checkbox").checked = false;
            }
        })

    }
    disabledCheckBox();


    const slider = new Glide('.glide', {
        type: 'carousel',
        animationDuration: 500,
        perView: 1,
        startAt: 0,
        focusAt: 'center',
        rewind: false,
        keyboard: false,
        gap: 100,
        breakpoints: {
            1350: {
                perView: 1
            },

            770: {
                perView: 1
            }
        }
    })
    slider.mount();

})

