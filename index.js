// Create the button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = '↑';
backToTopBtn.id = 'backToTopBtn';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.color = 'white';
backToTopBtn.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.bottom = '30px';
backToTopBtn.style.right = '30px';
backToTopBtn.style.display = 'none';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.fontSize = '16px';
backToTopBtn.style.zIndex = '1000';
backToTopBtn.style.backgroundColor = 'dodgerblue';
document.body.appendChild(backToTopBtn);

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Scroll to top on click
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// JavaScript code to display a message when the form is submitted
function showMessage(event) {
    event.preventDefault(); // Prevent form from submitting/reloading
    document.getElementById("message").innerHTML = "Your message has been submitted!";
}

// Attach the function to the form's submit event
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("myForm"); // Replace with your form's id
    if (form) {
        form.addEventListener('submit', showMessage);
    }
});

// ...existing code...

// Gallery modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal elements
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Attach click event to all gallery images
  document.querySelectorAll('.gallery img').forEach(function(img) {
    img.addEventListener('click', function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  // Close modal when the close button is clicked
  if (closeBtn) {
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  }

  // Optional: Close modal when clicking outside the image
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
// ...existing code...

// ...existing code...

// Scroll-based animation using Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.8 });

  animatedElements.forEach(el => observer.observe(el));
});

// ...existing code...