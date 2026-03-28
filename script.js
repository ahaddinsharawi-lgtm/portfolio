document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Effect for Name
    const title = document.querySelector('.glitch-text');
    if (title) {
        const text = "SHARAWI ACOSTA";
        title.innerText = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                title.innerText += text.charAt(i);
                i++;
                setTimeout(typeWriter, 120);
            }
        }
        typeWriter();
    }

    // 2. Real-time Clock for Header
    const updateClock = () => {
        const tempSpan = document.querySelector('.temp');
        if (tempSpan) {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            tempSpan.innerText = `27°C // ${timeString}`;
        }
    };
    setInterval(updateClock, 1000);
    updateClock();

    // 3. Modal Popup Logic
    const modal = document.getElementById("infoModal");
    const btn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close-btn");

    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close modal if user clicks outside of the box
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
