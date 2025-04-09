// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the index page with the video element
    const bgVideo = document.getElementById('bg-video');
    if (bgVideo) {
        // Ensure video plays automatically
        bgVideo.play().catch(function(error) {
            console.log("Autoplay failed: ", error);
            
            // Create a play button if autoplay fails
            const playButton = document.createElement('button');
            playButton.innerHTML = '<i class="fas fa-play"></i> Play Video';
            playButton.className = 'btn btn-primary btn-lg play-button';
            playButton.style.position = 'absolute';
            playButton.style.zIndex = '3';
            playButton.style.top = '50%';
            playButton.style.left = '50%';
            playButton.style.transform = 'translate(-50%, -50%)';
            
            playButton.addEventListener('click', function() {
                bgVideo.play();
                playButton.style.display = 'none';
            });
            
            document.querySelector('.hero-section').appendChild(playButton);
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize tooltips if using Bootstrap
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});
