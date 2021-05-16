// create navbar dynamically
const navbar__menu = document.querySelector('.navbar__menu'),
//home
      navItemHome = document.createElement('li'),
      navLinkH = document.createElement('a'),
      homeText = document.createTextNode('Home');

navbar__menu.appendChild(navItemHome);
navItemHome.appendChild(navLinkH);
navLinkH.appendChild(homeText);

navItemHome.classList.add('navbar__item');
navLinkH.classList.add('navbar__links');
navLinkH.setAttribute('data-link','home')

//about
const navItemAbout = document.createElement('li'),
         navLinkA = document.createElement('a'),
         aboutText = document.createTextNode('About');

navbar__menu.appendChild(navItemAbout);
navItemAbout.appendChild(navLinkA);
navLinkA.appendChild(aboutText);

navItemAbout.classList.add('navbar__item');
navLinkA.classList.add('navbar__links');
navLinkA.setAttribute('data-link','about')

//services
const navItemServices = document.createElement('li'),
         navLinkS = document.createElement('a'),
         servicesText = document.createTextNode('services');

navbar__menu.appendChild(navItemServices);
navItemServices.appendChild(navLinkS);
navLinkS.appendChild(servicesText);

navItemServices.classList.add('navbar__item');
navLinkS.classList.add('navbar__links');
navLinkS.setAttribute('data-link','services')

//signup
const navItemSignup = document.createElement('li'),
         navLinkB = document.createElement('a'),
         signupText = document.createTextNode('sign up');

navbar__menu.appendChild(navItemSignup);
navItemSignup.appendChild(navLinkB);
navLinkB.appendChild(signupText);

navItemSignup.classList.add('navbar__item');
navLinkB.classList.add('navbar__links');

navLinkB.setAttribute('data-link','signup')

//scrollIntro view
const links = document.querySelectorAll('.navbar__links')
      links.forEach((item) =>{
      item.addEventListener('click',() => {
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth", block:"start"})
    })
})

// show active menu when scrolling
const activeSection = () =>{
    const activeClass = document.querySelector(".your-active-class");
    const homeSection = document.querySelector("#home");
    const aboutSection = document.querySelector("#about");
    const servicesSection = document.querySelector("#services");
    const signupSection = document.querySelector("#signup");
    let scrollpos = window.scrollY;

    //adds "active-section"
    if(window.innerWidth > 200 && scrollpos < 650){
        homeSection.classList.add("your-active-class");
        aboutSection.classList.remove("your-active-class"); 
        return
    }else if (window.innerWidth > 200 && scrollpos < 1400){
        aboutSection.classList.add("your-active-class");
        homeSection.classList.remove("your-active-class");
        servicesSection.classList.remove("your-active-class");
        return
    }else if(window.innerWidth > 200 && scrollpos < 2345){
        servicesSection.classList.add("your-active-class");
        aboutSection.classList.remove("your-active-class");
        signupSection.classList.remove("your-active-class")
        return
    }else{
        signupSection.classList.add("your-active-class");
        servicesSection.classList.remove("your-active-class");
    }
}
window.addEventListener('scroll', activeSection);
window.addEventListener('click', activeSection);

//function Section sign up
const labels = document.querySelectorAll('.form-control label')


labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map ((letter, idx) => `<Span style="transition-delay:${idx * 50}ms">${letter}</Span>`)
    .join('')
})