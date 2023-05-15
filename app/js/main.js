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

let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('header__menu--active');
});


