/ DOM Elements
const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('back-to-top');
const navLinks = document.querySelectorAll('.nav-links a');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const specialtyCards = document.querySelectorAll('.specialty-card');
const readMoreBtns = document.querySelectorAll('.read-more');
const viewMoreIndiaBtn = document.getElementById('view-more-india');
const viewMoreTNBtn = document.getElementById('view-more-tn');
const moreIndiaColleges = document.getElementById('more-india-colleges');
const moreTNColleges = document.getElementById('more-tn-colleges');
const collegeCards = document.querySelectorAll('.college-card');
const examCards = document.querySelectorAll('.exam-detail-card');
const resourceCards = document.querySelectorAll('.resource-card');
const timelineItems = document.querySelectorAll('.timeline-item');

// Toggle Mobile Navigation
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  
  // Animate burger icon to X
  burger.children[0].classList.toggle('rotate-45');
  burger.children[0].classList.toggle('translate-y-2');
  burger.children[1].classList.toggle('opacity-0');
  burger.children[2].classList.toggle('-rotate-45');
  burger.children[2].classList.toggle('-translate-y-2');
});

// Close mobile menu after link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Show/Hide Back to Top button
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    const navHeight = navbar.offsetHeight;
    
    window.scrollTo({
      top: targetPosition - navHeight,
      behavior: 'smooth'
    });
  });
});

// Back to Top Button
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Toggle Specialty Card Details
readMoreBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.parentElement;
    const details = card.querySelector('.specialty-details');
    
    details.classList.toggle('hidden');
    
    if (details.classList.contains('hidden')) {
      this.innerHTML = '<i class="fas fa-plus-circle"></i> Learn More';
    } else {
      this.innerHTML = '<i class="fas fa-minus-circle"></i> Show Less';
    }
  });
});

// View More India Colleges
viewMoreIndiaBtn.addEventListener('click', function() {
  if (moreIndiaColleges.classList.contains('hidden')) {
    moreIndiaColleges.classList.remove('hidden');
    this.innerHTML = '<i class="fas fa-minus"></i> Show Less';
    
    // Generate more college cards
    moreIndiaColleges.innerHTML = generateMoreIndiaColleges();
    
    // Apply animation to the newly added cards
    const newCards = moreIndiaColleges.querySelectorAll('.college-card');
    newCards.forEach((card, index) => {
      card.style.setProperty('--i', index + 1);
      card.style.animation = 'fadeInRight 0.8s forwards';
      card.style.animationDelay = `${0.1 * (index + 1)}s`;
    });
  } else {
    moreIndiaColleges.classList.add('hidden');
    this.innerHTML = '<i class="fas fa-plus"></i> View More Colleges';
  }
});

// View More Tamil Nadu Colleges
viewMoreTNBtn.addEventListener('click', function() {
  if (moreTNColleges.classList.contains('hidden')) {
    moreTNColleges.classList.remove('hidden');
    this.innerHTML = '<i class="fas fa-minus"></i> Show Less';
    
    // Generate more college cards
    moreTNColleges.innerHTML = generateMoreTNColleges();
    
    // Apply animation to the newly added cards
    const newCards = moreTNColleges.querySelectorAll('.college-card');
    newCards.forEach((card, index) => {
      card.style.setProperty('--i', index + 1);
      card.style.animation = 'fadeInRight 0.8s forwards';
      card.style.animationDelay = `${0.1 * (index + 1)}s`;
    });
  } else {
    moreTNColleges.classList.add('hidden');
    this.innerHTML = '<i class="fas fa-plus"></i> View More Colleges';
  }
});

// Generate additional India colleges
function generateMoreIndiaColleges() {
  return `
    <div class="colleges-container">
      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-hospital-user"></i> Maulana Azad Medical College, Delhi</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1958</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #9</p>
          <p><i class="fas fa-book-medical"></i> <strong>Courses:</strong> MBBS, MD, MS, DM, MCh</p>
          <p><i class="fas fa-user-graduate"></i> <strong>Seats:</strong> 250 MBBS seats annually</p>
          <p><i class="fas fa-chart-line"></i> <strong>Cut-off:</strong> 95+ percentile in NEET</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.mamc.ac.in" target="_blank">www.mamc.ac.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-medkit"></i> Seth GS Medical College, Mumbai</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1926</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #10</p>
          <p><i class="fas fa-book-medical"></i> <strong>Courses:</strong> MBBS, MD, MS, DM, MCh</p>
          <p><i class="fas fa-user-graduate"></i> <strong>Seats:</strong> 200 MBBS seats annually</p>
          <p><i class="fas fa-chart-line"></i> <strong>Cut-off:</strong> 95+ percentile in NEET</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.gsmc.edu" target="_blank">www.gsmc.edu</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-notes-medical"></i> Grant Medical College, Mumbai</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1845</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #11</p>
          <p><i class="fas fa-book-medical"></i> <strong>Courses:</strong> MBBS, MD, MS, DM, MCh</p>
          <p><i class="fas fa-user-graduate"></i> <strong>Seats:</strong> 200 MBBS seats annually</p>
          <p><i class="fas fa-chart-line"></i> <strong>Cut-off:</strong> 94+ percentile in NEET</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.grantmc.com" target="_blank">www.grantmc.com</a></p>
        </div>
      </div>
    </div>
  `;
}

// Generate additional Tamil Nadu colleges
function generateMoreTNColleges() {
  return `
    <div class="colleges-container">
      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-hospital"></i> Government Medical College, Vellore</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1960</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #48 Nationally</p>
          <p><i class="fas fa-book-medical"></i> <strong>Courses:</strong> MBBS, MD, MS</p>
          <p><i class="fas fa-user-graduate"></i> <strong>Seats:</strong> 100 MBBS seats annually</p>
          <p><i class="fas fa-chart-line"></i> <strong>Cut-off:</strong> 480+ marks in NEET</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.gmcvellore.ac.in" target="_blank">www.gmcvellore.ac.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-stethoscope"></i> PSG Medical College, Coimbatore</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1985</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #38 Nationally</p>
          <p><i class="fas fa-book-medical"></i> <strong>Courses:</strong> MBBS, MD, MS</p>
          <p><i class="fas fa-user-graduate"></i> <strong>Seats:</strong> 150 MBBS seats annually</p>
          <p><i class="fas fa-chart-line"></i> <strong>Cut-off:</strong> 520+ marks in NEET</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.psgmedicalcollege.com" target="_blank">www.psgmedicalcollege.com</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-syringe"></i> Madurai Medical College, Madurai</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1954</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #40 Nationally</p>
          <p><i class="fas fa-book-medical"></i> <strong>Courses:</strong> MBBS, MD, MS</p>
          <p><i class="fas fa-user-graduate"></i> <strong>Seats:</strong> 250 MBBS seats annually</p>
          <p><i class="fas fa-chart-line"></i> <strong>Cut-off:</strong> 500+ marks in NEET</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.mmc.tn.gov.in" target="_blank">www.mmc.tn.gov.in</a></p>
        </div>
      </div>
    </div>
  `;
}

// Reveal animations for sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections for scrolling animations
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
  observer.observe(section);
});

// Observe specialty cards for individual animations
specialtyCards.forEach(card => {
  observer.observe(card);
});

// Observe college cards for individual animations
collegeCards.forEach(card => {
  observer.observe(card);
});

// Observe exam detail cards for individual animations
examCards.forEach(card => {
  observer.observe(card);
});

// Observe resource cards for individual animations
resourceCards.forEach(card => {
  observer.observe(card);
});

// Observe timeline items for individual animations
timelineItems.forEach(item => {
  observer.observe(item);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Apply immediate reveal to hero section
  document.querySelector('#home').classList.add('revealed');
  
  // Apply sequential animations to the specialty cards
  specialtyCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 300 + (index * 100));
  });

  // Apply animations to icons
  animateIcons();
});

// Function to animate icons (added)
function animateIcons() {
  // Get all specialty icons for animation
  const icons = document.querySelectorAll('.specialty-icon i, .resource-icon i, .college-header h3 i');
  
  // Set initial animation delay
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add('revealed');
      icon.style.transform = 'rotateY(360deg)';
      icon.style.transition = 'transform 1s ease-in-out';
    }, 500 + (index * 150));
  });
}
