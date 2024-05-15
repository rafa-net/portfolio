const projects = document.querySelectorAll('.project'); 
  
projects.forEach(project => {
  project.addEventListener('mouseenter', function() {
    this.classList.add('animate');
  });
  
  project.addEventListener('mouseleave', function() {
    this.classList.remove('animate');
  });
});