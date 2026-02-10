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
    setTimeout(type, 500); // Small delay before starting
});

