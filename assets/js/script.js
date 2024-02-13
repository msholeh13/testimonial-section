const initSlider = () => {
  const containerCardList = document.querySelector('.testimonial-cards');
  const slideButtons = document.querySelectorAll('.slide-button');

  slideButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.id === 'prev-slide' ? -1 : 1;
      const scrollAmount = containerCardList.clientWidth * direction;
      containerCardList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
};

window.addEventListener('load', initSlider);
