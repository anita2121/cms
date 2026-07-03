// ===============================
// DAILY DELISH
// script.js
// ===============================

// Sticky Navbar
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
});

// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Close menu ketika klik link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Scroll Halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });
});
