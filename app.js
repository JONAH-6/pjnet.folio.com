

// Reveal on scroll
function revealOnScroll() {
    // Reveal all elements with .reveal
    document.querySelectorAll('.reveal').forEach(function(el) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100; // Adjust for earlier/later reveal

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    // Reveal the .project section
    var project = document.querySelector('.project');
    if (project) {
        const windowHeight = window.innerHeight;
        const elementTop = project.getBoundingClientRect().top;
        const revealPoint = 100;
        if (elementTop < windowHeight - revealPoint) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    }
}
function toggleMenu() {
  document.querySelector('.main-nav ul').classList.toggle('active');
}
 
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
