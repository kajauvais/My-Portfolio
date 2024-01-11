const icon = document.querySelector(".icon");
const ul = document.querySelector("ul");

icon.addEventListener("click", () =>{
    console.log(ul);
    ul.classList.toggle("showMenu");
    
    if (ul.className == "showMenu") {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    } else {
        document.getElementById("bar").className = "fa-solid fa-bars";
    }
})




// Scroll to top navigation

const scrolltotop = document.querySelector(".scrolltotop");

window.addEventListener("scroll",function () {
    scrolltotop.classList.toggle("active",window.scrollY > 500);
});

scrolltotop.addEventListener("click",() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// scroll reveal

ScrollReveal({
    reset: true,
    distance:'60px',
    duration: 2500,
    delay:100
});

ScrollReveal().reveal('#home .hero-info h1, .about-title h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('#home .hero-info h1, #home .hero-info h5', { delay: 500, origin: 'left' });
ScrollReveal().reveal('#home .hero-info p, .about-info .about-btn', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.social-icon i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.about-img', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about-main .about-info, .copyright', { delay: 500, origin: 'right'});


// AOS Animation


// Contact Emailjs

let sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener("click",()=>{
    const data = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
        }

        emailjs.send("service_c9tuxcs","template_7634iwg",data).then(()=>{
            alert("Thank For Conatcting Me")
        });
})



// Sticky

const header = document.querySelector(".header");
const scrollSticky = document.createElement("div");

scrollSticky.setAttribute('data-scroll-sticky','');
header.before(scrollSticky);

const navObserver = new IntersectionObserver((entries) => {
    header.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollSticky)