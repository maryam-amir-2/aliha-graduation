document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('reveal-gift-btn');
  const giftWrapper = document.querySelector('.gift-image-wrapper');

  revealBtn.addEventListener('click', () => {
    giftWrapper.classList.add('is-revealed');
    revealBtn.textContent = 'Gift Revealed!';
    revealBtn.disabled = true; // Prevents multiple clicks
  });
});
