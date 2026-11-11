const bottone = document.getElementById("toggle-tema");

bottone.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  bottone.textContent = document.body.classList.contains("dark")
    ? "Tema chiaro"
    : "Tema scuro";
});