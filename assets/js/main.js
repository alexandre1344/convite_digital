function getRandomColor() {
    const colors = ['#FF69B4', '#FF1493', '#9370DB', '#87CEEB', '#FF4500', '#FFD700', '#7CFC00'];
    return colors[Math.floor(Math.random() * colors.length)];
}

let balloonColorToggle = true;

function createParticle(type) {
    const particle = document.createElement('div');
    particle.className = type;
    
    if (type === 'confetti' || type === 'star' || type === 'streamer') {
        particle.style.background = getRandomColor();
    } else if (type === 'balloon') {
        particle.style.background = balloonColorToggle ? '#663399' : '#90EE90';
        balloonColorToggle = !balloonColorToggle; // Toggle for next balloon
    }
    
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(particle);

    // Remove particle after animation completes
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

function startAnimation() {
    // Create more particles
    setInterval(() => {
        createParticle('balloon');
        createParticle('confetti');
        createParticle('star');
        createParticle('streamer');
    }, 300);
}

window.addEventListener('load', startAnimation);