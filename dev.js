const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
     navLinks.classList.toggle('active');
});

// Skills

const skills = document.querySelectorAll(".circle-skill");

const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
          if (entry.isIntersecting) {
               const circle = entry.target.querySelector(".progress");
               const percent = entry.target.getAttribute("data-percent");
               const radius = 50;
               const circumference = 2 * Math.PI * radius;
               const offset = circumference - (percent / 100) * circumference;
               circle.style.strokeDashoffset = offset;
          }
     });
}, { threshold: 0.7 });

skills.forEach((skill) => {
     observer.observe(skill);
});
