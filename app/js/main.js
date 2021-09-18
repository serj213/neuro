const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header-menu');
const language = document.querySelector('.header__language'); 


burger.addEventListener('click', ()=> {
    burger.classList.toggle('header__burger--active')
    menu.classList.toggle('header-menu--active')
    language.classList.toggle('header__language--mobile')
    document.body.classList.toggle('lock')
});