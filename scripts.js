// Add coin flip effect to .project elements
const projects = document.querySelectorAll('.project'); 
  
projects.forEach(project => {
  project.addEventListener('mouseenter', function() {
    this.classList.add('animate');
    project.style.backgroundColor = randomColor();
    project.style.color = randomColor();
  });
  
  project.addEventListener('mouseleave', function() {
    this.classList.remove('animate');
    project.style.backgroundColor = '';
    project.style.color = '';
  });
});

// Random color generator
function randomColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
};

