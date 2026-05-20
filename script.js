function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");

  window.slideRight = function () {
    slider.scrollBy({ left: 300, behavior: "smooth" });
  };

  window.slideLeft = function () {
    slider.scrollBy({ left: -300, behavior: "smooth" });
  };
});
