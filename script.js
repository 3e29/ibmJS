// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
});

// Search Functionality
function searchDestinations() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        alert('Please enter a destination or keyword to search.');
        return;
    }
    
    // Simple search simulation
    const destinations = {
        'maldives': 'paradise-beaches',
        'bali': 'paradise-beaches',
        'beach': 'paradise-beaches',
        'beaches': 'paradise-beaches',
        'angkor': 'sacred-temples',
        'kyoto': 'sacred-temples',
        'temple': 'sacred-temples',
        'temples': 'sacred-temples',
        'iceland': 'country-highlights',
        'morocco': 'country-highlights',
        'country': 'country-highlights',
        'countries': 'country-highlights'
    };
    
    let found = false;
    for (const [key, section] of Object.entries(destinations)) {
        if (searchTerm.includes(key)) {
            // Scroll to the relevant section
            const targetSection = document.querySelector(`[data-section="${section}"]`) || 
                                 document.querySelector('.recommendations');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                found = true;
                break;
            }
        }
    }
    
    if (!found) {
        alert(`No results found for "${searchTerm}". Try searching for beaches, temples, or countries.`);
    }
    
    // Clear search input
    searchInput.value = '';
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchDestinations();
            }
        });
    }
});

// Booking Modal Functions
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeBookingModal();
    }
});

// Booking Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const destination = document.getElementById('destination').value;
            const travelers = document.getElementById('travelers').value;
            const dates = document.getElementById('dates').value;
            
            // Simple form validation
            if (!destination || !travelers || !dates) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate booking submission
            alert(`Thank you for your booking request!\n\nDestination: ${destination}\nTravelers: ${travelers}\nDate: ${dates}\n\nWe'll contact you within 24 hours to confirm your booking.`);
            
            // Reset form and close modal
            bookingForm.reset();
            closeBookingModal();
        });
    }
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            alert(`Thank you for your message, ${name}!\n\nWe've received your inquiry about "${subject}" and will respond to ${email} within 24 hours.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Smooth Scrolling for Internal Links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Image Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.card-img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = function() {
                    img.style.opacity = '1';
                };
                
                // If image is already cached
                if (img.complete) {
                    img.style.opacity = '1';
                }
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Card Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.recommendation-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Social Media Links (placeholder functionality)
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').classList[1].split('-')[1];
            alert(`This would normally open our ${platform.charAt(0).toUpperCase() + platform.slice(1)} page!`);
        });
    });
});

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.onclick = scrollToTop;
    
    // Add styles
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    });
});
