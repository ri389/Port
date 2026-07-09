// Animate skill bars on load
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.skill-fill').forEach(el => {
      el.style.width = (parseFloat(el.dataset.w) * 100) + '%';
      el.classList.add('animate');
    });
  }, 400);
});

