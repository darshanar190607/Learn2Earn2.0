// DOM Elements
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

// Generate additional India colleges (top colleges)
function generateMoreIndiaColleges() {
  return `
    <div class="colleges-container">
      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-building"></i> Presidency College, Chennai</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1840</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #18 (College Category)</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom in various disciplines</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Historic institution, excellent faculty, research focus</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 80-90% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.presidencychennai.edu.in" target="_blank">www.presidencychennai.edu.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-landmark"></i> St. Xavier's College, Mumbai</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1869</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #8 (College Category)</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom, BMS, BMM</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Autonomous, excellent infrastructure, strong alumni network</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 90-95% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.xaviers.edu" target="_blank">www.xaviers.edu</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-school"></i> Fergusson College, Pune</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1885</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #11 (College Category)</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCA, BBA, BVoc</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Heritage campus, autonomous, strong science programs</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 85-95% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.fergusson.edu" target="_blank">www.fergusson.edu</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-university"></i> Hansraj College, Delhi</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1948</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #9 (College Category)</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom in various disciplines</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Modern facilities, diverse courses, strong placement record</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 95-98% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.hansrajcollege.ac.in" target="_blank">www.hansrajcollege.ac.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-graduation-cap"></i> Ramjas College, Delhi</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1917</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #12 (College Category)</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom in various disciplines</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Over 100 years of excellence, strong commerce department</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 94-98% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.ramjas.du.ac.in" target="_blank">www.ramjas.du.ac.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-building"></i> Madras Christian College, Chennai</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1837</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #20 (College Category)</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom, MA, MSc, MCom</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Historic campus, strong alumni network, research focus</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 75-90% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.mcc.edu.in" target="_blank">www.mcc.edu.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-school"></i> Mount Carmel College, Bangalore</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1948</p>
          <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> #21 (College Category)</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom, BBA, BCA</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Women's college, autonomous, holistic education</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 85-95% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.mccblr.edu.in" target="_blank">www.mccblr.edu.in</a></p>
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
          <h3><i class="fas fa-university"></i> Queen Mary's College, Chennai</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1914</p>
          <p><i class="fas fa-award"></i> <strong>Ranking:</strong> Top 50 in India</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom, MA, MSc, MCom</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Women's college, historic institution, waterfront campus</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 70-80% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.queenmaryscollege.edu.in" target="_blank">www.queenmaryscollege.edu.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-landmark"></i> PSG College of Arts & Science, Coimbatore</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1947</p>
          <p><i class="fas fa-award"></i> <strong>Ranking:</strong> Top 30 in India</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom, BBA, BCA, MA, MSc, MCom</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Autonomous, excellent infrastructure, strong industry connections</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 75-90% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.psgcas.ac.in" target="_blank">www.psgcas.ac.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-school"></i> American College, Madurai</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1881</p>
          <p><i class="fas fa-award"></i> <strong>Ranking:</strong> Top 40 in India</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom, BBA, MA, MSc, MCom</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Autonomous, historic campus, value-based education</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 70-85% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.americancollege.edu.in" target="_blank">www.americancollege.edu.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-building"></i> Bishop Heber College, Trichy</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1966</p>
          <p><i class="fas fa-award"></i> <strong>Ranking:</strong> Top 45 in India</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom, BBA, BCA, MA, MSc, MCom</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Autonomous, sprawling campus, excellent facilities</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 70-85% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.bhc.edu.in" target="_blank">www.bhc.edu.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-graduation-cap"></i> Holy Cross College, Trichy</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1923</p>
          <p><i class="fas fa-award"></i> <strong>Ranking:</strong> Top 50 in India</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom, MA, MSc, MCom</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Women's college, autonomous, century-old legacy</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 75-85% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.holycrosscollege.edu.in" target="_blank">www.holycrosscollege.edu.in</a></p>
        </div>
      </div>

      <div class="college-card">
        <div class="college-header">
          <h3><i class="fas fa-university"></i> PSGR Krishnammal College, Coimbatore</h3>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="college-body">
          <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> 1963</p>
          <p><i class="fas fa-award"></i> <strong>Ranking:</strong> Top 35 in India</p>
          <p><i class="fas fa-graduation-cap"></i> <strong>Courses:</strong> BA, BSc, BCom, BBA, BCA, MA, MSc, MCom</p>
          <p><i class="fas fa-star"></i> <strong>Key Highlights:</strong> Women's college, autonomous, strong placement record</p>
          <p><i class="fas fa-percentage"></i> <strong>Cut-off:</strong> 80-90% in 12th for most courses</p>
          <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://www.psgrkcw.ac.in" target="_blank">www.psgrkcw.ac.in</a></p>
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

// Function to animate icons
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

// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
  // Burger menu toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li a');
  
  if (burger) {
    burger.addEventListener('click', function() {
      // Toggle nav
      nav.classList.toggle('nav-active');
      
      // Burger animation
      burger.classList.toggle('toggle');
    });
  }
  
  // Ensure links work properly
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Don't prevent default behavior for links
      // This allows normal navigation to occur
      
      // Just close the mobile menu if it's open
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
      }
    });
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#navbar') && nav.classList.contains('nav-active')) {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    }
  });
  
  // Close mobile menu when window is resized to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && nav.classList.contains('nav-active')) {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    }
  });
});
