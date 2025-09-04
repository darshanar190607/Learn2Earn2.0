// DOM Elements
const devLoginBtn = document.getElementById('dev-login-btn');
const loginModal = document.getElementById('login-modal');
const closeButtons = document.querySelectorAll('.close');
const loginForm = document.getElementById('login-form');
const innovationForm = document.getElementById('innovation-form');
const successModal = document.getElementById('success-modal');
const closeSuccessBtn = document.getElementById('close-success');

// Show login modal
if (devLoginBtn) {
    devLoginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });
}

// Close modals when clicking on close button
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modals when clicking outside of modal content
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Handle login form submission
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Check credentials
        if (username === 'Darshan' && password === 'Darshanar@123') {
            // Store login status in localStorage
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', username);
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
}

// Handle innovation form submission
if (innovationForm) {
    innovationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const title = document.getElementById('innovation-title').value;
        const category = document.getElementById('category').value;
        const problemStatement = document.getElementById('problem-statement').value;
        const proposedSolution = document.getElementById('proposed-solution').value;
        const potentialImpact = document.getElementById('potential-impact').value;
        const resourcesNeeded = document.getElementById('resources-needed').value;
        
        // Create innovation object
        const innovation = {
            id: Date.now(),
            title,
            category,
            problemStatement,
            proposedSolution,
            potentialImpact,
            resourcesNeeded,
            submittedBy: 'Guest User',
            date: new Date().toISOString(),
            status: 'Pending'
        };
        
        // Get existing innovations from localStorage or initialize empty array
        const innovations = JSON.parse(localStorage.getItem('innovations')) || [];
        
        // Add new innovation
        innovations.push(innovation);
        
        // Save to localStorage
        localStorage.setItem('innovations', JSON.stringify(innovations));
        
        // Show success modal
        successModal.style.display = 'block';
        
        // Reset form
        innovationForm.reset();
    });
}

// Close success modal
if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
}

// Share buttons functionality
const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(button => {
    button.addEventListener('click', function() {
        const innovationTitle = this.closest('.innovation-card').querySelector('h3').textContent;
        
        // Check if Web Share API is supported
        if (navigator.share) {
            navigator.share({
                title: 'Innovation Zone',
                text: `Check out this innovation: ${innovationTitle}`,
                url: window.location.href
            })
            .catch(error => console.log('Error sharing:', error));
        } else {
            alert(`Share this innovation: ${innovationTitle}`);
        }
    });
});
