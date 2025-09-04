
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Nav menu toggle for mobile
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
  });
  
  // Shrink navbar on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
        
        navLinks.forEach(link => {
          link.style.animation = '';
        });
      }
    });
  });
  
  // Read More Toggle
  const readMoreButtons = document.querySelectorAll('.read-more');
  
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.specialty-card');
      const details = card.querySelector('.specialty-details');
      
      details.classList.toggle('hidden');
      
      if (!details.classList.contains('hidden')) {
        this.innerHTML = '<i class="fas fa-minus-circle"></i> Show Less';
      } else {
        this.innerHTML = '<i class="fas fa-plus-circle"></i> Learn More';
      }
    });
  });
  
  // Reveal elements on scroll
  function revealOnScroll() {
    const specialtyCards = document.querySelectorAll('.specialty-card');
    const collegeCards = document.querySelectorAll('.college-card');
    const examCards = document.querySelectorAll('.exam-detail-card');
    const resourceCards = document.querySelectorAll('.resource-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const elementSets = [specialtyCards, collegeCards, examCards, resourceCards, timelineItems];
    const windowHeight = window.innerHeight;
    
    elementSets.forEach(elements => {
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('revealed');
        }
      });
    });
  }
  
  // Initial check for elements in view
  revealOnScroll();
  
  // Check for elements on scroll
  window.addEventListener('scroll', revealOnScroll);
  
  // View More College functionality
  const viewMoreIndiaBtn = document.getElementById('view-more-india');
  const moreIndiaColleges = document.getElementById('more-india-colleges');
  
  if (viewMoreIndiaBtn && moreIndiaColleges) {
    viewMoreIndiaBtn.addEventListener('click', function() {
      if (moreIndiaColleges.classList.contains('hidden')) {
        // Additional colleges for India
        const additionalIndiaColleges = [
          {
            name: 'Symbiosis Law School, Pune',
            icon: 'fas fa-university',
            rating: 4,
            established: '1977',
            ranking: '#7',
            courses: 'BA LLB, BBA LLB, LLM',
            seats: '180',
            selection: 'SLAT',
            website: 'www.symlaw.ac.in'
          },
          {
            name: 'ILS Law College, Pune',
            icon: 'fas fa-landmark',
            rating: 4,
            established: '1924',
            ranking: '#8',
            courses: 'LLB, BA LLB, LLM, PhD',
            seats: '120',
            selection: 'CET',
            website: 'www.ilslaw.edu'
          },
          {
            name: 'Faculty of Law, Delhi University',
            icon: 'fas fa-book',
            rating: 4,
            established: '1924',
            ranking: '#9',
            courses: 'LLB, LLM, PhD',
            seats: '2000',
            selection: 'DU LLB Entrance',
            website: 'www.law.du.ac.in'
          },
          {
            name: 'GNLU, Gandhinagar',
            icon: 'fas fa-balance-scale',
            rating: 4,
            established: '2003',
            ranking: '#10',
            courses: 'BA LLB, BCom LLB, LLM, PhD',
            seats: '180',
            selection: 'CLAT',
            website: 'www.gnlu.ac.in'
          }
        ];
        
        let html = '<div class="colleges-container">';
        additionalIndiaColleges.forEach((college, index) => {
          const stars = getStarHtml(college.rating);
          
          html += `
          <div class="college-card" style="--i: ${index + 1};">
            <div class="college-header">
              <h3><i class="${college.icon}"></i> ${college.name}</h3>
              <div class="rating">
                ${stars}
              </div>
            </div>
            <div class="college-body">
              <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> ${college.established}</p>
              <p><i class="fas fa-award"></i> <strong>NIRF Ranking:</strong> ${college.ranking}</p>
              <p><i class="fas fa-book-open"></i> <strong>Courses:</strong> ${college.courses}</p>
              <p><i class="fas fa-user-graduate"></i> <strong>Seats:</strong> ${college.seats} BA LLB seats annually</p>
              <p><i class="fas fa-chart-line"></i> <strong>Selection:</strong> ${college.selection}</p>
              <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://${college.website}" target="_blank">${college.website}</a></p>
            </div>
          </div>
          `;
        });
        
        html += '</div>';
        
        moreIndiaColleges.innerHTML = html;
        moreIndiaColleges.classList.remove('hidden');
        viewMoreIndiaBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less';
        
        // Trigger reveal animation for new elements
        setTimeout(revealOnScroll, 100);
      } else {
        moreIndiaColleges.classList.add('hidden');
        viewMoreIndiaBtn.innerHTML = '<i class="fas fa-plus"></i> View More Colleges';
      }
    });
  }
  
  // View More TN Colleges
  const viewMoreTNBtn = document.getElementById('view-more-tn');
  const moreTNColleges = document.getElementById('more-tn-colleges');
  
  if (viewMoreTNBtn && moreTNColleges) {
    viewMoreTNBtn.addEventListener('click', function() {
      if (moreTNColleges.classList.contains('hidden')) {
        // Additional colleges for Tamil Nadu
        const additionalTNColleges = [
          {
            name: 'Government Law College, Chengalpattu',
            icon: 'fas fa-university',
            rating: 3.5,
            established: '1999',
            ranking: '#7',
            courses: 'BA LLB, LLB, LLM',
            seats: '80',
            selection: 'TNDALU Entrance',
            website: 'www.glccpt.in'
          },
          {
            name: 'Dr. Ambedkar Government Law College, Puducherry',
            icon: 'fas fa-gavel',
            rating: 3.5,
            established: '1995',
            ranking: 'Regional',
            courses: 'LLB, BA LLB',
            seats: '60',
            selection: 'Pondicherry University Entrance',
            website: 'www.aglcpdy.edu.in'
          },
          {
            name: 'VIT Law School, Chennai',
            icon: 'fas fa-building',
            rating: 3.5,
            established: '2013',
            ranking: 'Private',
            courses: 'BA LLB, BBA LLB',
            seats: '120',
            selection: 'VITEEE + PI',
            website: 'www.vit.ac.in/law'
          },
          {
            name: 'SRM School of Law, Chennai',
            icon: 'fas fa-book',
            rating: 3.5,
            established: '2012',
            ranking: 'Private',
            courses: 'BA LLB, BBA LLB, LLM',
            seats: '120',
            selection: 'SRMJEE + Interview',
            website: 'www.srmist.edu.in/law'
          }
        ];
        
        let html = '<div class="colleges-container">';
        additionalTNColleges.forEach((college, index) => {
          const stars = getStarHtml(college.rating);
          
          html += `
          <div class="college-card" style="--i: ${index + 1};">
            <div class="college-header">
              <h3><i class="${college.icon}"></i> ${college.name}</h3>
              <div class="rating">
                ${stars}
              </div>
            </div>
            <div class="college-body">
              <p><i class="fas fa-calendar-alt"></i> <strong>Established:</strong> ${college.established}</p>
              <p><i class="fas fa-award"></i> <strong>State Ranking:</strong> ${college.ranking}</p>
              <p><i class="fas fa-book-open"></i> <strong>Courses:</strong> ${college.courses}</p>
              <p><i class="fas fa-user-graduate"></i> <strong>Seats:</strong> ${college.seats} seats annually</p>
              <p><i class="fas fa-chart-line"></i> <strong>Selection:</strong> ${college.selection}</p>
              <p><i class="fas fa-globe"></i> <strong>Website:</strong> <a href="https://${college.website}" target="_blank">${college.website}</a></p>
            </div>
          </div>
          `;
        });
        
        html += '</div>';
        
        moreTNColleges.innerHTML = html;
        moreTNColleges.classList.remove('hidden');
        viewMoreTNBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less';
        
        // Trigger reveal animation for new elements
        setTimeout(revealOnScroll, 100);
      } else {
        moreTNColleges.classList.add('hidden');
        viewMoreTNBtn.innerHTML = '<i class="fas fa-plus"></i> View More Colleges';
      }
    });
  }
  
  // Helper function to generate star HTML
  function getStarHtml(rating) {
    let html = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    for (let i = 0; i < fullStars; i++) {
      html += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
      html += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
      html += '<i class="far fa-star"></i>';
    }
    
    return html;
  }
  
  // Add animation to scales of justice
  function animateScales() {
    const scaleLeft = document.querySelector('.scale-left');
    const scaleRight = document.querySelector('.scale-right');
    
    let direction = 1;
    
    setInterval(() => {
      if (scaleLeft && scaleRight) {
        scaleLeft.style.transform = `translateY(${5 * direction}px)`;
        scaleRight.style.transform = `translateY(${-5 * direction}px)`;
        direction *= -1;
      }
    }, 1000);
  }
  
  // Initialize scales animation
  animateScales();
});

// Add keyframe animation for nav links
const style = document.createElement('style');
style.innerHTML = `
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.burger.toggle div:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
}
.burger.toggle div:nth-child(2) {
  opacity: 0;
}
.burger.toggle div:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}
`;
document.head.appendChild(style);
