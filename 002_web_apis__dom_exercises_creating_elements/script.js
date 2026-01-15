//Creating header

const header = document.createElement('header');
///if there is no classname yet: 
header.className = "header";
/// or header.classList.add('header') if there are multiple classes already

const nav = document.createElement('nav');
nav.className = "nav";

const logo = document.createElement('a');
logo.className = "logo";
logo.href = "#";
logo.textContent = "Coffee Shop";


const navItems = ["Home", "Menu", "About", "Contact"];

navItems.forEach((item) => {
    const navItem = document.createElement('li');
    navItem.className = "nav-item";
    const navLink = document.createElement('a');
    navLink.href = "#";
    navLink.textContent = item;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
});

nav.appendChild(logo);
nav.appendChild(navList);
header.appendChild(nav);
document.body.appendChild(header);

//Creating hero section

const hero = document.createElement('section');
hero.className = "hero";

const heroContent = document.createElement('div');
heroContent.className = "hero-content";

const heroHeading = document.createElement('h1');
heroHeading.textContent = "Welcome to Our Coffee Shop";

const heroParagraph = document.createElement('p');
heroParagraph.textContent = "Enjoy the best coffee in town.";
const heroBtn = document.createElement('a');
heroBtn.href = "#";
heroBtn.className = "btn";
heroBtn.textContent = "Explore Our Menu";

heroContent.appendChild(heroHeading);
heroContent.appendChild(heroParagraph);
heroContent.appendChild(heroBtn);
hero.appendChild(heroContent);
document.body.appendChild(hero);

//Creating footer

const footer = document.createElement('footer');

footer.className = "footer";
const p = document.createElement('p');
p.textContent = "© 2024 Coffee Shop. All rights reserved.";
footer.appendChild(p);
document.body.appendChild(footer);

//It is a good practice to append all elements at once in the right order at the end
///document.body.appendChild(header);
///document.body.appendChild(hero);
///document.body.appendChild(footer);

// Styling with JavaScript

const header = document.querySelector('header');
header.style.backgroundColor = "#fff";
header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
header.style.padding = "1rem 0";

const nav = document.querySelector('nav');
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.maxWidth = "1200px";
nav.style.margin = "0 auto";
nav.style.padding = "0 1rem";

const logo = document.querySelector('.logo');
logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";
logo.style.color = "#333";

const navList = document.querySelectorAll('.nav-item');
console.log(navList)

navList.forEach(item => {
    item.style.display = "flex";
    item.style.listStyle = "none";
});

document.querySelectorAll('.nav-item li');
navItems.forEach(navItem => {
    navItem.style.marginLeft = "1.5rem"
})

const navItemsLinks = document.querySelectorAll('.nav-item a');
navItemsLinks.forEach(link => {
    link.style.textDecoration = "none";
    link.style.color = "#333";
    link.style.fontWeight = "bold";
});

const hero = document.querySelector('.hero');
hero.style.backgroundImage = "url('https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1')";
hero.style.height = "560px";
hero.style.backgroundSize = "center/cover";
hero.style.backgroundPosition = "center";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundColor = "#fff";

const heroContent = document.querySelector('.hero-content');
heroContent.style.maxWidth = "600px";
heroContent.style.height = "100%";
heroContent.style.display = "flex";
heroContent.style.flexDirection = "column";
heroContent.style.textAlign = "center";
heroContent.style.justifyContent = "space-around";
heroContent.style.alignItems = "center";
hero.style.color = "#fff";


const heroContentH1 = document.querySelector('.hero-content h1');
heroContentH1.style.fontSize = "2.5rem";
heroContentH1.style.marginBottom = "1rem";

const heroContentP = document.querySelector('.hero-content p');
heroContentP.style.fontSize = "1.2rem";
heroContentP.style.marginBottom = "2rem";

const button = document.querySelector('.hero-content .btn');
button.style.padding = "0.75rem 1.5rem";
button.style.textDecoration = "none";
button.style.color = "#fff";
button.style.backgroundColor = "#333";
button.style.borderRadius = "5px";
button.style.transition = "background-color 0.3s ease";

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = "#555";
});
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = "#333";
});

const footer = document.querySelector('footer');
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "1rem 0";
footer.style.marginTop = "auto";

