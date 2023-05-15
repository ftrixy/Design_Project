// ----------- Плавний скрол по кліку на ссилку -----------

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const blockID = anchor.getAttribute('href')

        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


// ----------- Меню -----------

    const menuBtn = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu-list');
    const body = document.querySelector('.body');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('header__menu-list--active');
        menuBtn.classList.toggle('header__burger--active');
        body.classList.toggle('body--lock');
    });





