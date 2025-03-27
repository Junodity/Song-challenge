document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const slides = document.querySelector(".my-slides");
  const stack = document.querySelector(".stack");
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  stack.addEventListener("click", () => {
    gallery.style.display = "flex";
  });
});
// Close the Modal
function closeModal() {
  gallery.style.display = "none";
}
