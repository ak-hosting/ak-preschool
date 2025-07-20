// Rize Kindergarten Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initScrollToTop();
    initSmoothScrolling();
    initFormValidation();
    initVirtualTour();
    initAnimations();
    initNavbarScroll();
    initLazyLoading();
});

// Scroll to top functionality
function initScrollToTop() {
    const scrollBtn = document.createElement('div');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Form validation and submission
function initFormValidation() {
    const registrationForm = document.getElementById('registration-form');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }
            
            // Validate required fields
            const requiredFields = ['parentName', 'phone', 'childAge'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!input || !input.value.trim()) {
                    isValid = false;
                    showFieldError(input, 'Bu alan zorunludur');
                } else {
                    clearFieldError(input);
                }
            });
            
            // Phone number validation
            const phoneInput = this.querySelector('input[type="tel"]');
            if (phoneInput && phoneInput.value) {
                const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
                if (!phoneRegex.test(phoneInput.value)) {
                    isValid = false;
                    showFieldError(phoneInput, 'Geçerli bir telefon numarası giriniz');
                }
            }
            
            if (isValid) {
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span class="loading"></span> Gönderiliyor...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    showSuccessMessage('Başvurunuz başarıyla alındı! En kısa sürede size dönüş yapacağız.');
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
}

// Show field error
function showFieldError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger mt-2';
    errorDiv.textContent = message;
    
    const existingError = input.parentNode.querySelector('.alert-danger');
    if (existingError) {
        existingError.remove();
    }
    
    input.parentNode.appendChild(errorDiv);
    input.classList.add('is-invalid');
}

// Clear field error
function clearFieldError(input) {
    const errorDiv = input.parentNode.querySelector('.alert-danger');
    if (errorDiv) {
        errorDiv.remove();
    }
    input.classList.remove('is-invalid');
}

// Show success message
function showSuccessMessage(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const form = document.getElementById('registration-form');
    form.parentNode.insertBefore(alertDiv, form);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Virtual tour functionality
function initVirtualTour() {
    window.startVirtualTour = function() {
        const tourContainer = document.querySelector('.virtual-tour-placeholder');
        
        if (tourContainer) {
            tourContainer.innerHTML = `
                <div class="text-center">
                    <i class="fas fa-vr-cardboard fa-3x text-success mb-3"></i>
                    <h4>Sanal Tur Başlatılıyor...</h4>
                    <p class="text-muted">360° sınıf görüntüleri yükleniyor</p>
                    <div class="loading mt-3"></div>
                </div>
            `;
            
            // Simulate loading
            setTimeout(() => {
                tourContainer.innerHTML = `
                    <div class="text-center">
                        <i class="fas fa-check-circle fa-3x text-success mb-3"></i>
                        <h4>Sanal Tur Hazır!</h4>
                        <p class="text-muted">Demo sürümü - Gerçek tur için iletişime geçin</p>
                        <button class="btn btn-outline-success mt-2" onclick="showTourInfo()">
                            <i class="fas fa-info-circle me-2"></i>Detaylar
                        </button>
                    </div>
                `;
            }, 3000);
        }
    };
    
    window.showTourInfo = function() {
        alert('Sanal tur özelliği için ak@ak-pro.com adresinden iletişime geçebilirsiniz.');
    };
}

// Scroll animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.program-card, .teacher-card, .gallery-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Age group filtering
function filterPrograms(age) {
    const programCards = document.querySelectorAll('.program-card');
    
    programCards.forEach(card => {
        const cardAge = card.dataset.age;
        if (age === 'all' || cardAge === age) {
            card.style.display = 'block';
            card.classList.add('fade-in-up');
        } else {
            card.style.display = 'none';
        }
    });
}

// Contact form enhancement
function enhanceContactForm() {
    const phoneInput = document.querySelector('input[type="tel"]');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Format Turkish phone number
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = `(${value}`;
                } else if (value.length <= 6) {
                    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                } else if (value.length <= 8) {
                    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)} ${value.slice(6)}`;
                } else {
                    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)} ${value.slice(6, 8)} ${value.slice(8)}`;
                }
            }
            
            e.target.value = value;
        });
    }
}

// Initialize contact form enhancement
document.addEventListener('DOMContentLoaded', enhanceContactForm);

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const optimizedScrollHandler = debounce(function() {
    // Handle scroll events efficiently
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Service Worker registration for PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for global access
window.RizeKindergarten = {
    filterPrograms,
    startVirtualTour,
    showTourInfo
}; 