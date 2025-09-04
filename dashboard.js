// Check if user is logged in
document.addEventListener('DOMContentLoaded', function () {
    const loggedIn = localStorage.getItem('loggedIn');
    const username = localStorage.getItem('username');

    if (loggedIn !== 'true') {
        window.location.href = 'index.html';
        return;
    }

    document.querySelector('.user-info span').textContent = `Welcome, ${username}`;

    // You can also fetch more details from backend using email or ID if needed
});

document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = localStorage.getItem('loggedIn');
    const username = localStorage.getItem('username');
    
    if (!loggedIn || loggedIn !== 'true') {
        // Redirect to home page if not logged in
        window.location.href = 'index.html';
        return;
    }
    
    // Set username in dashboard
    const userInfoSpan = document.querySelector('.user-info span');
    if (userInfoSpan) {
        userInfoSpan.textContent = `Welcome, ${username}`;
    }
    
    // Set current date
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        currentDateElement.textContent = today.toLocaleDateString('en-US', options);
    }
    
    // Load innovations from localStorage
    loadInnovations();
});

// Logout functionality
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        // Clear login status
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        
        // Redirect to home page
        window.location.href = 'Innovation.html';
    });
}

// Load innovations from localStorage
function loadInnovations() {
    const ideasTableBody = document.getElementById('ideas-table-body');
    if (!ideasTableBody) return;
    
    // Get innovations from localStorage
    const innovations = JSON.parse(localStorage.getItem('innovations')) || [];
    
    // Sort innovations by date (newest first)
    innovations.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Clear table body
    ideasTableBody.innerHTML = '';
    
    // Check if there are any innovations
    if (innovations.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="6" style="text-align: center;">No innovation ideas submitted yet.</td>
        `;
        ideasTableBody.appendChild(row);
        return;
    }
    
    // Add innovations to table
    innovations.forEach(innovation => {
        const row = document.createElement('tr');
        
        // Format date
        const date = new Date(innovation.date);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        
        // Create status badge class
        let statusClass = '';
        switch (innovation.status.toLowerCase()) {
            case 'pending':
                statusClass = 'status-pending';
                break;
            case 'approved':
                statusClass = 'status-approved';
                break;
            case 'rejected':
                statusClass = 'status-rejected';
                break;
        }
        
        row.innerHTML = `
            <td>${innovation.title}</td>
            <td>${innovation.category}</td>
            <td>${innovation.submittedBy}</td>
            <td>${formattedDate}</td>
            <td><span class="status-badge ${statusClass}">${innovation.status}</span></td>
            <td>
                <button class="action-btn view-btn" data-id="${innovation.id}"><i class="fas fa-eye"></i></button>
                <button class="action-btn approve-btn" data-id="${innovation.id}"><i class="fas fa-check"></i></button>
                <button class="action-btn reject-btn" data-id="${innovation.id}"><i class="fas fa-times"></i></button>
                <button class="action-btn delete-btn" data-id="${innovation.id}"><i class="fas fa-trash"></i></button>
            </td>
        `;
        
        ideasTableBody.appendChild(row);
    });
    
    // Add event listeners to action buttons
    addActionButtonListeners();
}

// Add event listeners to action buttons
function addActionButtonListeners() {
    // View buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            viewInnovation(id);
        });
    });
    
    // Approve buttons
    const approveButtons = document.querySelectorAll('.approve-btn');
    approveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            updateInnovationStatus(id, 'Approved');
        });
    });
    
    // Reject buttons
    const rejectButtons = document.querySelectorAll('.reject-btn');
    rejectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            updateInnovationStatus(id, 'Rejected');
        });
    });
    
    // Delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            deleteInnovation(id);
        });
    });
}

// View innovation details
function viewInnovation(id) {
    // Get innovations from localStorage
    const innovations = JSON.parse(localStorage.getItem('innovations')) || [];
    
    // Find innovation by id
    const innovation = innovations.find(item => item.id == id);
    
    if (!innovation) return;
    
    // Get modal elements
    const modal = document.getElementById('idea-details-modal');
    const modalContent = document.getElementById('idea-details-content');
    
    // Format date
    const date = new Date(innovation.date);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
    // Create status badge class
    let statusClass = '';
    switch (innovation.status.toLowerCase()) {
        case 'pending':
            statusClass = 'status-pending';
            break;
        case 'approved':
            statusClass = 'status-approved';
            break;
        case 'rejected':
            statusClass = 'status-rejected';
            break;
    }
    
    // Set modal content
    modalContent.innerHTML = `
        <h2>${innovation.title}</h2>
        <div class="idea-meta">
            <span><strong>Category:</strong> ${innovation.category}</span>
            <span><strong>Submitted By:</strong> ${innovation.submittedBy}</span>
            <span><strong>Date:</strong> ${formattedDate}</span>
            <span><strong>Status:</strong> <span class="status-badge ${statusClass}">${innovation.status}</span></span>
        </div>
        <div class="idea-details">
            <div class="idea-section">
                <h3>Problem Statement</h3>
                <p>${innovation.problemStatement}</p>
            </div>
            <div class="idea-section">
                <h3>Proposed Solution</h3>
                <p>${innovation.proposedSolution}</p>
            </div>
            <div class="idea-section">
                <h3>Potential Impact</h3>
                <p>${innovation.potentialImpact}</p>
            </div>
            <div class="idea-section">
                <h3>Resources Needed</h3>
                <p>${innovation.resourcesNeeded}</p>
            </div>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    
    // Close modal when clicking on close button
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Update innovation status
function updateInnovationStatus(id, status) {
    // Get innovations from localStorage
    const innovations = JSON.parse(localStorage.getItem('innovations')) || [];
    
    // Find innovation index
    const index = innovations.findIndex(item => item.id == id);
    
    if (index === -1) return;
    
    // Update status
    innovations[index].status = status;
    
    // Save to localStorage
    localStorage.setItem('innovations', JSON.stringify(innovations));
    
    // Reload innovations
    loadInnovations();
}

// Delete innovation
function deleteInnovation(id) {
    // Confirm deletion
    if (!confirm('Are you sure you want to delete this innovation?')) return;
    
    // Get innovations from localStorage
    const innovations = JSON.parse(localStorage.getItem('innovations')) || [];
    
    // Filter out the innovation to delete
    const updatedInnovations = innovations.filter(item => item.id != id);
    
    // Save to localStorage
    localStorage.setItem('innovations', JSON.stringify(updatedInnovations));
    
    // Reload innovations
    loadInnovations();
}

// Add CSS for idea details modal
document.head.insertAdjacentHTML('beforeend', `
<style>
    .idea-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid var(--border-color);
    }
    
    .idea-section {
        margin-bottom: 20px;
    }
    
    .idea-section h3 {
        margin-bottom: 10px;
        color: var(--primary-color);
    }
</style>
`);