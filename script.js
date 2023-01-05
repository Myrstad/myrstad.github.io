//navbar functionality on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50)
    document.querySelector('.hero').classList.add('scrolled');
  else document.querySelector('.hero').classList.remove('scrolled');
});

//navbar mobile responisvess
const navbar = document.querySelector('#intro .navigation');
const navigationToggle = document.querySelector('#responsive-toggle');
navigationToggle.addEventListener('click', () => {
  navigationToggle.classList.toggle('active');
});

//auto exit mobile navigation
const mobilenavDropdown = document.querySelector('.navigation ul');
mobilenavDropdown.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') navigationToggle.classList.remove('active');
});

window.addEventListener('click', (e) => {
  if (navigationToggle.className == 'active' && !navbar.contains(e.target)) {
    navigationToggle.classList.remove('active');
  }
});

//get current section and highlight the correct link in the navbar
const hero = document.querySelector('#intro');
const projects = document.querySelector('#prosjektene-mine');
const about = document.querySelector('#om-meg');
const contact = document.querySelector('#kontakt-meg');
const sections = [hero, projects, about, contact];
const navbarLinks = document.querySelectorAll('nav ul li a');
const navbarHeight = 96;

window.addEventListener('scroll', (e) => {
  navigationToggle.classList.remove('active');
  const scroll = window.scrollY + navbarHeight + 8;
  sections.forEach((element, index) => {
    if (element.offsetTop <= scroll) {
      navbarLinks.forEach((link) => {
        link.classList.remove('active');
      });
      navbarLinks[index].classList.add('active');
    }
  });
});
