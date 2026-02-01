// Create floating hearts background
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.getElementById('heartsBackground').appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 300);

// Move the No button when clicked
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const container = document.getElementById('buttonsContainer');
    
    const containerRect = container.getBoundingClientRect();
    
    // Random position within a range
    const randomX = (Math.random() - 0.5) * 100;
    const randomY = (Math.random() - 0.5) * 100;
    
    noBtn.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
    
    // Reset position after a bit
    setTimeout(function() {
        const newRandomX = (Math.random() - 0.5) * 100;
        const newRandomY = (Math.random() - 0.5) * 100;
        noBtn.style.transform = 'translate(' + newRandomX + 'px, ' + newRandomY + 'px)';
    }, 500);
}

// Show thank you message
function sayYes() {
    document.getElementById('questionScreen').style.display = 'none';
    document.getElementById('thankYouScreen').style.display = 'block';
    
    // Create celebration effect
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }
}