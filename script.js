/*========================
PRELOADER
=========================*/

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    }
});


/*========================
MOBILE MENU
=========================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = '<i class="ri-close-line"></i>';
        } else {
            menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';
        }

    });

}


/*========================
STICKY NAVBAR
=========================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(10,15,35,.95)";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(10,15,35,.7)";
        header.style.boxShadow = "none";

    }

});


/*========================
ACTIVE MENU
=========================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*========================
TYPEWRITER EFFECT
=========================*/

const typing = document.querySelector(".typing");

const words = [

    "Java Full Stack Developer",
    "Frontend Developer",
    "Python Programmer",
    "Cyber Security Enthusiast",
    "SQL Developer",
    "Web Designer"

];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);

}

typeEffect();


/*========================
BACK TO TOP BUTTON
=========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}


/*========================
AOS
=========================*/

AOS.init({

    duration: 1000,

    once: true,

    offset: 100

});


/*========================
COUNTER ANIMATION
=========================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 80;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 25);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


/*========================
CONTACT FORM
=========================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}


/*========================
FOOTER YEAR
=========================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/*========================
GITHUB API
=========================*/

fetch("https://api.github.com/users/keerthi-eswar")

.then(response => response.json())

.then(data => {

    if(document.getElementById("repo"))
        document.getElementById("repo").innerHTML = data.public_repos;

    if(document.getElementById("followers"))
        document.getElementById("followers").innerHTML = data.followers;

    if(document.getElementById("following"))
        document.getElementById("following").innerHTML = data.following;

});


/*========================
IMAGE HOVER
=========================*/

const cards = document.querySelectorAll(".project-card,.certificate-item,.skill-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--x",x+"px");
        card.style.setProperty("--y",y+"px");

    });

});

/* ===============================
   ELASTIC ID CARD ANIMATION
================================== */

const idCard = document.querySelector(".id-card");

if (idCard) {

    idCard.addEventListener("click", () => {

        // Remove previous animation
        idCard.classList.remove("elastic");

        // Force reflow so animation can replay
        void idCard.offsetWidth;

        // Add animation class
        idCard.classList.add("elastic");

    });

}

const card = document.getElementById("idCard");

card.addEventListener("click", () => {

    card.classList.remove("elastic");

    void card.offsetWidth;

    card.classList.add("elastic");

});

/*========================
END
=========================*/
