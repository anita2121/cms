function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("show");
    document.querySelector(".overlay").classList.toggle("show");
}

function closeSidebar() {
    document.querySelector(".sidebar").classList.remove("show");
    document.querySelector(".overlay").classList.remove("show");
}
