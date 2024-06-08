const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

// Show all projects initially
showProjects('development');

// Add click event listener to filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    

    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    // Add active class to the clicked button
    e.target.classList.add('active');
    showProjects(filter);
  });
});

// Function to show/hide projects based on the filter
function showProjects(filter) {
    projects.forEach(project => {
      const video = project.querySelector('video');
      if (filter === 'all' || project.classList.contains(filter)) {
        project.style.display = 'block';
        if (filter === 'video-editing' && video) {
          video.play();
        } else if (video) {
          video.pause();
        }
      } else {
        project.style.display = 'none';
        if (video) {
          video.pause();
        }
      }
    });
  }
  const ranges = document.querySelectorAll('.range');
  const scoreLabels = document.querySelectorAll('#score');
  
  ranges.forEach((range, index) => {
    range.addEventListener('input', () => {
      scoreLabels[index].textContent = range.value;
    });
  });
  // Get all navigation links
const navLinks = document.querySelectorAll('.list a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    const targetId = e.target.getAttribute('href');
    if (targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling animation
          block: 'start' // Scroll to the top of the target element
        });
      }
    }
  });
});
