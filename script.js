document.addEventListener('DOMContentLoaded', () => {
    // 1. Terminal Clock
    const updateClock = () => {
        const tempSpan = document.querySelector('.temp');
        if (tempSpan) {
            const now = new Date();
            tempSpan.innerText = `27°C // ${now.toLocaleTimeString()}`;
        }
    };
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Modal Controls
    const modal = document.getElementById("infoModal");
    const btn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close-btn");

    if (btn) {
        btn.onclick = () => modal.style.display = "block";
    }

    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    }
});
