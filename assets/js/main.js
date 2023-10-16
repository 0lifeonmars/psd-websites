const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const toggler = document.querySelector(".header__toggler");

const on__slideInDown = (e) => e.classList.add("animation__slideInDown");
const off__slideInDown = (e) => e.classList.remove("animation__slideInDown");
const on__slideOutUp = (e) => e.classList.add("animation__slideOutUp");
const off__slideOutUp = (e) => e.classList.remove("animation__slideOutUp");
const off__none = (e) => e.classList.remove("d_none"); 
const on__active = (e) => e.classList.add("active");
const off__active = (e) => e.classList.remove("active");

toggler.addEventListener('click', (e) => {
    if( nav.classList.contains('d_none') ){ off__none(nav); on__slideInDown(nav); on__active(toggler); }
    else if( nav.classList.contains('animation__slideInDown') ) { off__slideInDown(nav); on__slideOutUp(nav); off__active(toggler); }
    else if( nav.classList.contains('animation__slideOutUp') ) { off__slideOutUp(nav); on__slideInDown(nav); on__active(toggler); }
    else { e.preventDefault(); }
});

nav.addEventListener('click', (e) => {
    if( nav.classList.contains('animation__slideInDown') ) { off__slideInDown(nav); on__slideOutUp(nav); off__active(toggler); }
    else { e.preventDefault(); }
});