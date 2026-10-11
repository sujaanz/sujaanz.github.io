/**
 * Main JavaScript File for Sk Sujaan Mondal Portfolio
 * Handles dynamic UI interactions: Typing Animation and Scroll Spy navigation.
 */

document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. TYPING ANIMATION (Hero Section)
  // ==========================================
  const roles = [
    "Computer Programmer",
    "B.Sc Computer Science Student",
    "AI & Machine Learning Intern",
    "Deep Learning Learner"
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  // Timing Configurations (in milliseconds)
  const typingSpeed = 90;
  const erasingSpeed = 45;
  const delayBetweenRoles = 1800;

  const typedTextElement = document.getElementById("typed-text");

  function typeEffect() {
    const currentRole = roles[roleIndex];

    // Handle typing and erasing logic
    if (isDeleting) {
      typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    // Determine the current speed
    let speed = isDeleting ? erasingSpeed : typingSpeed;

    // Handle state transitions (finished typing or finished erasing)
    if (!isDeleting && charIndex === currentRole.length) {
      speed = delayBetweenRoles;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Move to the next role in the array
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400; // Short pause before typing the next word
    }

    // Recursively call the function for the animation loop
    setTimeout(typeEffect, speed);
  }

  // Initialize typing effect if the target element exists
  if (typedTextElement) {
    typeEffect();
  }

  // ==========================================
  // 2. SCROLL SPY (Navigation Bar Highlight)
  // ==========================================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNavOnScroll() {
    let current = "";
    const scrollPosition = window.scrollY + 200; // Offset for accuracy when scrolling

    // Determine which section is currently in view
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

    // Update the 'active' class on navigation links
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // Attach scroll event listener to trigger the highlight function
  window.addEventListener("scroll", highlightNavOnScroll);
});