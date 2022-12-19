document.addEventListener('scroll', () => {
  if (window.scrollY > 50)
    document.querySelector('.hero').classList.add('scrolled');
  else document.querySelector('.hero').classList.remove('scrolled');
});
