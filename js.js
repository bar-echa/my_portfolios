let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top <offset + height){
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
         })
        };
    });
    /*==== sticky navbar====*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===remove toggle icon===*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*====toggle icon navbar==*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===scroll reveal===*/
ScrollReveal({
     distance:'80px',
     duration: 2000,
     delay:200
     });
     ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
     ScrollReveal().reveal('.home-img, .services-container,portfoli-box, .contact form' , {origin:'bottom'});
     ScrollReveal().reveal('.home-content h1,  .about-img' , {origin:'left'});
     ScrollReveal().reveal('.home-content p,  .about-content' , {origin:'right'});

     /*=== typed js==*/
      const typed = new Typed('.multiple-text',{
              Strings: ["Frontend","youtuber"," blogger"],
              typespeed: 100,
              backspeed:100,
              backdelay:1000,
              loop: true
      });

const scriptURL = 'https://script.google.com/macros/s/AKfycbw2nL9Zz26wRHAZfpmuh5v35SskEGIDPLYWAf-nGH0O9Z6zd9UpDCau7sJXwE1wVROEeA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("btn")


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       msg.innerHTML = "Thank you for your feedback!"

        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
})
    .catch(error => console.error('Error!', error.message))
})
function toggleContent() {
    var extraContent = document.getElementById("extra-content");
    var btn = document.querySelector(".btn");

    if (extraContent.style.display === "none") {
      extraContent.style.display = "inline";
      btn.textContent = "Read Less";
    } else {
      extraContent.style.display = "none";
      btn.textContent = "Read More";
    }
  }
  function toggleContent1() {
    var extraContent1 = document.getElementById("extra-content1");
    var btn = document.querySelector(".btn");

    if (extraContent1.style.display === "none") {
      extraContent1.style.display = "inline";
      btn.textContent1 = "Read Less";
    } else {
      extraContent1.style.display = "none";
      btn.textContent1 = "Read More";
    }
  }
  function toggleContent2() {
    var extraContent2= document.getElementById("extra-content2");
    var btn = document.querySelector(".btn");

    if (extraContent2.style.display === "none") {
      extraContent2.style.display = "inline";
      btn.textContent2 = "Read Less";
    } else {
      extraContent2.style.display = "none";
      btn.textContent2 = "Read More";
    }
  }
  function toggleContent3() {
    var extraContent3= document.getElementById("extra-content3");
    var btn = document.querySelector(".btn");

    if (extraContent3.style.display === "none") {
      extraContent3.style.display = "inline";
      btn.textContent3 = "Read Less";
    } else {
      extraContent3.style.display = "none";
      btn.textContent3 = "Read More";
    }
  }