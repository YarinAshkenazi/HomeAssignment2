function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("open");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "on" : "off");

  const iconBtn = document.getElementById("darkModeBtn");
  if (iconBtn) {
    iconBtn.innerHTML = isDark ? "<i class='fas fa-sun'></i>" : "<i class='fas fa-moon'></i>";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "on";
  if (isDark) {
    document.body.classList.add("dark-mode");
  }

  const iconBtn = document.getElementById("darkModeBtn");
  if (iconBtn) {
    iconBtn.innerHTML = isDark ? "<i class='fas fa-sun'></i>" : "<i class='fas fa-moon'></i>";
  }
});
