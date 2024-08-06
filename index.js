const Toogle = document.querySelector('.toogle');
const Logo = document.querySelector('.logo-title');
const PNav = document.querySelector('.position-navbar');
const nav = document.querySelector('.nav-b-i');
Toogle.addEventListener('click',()=>{
    Logo.classList.toggle('disappear-title');
    PNav.classList.toggle('appear-position-nav');
    Toogle.classList.toggle('margin-toggle')
    nav.classList.toggle('appear-nav');
});