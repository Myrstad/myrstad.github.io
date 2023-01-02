//navbar functionality on scroll
document.addEventListener('scroll', () => {
  if (window.scrollY > 50)
    document.querySelector('.hero').classList.add('scrolled');
  else document.querySelector('.hero').classList.remove('scrolled');
});

//navbar mobile responisvess
const navigationToggle = document.querySelector('#responsive-toggle');
navigationToggle.addEventListener('click', (e) => {
  navigationToggle.classList.toggle('active');
});
