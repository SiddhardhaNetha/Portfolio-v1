const skills = [
    "GRAPHIC\nDESIGNER",
    "VIDEO\nEDITOR",
    "WEB\nDEVELOPER",
    "APP\nDEVELOPER"
];

let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

const typedTextElement = document.getElementById('typed-text');

function type() {
    const currentSkill = skills[skillIndex];
    
    if (isPaused) {
        setTimeout(type, 2000); // 2 second pause
        isPaused = false;
        isDeleting = true;
        return;
    }
    
    if (isDeleting) {
        // Remove characters
        typedTextElement.innerHTML = currentSkill.substring(0, charIndex - 1).replace('\n', '<br>');
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length; // Move to next skill
            setTimeout(type, 500); // Short pause before typing next skill
            return;
        }
    } else {
        // Add characters
        typedTextElement.innerHTML = currentSkill.substring(0, charIndex + 1).replace('\n', '<br>');
        charIndex++;
        
        if (charIndex === currentSkill.length) {
            isPaused = true;
            setTimeout(type, 2000); // 2 second pause after completing word
            return;
        }
    }
    
    // Typing speed
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(type, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Ensure page loads from the top
    window.scrollTo(0, 0);
    setTimeout(type, 500); // Small delay before starting
    
    // Initialize Brand-Name animation
    initBrandNameAnimation();
});

// Force page to load from top on reload/navigation
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Smooth scroll with easing
let isScrolling = false;
let targetScrollY = window.scrollY;
let currentScrollY = window.scrollY;

function smoothScroll() {
    if (Math.abs(targetScrollY - currentScrollY) < 0.5) {
        currentScrollY = targetScrollY;
        isScrolling = false;
        return;
    }
    
    currentScrollY += (targetScrollY - currentScrollY) * 0.039; // Easing factor (lower = smoother)
    window.scrollTo(0, currentScrollY);
    
    if (isScrolling) {
        requestAnimationFrame(smoothScroll);
    }
}

window.addEventListener('wheel', (e) => {
    e.preventDefault();
    targetScrollY += e.deltaY;
    
    // Clamp the target scroll position
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));
    
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
    }
}, { passive: false });

// Cinematic Brand-Name letter reveal animation
function initBrandNameAnimation() {
    const brandName = document.querySelector('.Brand-Name');
    if (!brandName) return;
    
    const text = brandName.textContent;
    brandName.textContent = '';
    
    // Split text into individual letter spans
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = char;
        span.style.transitionDelay = `${index * 0.05}s`;
        brandName.appendChild(span);
    });
    
    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    observer.observe(brandName);
}

// Interactive cursor effect for secondary button
document.addEventListener('DOMContentLoaded', () => {
    const btnSecondary = document.querySelector('.btn-secondary');
    
    if (btnSecondary) {
        btnSecondary.addEventListener('mousemove', (e) => {
            const rect = btnSecondary.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            btnSecondary.style.setProperty('--mouse-x', `${x}px`);
            btnSecondary.style.setProperty('--mouse-y', `${y}px`);
        });
    }
});
