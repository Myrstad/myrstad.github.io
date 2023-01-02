//navbar functionality on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50)
    document.querySelector('.hero').classList.add('scrolled');
  else document.querySelector('.hero').classList.remove('scrolled');
});

//navbar mobile responisvess
const navigationToggle = document.querySelector('#responsive-toggle');
navigationToggle.addEventListener('click', (e) => {
  navigationToggle.classList.toggle('active');
});

//get current section and highlight the correct link in the navbar
const hero = document.querySelector('#intro');
const projects = document.querySelector('#prosjektene-mine');
const about = document.querySelector('#om-meg');
const sections = [hero, projects, about];
const navbarLinks = document.querySelectorAll('nav ul li a');
const navbarHeight = 96;
console.log(sections, navbarLinks);
window.addEventListener('scroll', (e) => {
  const scroll = window.scrollY + navbarHeight;
  sections.forEach((element, index) => {
    if (element.offsetTop <= scroll) {
      navbarLinks.forEach((link) => {
        link.classList.remove('active');
      });
      navbarLinks[index].classList.add('active');
    }
  });
  console.log(
    hero.offsetTop,
    projects.offsetTop,
    about.offsetTop,
    window.scrollY + navbarHeight
  );
});
