const navigation = [
    { name: "Domain Navigator", href: "/domain-navigator", icon: null },
    { name: "LinkedIn Edge", href: "/linkedin-edge", icon: null, current: true },
    { name: "Interconnectivity Hub", href: "/interconnectivity-hub", icon: null },
    { name: "Essential Guidance", href: "/essential-guidance", icon: null },
    { name: "Innovation Zone", href: "/innovation-zone", icon: null },
  ];
  

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs and panes
                tabs.forEach(t => t.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // Add active class to clicked tab
                this.classList.add('active');

                // Show corresponding pane
                const tabId = this.getAttribute('data-tab');
                const targetPane = document.getElementById(tabId);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }

    // Copy to clipboard functionality
    const copyIcons = document.querySelectorAll('.copy-icon');
    
    if (copyIcons.length > 0) {
        copyIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const content = this.getAttribute('data-content');
                navigator.clipboard.writeText(content)
                    .then(() => {
                        // Visual feedback on copy
                        const originalColor = this.style.color;
                        this.style.color = '#2db400';
                        this.classList.remove('fa-copy');
                        this.classList.add('fa-check');
                        
                        setTimeout(() => {
                            this.style.color = originalColor;
                            this.classList.remove('fa-check');
                            this.classList.add('fa-copy');
                        }, 1500);
                    })
                    .catch(err => {
                        console.error('Could not copy text: ', err);
                    });
            });
        });
    }

    // See more examples functionality
    const seeMoreBtns = document.querySelectorAll('.see-more-btn');
    
    if (seeMoreBtns.length > 0) {
        seeMoreBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    if (targetElement.style.display === 'block') {
                        targetElement.style.display = 'none';
                        this.textContent = 'See More Examples';
                    } else {
                        targetElement.style.display = 'block';
                        this.textContent = 'See Less';
                    }
                }
            });
        });
    }

    // Copy template buttons with more examples toggle
    const copyTemplateBtns = document.querySelectorAll('.copy-template-btn');
    
    if (copyTemplateBtns.length > 0) {
        copyTemplateBtns.forEach(btn => {
            // Handle hover to show more templates
            btn.addEventListener('mouseenter', function() {
                const templateType = this.getAttribute('data-template');
                const moreTemplatesElement = document.getElementById(`more-${templateType}-templates`);
                
                if (moreTemplatesElement) {
                    moreTemplatesElement.style.display = 'block';
                }
            });
            
            // Optional: Hide on mouse leave (remove if you want to keep them visible after hover)
            btn.parentElement.addEventListener('mouseleave', function() {
                const templateType = btn.getAttribute('data-template');
                const moreTemplatesElement = document.getElementById(`more-${templateType}-templates`);
                
                if (moreTemplatesElement) {
                    moreTemplatesElement.style.display = 'none';
                }
            });
            
            // Handle click to copy the template text
            btn.addEventListener('click', function() {
                const templateType = this.getAttribute('data-template');
                const copyableContent = this.parentElement.querySelector('.copyable-content i');
                
                if (copyableContent) {
                    const content = copyableContent.getAttribute('data-content');
                    navigator.clipboard.writeText(content)
                        .then(() => {
                            // Visual feedback
                            const originalText = this.textContent;
                            this.textContent = 'Copied!';
                            
                            setTimeout(() => {
                                this.textContent = originalText;
                            }, 1500);
                        })
                        .catch(err => {
                            console.error('Could not copy text: ', err);
                        });
                }
            });
        });
    }

    // Presence steps animation
    const presenceSteps = document.querySelectorAll('.presence-step');
    
    if (presenceSteps.length > 0) {
        presenceSteps.forEach(step => {
            step.addEventListener('mouseenter', function() {
                const animation = this.getAttribute('data-animation');
                if (animation) {
                    this.style.animation = `${animation} 1s`;
                }
            });
            
            step.addEventListener('mouseleave', function() {
                this.style.animation = '';
            });
        });
    }

    // Hoverable elements animation
    const hoverableElements = document.querySelectorAll('.hoverable');
    
    if (hoverableElements.length > 0) {
        hoverableElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.classList.add('hover-active');
            });
            
            element.addEventListener('mouseleave', function() {
                this.classList.remove('hover-active');
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Video Player Elements
    const video = document.getElementById('linkedin-video');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const currentSpeedDisplay = document.getElementById('current-speed');
    const speedOptions = document.querySelectorAll('.speed-options button');
    const videoControls = document.querySelector('.video-controls');
    
    // Function to toggle play/pause
    function togglePlayPause() {
      if (video.paused) {
        video.play();
        updatePlayPauseIcon('pause');
      } else {
        video.pause();
        updatePlayPauseIcon('play');
      }
    }
    
    // Update play/pause button icon
    function updatePlayPauseIcon(state) {
      const icon = playPauseBtn.querySelector('i');
      
      if (state === 'play') {
        icon.className = 'play-icon';
      } else {
        icon.className = 'pause-icon';
      }
    }
    
    // Toggle fullscreen
    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { /* Safari */
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE11 */
          video.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      }
    }
    
    // Set playback speed
    function setPlaybackSpeed(speed) {
      video.playbackRate = speed;
      currentSpeedDisplay.textContent = speed + 'x';
      
      // Update active class
      speedOptions.forEach(option => {
        if (parseFloat(option.dataset.speed) === speed) {
          option.classList.add('active');
        } else {
          option.classList.remove('active');
        }
      });
    }
    
    // Hide controls when video is playing after a delay
    let controlsTimeout;
    function hideControlsWithDelay() {
      clearTimeout(controlsTimeout);
      videoControls.classList.remove('hidden');
      
      if (!video.paused) {
        controlsTimeout = setTimeout(() => {
          videoControls.classList.add('hidden');
        }, 3000);
      }
    }
    
    // Event Listeners
    playPauseBtn.addEventListener('click', togglePlayPause);
    
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    video.addEventListener('click', togglePlayPause);
    
    video.addEventListener('ended', function() {
      updatePlayPauseIcon('play');
    });
    
    speedOptions.forEach(option => {
      option.addEventListener('click', function() {
        const speed = parseFloat(this.dataset.speed);
        setPlaybackSpeed(speed);
      });
    });
    
    // Show controls on mouse move
    video.addEventListener('mousemove', hideControlsWithDelay);
    videoControls.addEventListener('mousemove', function(e) {
      e.stopPropagation();
      hideControlsWithDelay();
    });
    
    // Initial setup
    hideControlsWithDelay();
  });
  