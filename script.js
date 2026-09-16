document.addEventListener("DOMContentLoaded", () => {
  // Typing Animation
  const roles = [
    "Computer Programmer",
    "B.Sc Computer Science Student",
    "AI & Machine Learning Intern",
    "Deep Learning Learner"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const erasingSpeed = 45;
  const delayBetweenRoles = 1800;

  const typedTextElement = document.getElementById("typed-text");

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? erasingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = delayBetweenRoles;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }

  if (typedTextElement) {
    typeEffect();
  }

  // Navigation bar highlight on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNavOnScroll() {
    let current = "";
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavOnScroll);
});