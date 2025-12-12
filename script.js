const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

hamburgerBtn.onclick = () => {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
}

closeBtn.onclick = () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
}

overlay.onclick = () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
}