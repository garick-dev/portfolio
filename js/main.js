document.addEventListener("DOMContentLoaded", (ev) => {
    const burgerEl = document.querySelector(".burger");
    const showMobileMenu = () => {
        document.addEventListener("click", (ev) => {
            const menuEl = document.querySelector(".menu_header");
            const burgerLineEl = document.querySelectorAll(".burger__line");

            if (ev.target && ev.target.classList.contains("burger") || ev.target && ev.target.classList.contains("burger__line") || ev.target && ev.target.classList.contains("menu__link_mobile")) {
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
            if ( ev.target && ev.target.classList.contains("menu__link_mobile")) {
                document.getElementById("burger__checkbox").checked = false;
                // add overflow if open burger menu
                document.body.style.overflow = "auto";
                // change burger position
                burgerEl.style.position = "absolute";
            }
        })

    }
    disabledCheckBox();

    const changeBurgerPosition = () => {
        document.addEventListener("change", (ev) =>{
            const checkboxEl =  document.getElementById("burger__checkbox").checked;
            if (checkboxEl === true) {
                document.body.style.overflow = "hidden";
                burgerEl.style.position = "fixed";
            }
            else {
                document.body.style.overflow = "auto";
                burgerEl.style.position = "absolute";
            }
        })
    }
    changeBurgerPosition();


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

