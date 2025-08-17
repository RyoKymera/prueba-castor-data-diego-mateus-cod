document.querySelectorAll('.carousel').forEach(initCarousel);

function initCarousel(carousel) {
  const slides = carousel.querySelectorAll('.slide');
  const dotsContainer = carousel.querySelector('.dots');
  let index = 0;

  // Crear dots dinámicamente
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('.dot');

  function showSlide(i) {
    index = i;
    carousel.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function goToSlide(i) {
    if (i >= 0 && i < slides.length) {
      showSlide(i);
    }
  }

  // Autoplay
  setInterval(() => {
    if (index < slides.length - 1) {
      goToSlide(index + 1);
    } else {
      goToSlide(0);
    }
  }, 4000);
}
