function toggleMenu() {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("open");
}

  const btn = document.getElementById("toggle-dark");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });


