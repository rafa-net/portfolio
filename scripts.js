// Add coin flip effect to .project elements
const projects = document.querySelectorAll('.project'); 
const navbarLinks = document.querySelectorAll('a');

function randomColor() {  
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
};

projects.forEach(project => {
  project.addEventListener('mouseenter', function() {
    this.classList.add('animate');
    project.style.backgroundColor = randomColor();
  });
  
  project.addEventListener('mouseleave', function() {
    this.classList.remove('animate');
    project.style.backgroundColor = '';
  });
});

navbarLinks.forEach(link => {
  let originalColor;

  link.addEventListener('mouseover', () => {
    originalColor = getComputedStyle(link).color;
    const color = randomColor();
    link.style.setProperty('--random-color', color);
    link.style.color = `var(--random-color)`;
    link.style.backgroundColor = 'initial';
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = originalColor;
  });
});