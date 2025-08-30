// Loading animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// Tab functionality
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-content");

function openTab(tabname) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile menu functionality
let sideMenu = document.getElementById("sidemenu");

function openMenu() {
    sideMenu.classList.add("show");
}

function closeMenu() {
    sideMenu.classList.remove("show");
}

// Close menu when clicking on a link
document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});

// Contact form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbyBgB1u1AUGjfusLmA6wbnDNJzEE9OgvsqNQQ7YwHJb16qBYZSxSct9e3PBk5Mbvf7QZQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    msg.textContent = "Sending message...";
    msg.style.color = "#ff004f";
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            msg.style.color = "#61b752";
            setTimeout(function() {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Error sending message. Please try again.";
            msg.style.color = "#ff004f";
        });
});
