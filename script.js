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
  //remove mobile drowdown on scroll
  //not sure if i like this feature, may remove
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

//contact form
const contactformEl = document.querySelector('.contact-form');

contactformEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const navn = contactformEl.querySelector('#navn').value;
  const emne = contactformEl.querySelector('#emne').value;
  const melding = contactformEl.querySelector('#melding').value;

  let link = 'mailto:post@mortenmyrstad.no?';
  let subject = emne + ' | ' + navn;
  let body = melding;
  body = body.replaceAll(' ', '%20');
  body = body.replaceAll('\n', '%0D%0A');
  console.log(body);
  link += 'body=' + body + '&';
  link += 'subject=' + subject;
  location.href = link;
  a = document.createElement('a');
  a.href = link;
  a.click();
  document.removeChild(a);
});
