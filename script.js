const bar = document.getElementById("mobile-bar");
const navbar = document.querySelector(".header-body__ul");
const close = document.querySelector(".fa-xmark");

function open() {
    navbar.style.right = "0";
}
bar.onclick = open;

function closeNav() {
    navbar.style.right = "-30rem";
}
close.onclick = closeNav;
