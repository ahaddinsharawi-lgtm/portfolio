// --- MODAL SYSTEM ---
// Added a check to ensure elements exist before assigning events
const modal = document.getElementById("infoModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close-btn");

if (btn) {
    btn.onclick = () => { modal.style.display = "block"; };
}

if (span) {
    span.onclick = () => { modal.style.display = "none"; };
}

window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};

// --- SECURE UPLINK (SMTP/Email) SYSTEM ---
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const sendBtn = document.getElementById('send-btn');
        const statusMsg = document.getElementById('form-status');
        
        // UI Feedback: Cyber Terminal Style
        sendBtn.innerText = "UPLOADING_PACKETS...";
        sendBtn.disabled = true;
        statusMsg.innerText = "ESTABLISHING ENCRYPTED TUNNEL...";
        statusMsg.style.color = "yellow";

        // Verified IDs from your EmailJS Dashboard
        const serviceID = 'service_9sg6fki'; 
        const templateID = 'template_nf41qfu';

        // 'this' refers to the contactForm element
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                // Success Feedback
                sendBtn.innerText = "PROTOCOL_COMPLETE";
                statusMsg.innerText = "SUCCESS: MESSAGE_INFILTRATED_INBOX";
                statusMsg.style.color = "#00ff41";
                contactForm.reset();
                
                // Reset to default after 5 seconds
                setTimeout(() => {
                    sendBtn.innerText = "EXECUTE_SEND_PROTOCOL";
                    sendBtn.disabled = false;
                    statusMsg.innerText = "";
                }, 5000);
            }, (err) => {
                // Error Feedback
                sendBtn.innerText = "PROTOCOL_FAILED";
                sendBtn.disabled = false;
                
                // DEBUGGING: This line is key. Check your Browser Console (F12) to see the real error.
                console.error("FAILED TO SEND:", err);
                
                statusMsg.innerText = "CRITICAL_ERROR: " + (err.text || "UPLINK_TERMINATED");
                statusMsg.style.color = "#ff4444";
            });
    });
}
