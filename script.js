const animatedItems = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

animatedItems.forEach(el => observer.observe(el));

const cartBtn = document.querySelector('.cart-btn');
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    cartBtn.classList.add('pulse');
    setTimeout(() => cartBtn.classList.remove('pulse'), 400);
    alert('カート機能は準備中です。近日公開予定。');
  });
}
