// --- MODAL SYSTEM ---
const modal = document.getElementById("infoModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close-btn");

if(btn) btn.onclick = () => modal.style.display = "block";
if(span) span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// --- SECURE UPLINK (SMTP/Email) SYSTEM ---
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sendBtn = document.getElementById('send-btn');
    const statusMsg = document.getElementById('form-status');
    
    // UI Feedback: Cyber Terminal Style
    sendBtn.innerText = "UPLOADING_PACKETS...";
    sendBtn.disabled = true;
    statusMsg.innerText = "ESTABLISHING ENCRYPTED TUNNEL...";
    statusMsg.style.color = "yellow";

    // Your Integrated IDs
    const serviceID = 'service_9sg6fki'; 
    const templateID = 'template_nf41qfu';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            // Success Feedback
            sendBtn.innerText = "PROTOCOL_COMPLETE";
            statusMsg.innerText = "SUCCESS: MESSAGE_INFILTRATED_INBOX";
            statusMsg.style.color = "#00ff41";
            document.getElementById('contact-form').reset();
            
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
            statusMsg.innerText = "CRITICAL_ERROR: UPLINK_TERMINATED";
            statusMsg.style.color = "#ff4444";
            console.error("System Error:", err);
        });
});
