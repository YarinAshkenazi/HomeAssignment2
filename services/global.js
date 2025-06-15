function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("open");
}



  const btn = document.getElementById("toggle-theme");
  const icon = document.getElementById("theme-icon");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
