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

const menu = document.getElementById("whatsapp-menu");

function openWhatsappMenu() {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function closeWhatsappMenu() {
  menu.style.display = "none";
}

function sendWhatsApp(service) {
  const phone = "243980215272";
  const message = `Bonjour MyDigit Agency,%0AJe suis intéressé par : ${service}`;
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
  closeWhatsappMenu();
}