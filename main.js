document.querySelectorAll('.carousel').forEach(initCarousel);

function initCarousel(carousel) {
  const slides = carousel.querySelectorAll('.slide');
  const slidesWrapper = carousel.querySelector('.slides');
  let index = 0;



  function showSlide(i) {
    index = i;
    slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(() => {
    if (index < slides.length - 1) {
      showSlide(index + 1);
    } else {
      showSlide(0);
    }
  }, 4000);

  showSlide(0);
}
