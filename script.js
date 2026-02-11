// --- Mastered Cards Data & Rendering ---
const masteredCardsData = [
    {
        title: 'designing with',
        highlight: '*deliberacy*',
        tags: ['Strategy', 'Problem Solving', 'Planning', 'Research', 'Metrics'],
        svg: `<svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="80" cy="60" rx="70" ry="50" fill="#1a1aff"/>
            <circle cx="80" cy="60" r="30" fill="white"/>
            <ellipse cx="80" cy="60" rx="15" ry="10" fill="#1a1aff"/>
            <circle cx="80" cy="60" r="5" fill="#222"/>
            </svg>`
        },
        {
            title: 'scaling with',
            highlight: '*efficiency*',
            tags: ['Infrastructure', 'Performance', 'AWS', 'Optimization'],
            svg: `<svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="40" width="100" height="40" rx="4" fill="white"/>
                <rect x="40" y="55" width="80" height="10" rx="2" fill="#1a1aff"/>
                <path d="M80 20 L110 40 L50 40 Z" fill="#efef1e"/>
            </svg>`
        },
    {
        title: 'designing with',
        highlight: '*deliberacy*',
        tags: ['Strategy', 'Problem Solving', 'Planning', 'Research', 'Metrics'],
        svg: `<svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="80" cy="60" rx="70" ry="50" fill="#1a1aff"/>
            <circle cx="80" cy="60" r="30" fill="white"/>
            <ellipse cx="80" cy="60" rx="15" ry="10" fill="#1a1aff"/>
            <circle cx="80" cy="60" r="5" fill="#222"/>
        </svg>`
    },
    {
            title: 'scaling with',
            highlight: '*efficiency*',
            tags: ['Infrastructure', 'Performance', 'AWS', 'Optimization'],
            svg: `<svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="40" width="100" height="40" rx="4" fill="white"/>
                <rect x="40" y="55" width="80" height="10" rx="2" fill="#1a1aff"/>
                <path d="M80 20 L110 40 L50 40 Z" fill="#efef1e"/>
            </svg>`
        },
    {
        title: 'designing with',
        highlight: '*deliberacy*',
        tags: ['Strategy', 'Problem Solving', 'Planning', 'Research', 'Metrics'],
        svg: `<svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="80" cy="60" rx="70" ry="50" fill="#1a1aff"/>
            <circle cx="80" cy="60" r="30" fill="white"/>
            <ellipse cx="80" cy="60" rx="15" ry="10" fill="#1a1aff"/>
            <circle cx="80" cy="60" r="5" fill="#222"/>
        </svg>`
    }
];
    // Example:
    // {
    //     title: 'building with',
    //     highlight: '*precision*',
    //     tags: ['Code', 'Testing', 'Deployment'],
    //     svg: '<svg>...</svg>'
    // }


function renderMasteredCards() {
    const container = document.getElementById('mastered-cards-container');
    if (!container) return;
    container.innerHTML = '';
    
    const track = document.createElement('div');
    track.className = 'mastered-cards-track';
    container.appendChild(track);

    masteredCardsData.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'mastered-card';

        // Illustration
        const illustrationDiv = document.createElement('div');
        illustrationDiv.className = 'mastered-illustration';
        illustrationDiv.innerHTML = card.svg;
        cardDiv.appendChild(illustrationDiv);

        // Card Content
        const contentDiv = document.createElement('div');
        contentDiv.className = 'mastered-card-content';

        // Title
        const title = document.createElement('h3');
        title.className = 'mastered-card-title';
        title.innerHTML = `${card.title}<br><span class="mastered-highlight">${card.highlight}</span>`;
        contentDiv.appendChild(title);

        // Tags
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'mastered-tags';
        card.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'mastered-tag';
            tagSpan.textContent = tag;
            tagsDiv.appendChild(tagSpan);
        });
        contentDiv.appendChild(tagsDiv);

        cardDiv.appendChild(contentDiv);
        track.appendChild(cardDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderMasteredCards();
    initMasteredScroll();
});
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
    // Already calls renderMasteredCards above
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

function initMasteredScroll() {
    const section = document.querySelector('.mastered-section');
    const track = document.querySelector('.mastered-cards-track');
    
    if (!section || !track) return;

    const handleScroll = () => {
        const sectionRect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionHeight = sectionRect.height;
        const navbarOffset = 100;

        let progress = -(sectionRect.top - navbarOffset) / (sectionHeight - viewportHeight);
        progress = Math.max(0, Math.min(1, progress));

        const trackHeight = track.scrollHeight;
        const containerHeight = viewportHeight - navbarOffset;
        const scrollDistance = trackHeight - (containerHeight * 0.8); 

        if (scrollDistance > 0) {
            track.style.transform = `translateY(${-progress * scrollDistance}px)`;
        }

        // --- New: Dynamic Mask Logic ---
        // Hide top shadow when at start, hide bottom shadow when at end
        const container = document.getElementById('mastered-cards-container');
        if (container) {
            const topOpacity = Math.min(progress * 10, 1); // Fades in shadow as we leave the top
            const bottomOpacity = Math.min((1 - progress) * 10, 1); // Fades out shadow as we reach bottom
            
            container.style.setProperty('--mask-top', `${-10 + (10 * topOpacity)}%`);
            container.style.setProperty('--mask-top-solid', `${10 * topOpacity}%`);
            container.style.setProperty('--mask-bottom-solid', `${100 - (10 * bottomOpacity)}%`);
            container.style.setProperty('--mask-bottom', `${110 - (10 * bottomOpacity)}%`);
        }

        // --- New: Individual Card Scaling Logic ---
        const cards = track.querySelectorAll('.mastered-card');
        const containerCenter = navbarOffset + (containerHeight / 2);

        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.top + (cardRect.height / 2);
            
            // Calculate natural focus-based scale (1.0 at center, roughly 0.8 at edges)
            const distanceFromCenter = Math.abs(containerCenter - cardCenter);
            const normalizedDistance = Math.min(distanceFromCenter / (containerHeight / 2), 1);
            
            let targetScale = 1 - (normalizedDistance * 0.12);
            let targetOpacity = 1 - (normalizedDistance * 0.4);

            // Apply special "Start/End" pinning logic
            if (index === 0) {
                // First card: Force 100% when at section start, transition to focus-logic as we scroll
                const startPin = Math.max(0, 1 - (progress * 4)); // PIN in first 25% of scroll
                targetScale = targetScale * (1 - startPin) + (1.0 * startPin);
                targetOpacity = targetOpacity * (1 - startPin) + (1.0 * startPin);
            } else if (index === cards.length - 1) {
                // Last card: Force 100% when at section end, transition to focus-logic when scrolled up
                const endPin = Math.max(0, (progress - 0.75) * 4); // PIN in last 25% of scroll
                targetScale = targetScale * (1 - endPin) + (1.0 * endPin);
                targetOpacity = targetOpacity * (1 - endPin) + (1.0 * endPin);
            }

            card.style.transform = `scale(${targetScale})`;
            card.style.opacity = targetOpacity;
        });
    };

    window.addEventListener('scroll', () => {
        requestAnimationFrame(handleScroll);
    });
    
    handleScroll();
}
