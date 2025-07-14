document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('reveal-badge-btn');
  const badgeWrapper = document.querySelector('.badge-image-wrapper');

  revealBtn.addEventListener('click', () => {
    badgeWrapper.classList.add('is-revealed');
    revealBtn.textContent = 'Badge Revealed!';
    revealBtn.disabled = true; // Prevents multiple clicks
  });
});