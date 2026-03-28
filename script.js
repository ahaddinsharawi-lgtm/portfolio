document.addEventListener('DOMContentLoaded', () => {
    // 1. Terminal Typing Effect for the Main Title
    const title = document.querySelector('.glitch-text');
    if (title) {
        const text = title.innerText;
        title.innerText = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                title.innerText += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Speed of typing
            }
        }
        typeWriter();
    }

    // 2. Real-time System Clock (Updates every second)
    const updateClock = () => {
        const tempSpan = document.querySelector('.temp');
        if (tempSpan) {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            });
            // Keeps the temperature but adds the live system time
            tempSpan.innerText = `27°C // ${timeString}`;
        }
    };
    
    setInterval(updateClock, 1000);
    updateClock();

    // 3. Secure Connection Simulation (Button Click)
    const navCards = document.querySelectorAll('.nav-card');
    navCards.forEach(card => {
        card.addEventListener('click', (e) => {
            console.log(">> Initializing Secure Connection...");
            // If the card is an anchor link, this allows smooth scrolling
            const targetId = card.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
