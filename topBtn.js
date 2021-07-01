const Btn = document.querySelector(".topBtn");

function topMov() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function init() {
  Btn.addEventListener("click", topMov);
}

init();
