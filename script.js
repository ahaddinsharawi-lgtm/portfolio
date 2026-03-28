// --- MODAL CONTROLS ---
const modal = document.getElementById("infoModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close-btn");

if(btn) btn.onclick = () => modal.style.display = "block";
if(span) span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// --- SECURE UPLINK (EMAIL) PROTOCOL ---
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sendBtn = document.getElementById('send-btn');
    const statusMsg = document.getElementById('form-status');
    
    // STARTING TRANSMISSION FEEDBACK
    sendBtn.innerText = "UPLOADING_PACKETS...";
    sendBtn.disabled = true;
    statusMsg.innerText = "ESTABLISHING ENCRYPTED TUNNEL...";
    statusMsg.style.color = "yellow";

    // UPDATED IDs BASED ON YOUR DASHBOARD
    const serviceID = 'service_9sg6fki'; 
    const templateID = 'template_q0yz0tq';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            // SUCCESS: Message Sent
            sendBtn.innerText = "PROTOCOL_COMPLETE";
            statusMsg.innerText = "SUCCESS: MESSAGE_INFILTRATED_INBOX";
            statusMsg.style.color = "#00ff41";
            document.getElementById('contact-form').reset();
            
            // RESET BUTTON AFTER 5 SECONDS
            setTimeout(() => {
                sendBtn.innerText = "EXECUTE_SEND_PROTOCOL";
                sendBtn.disabled = false;
                statusMsg.innerText = "";
            }, 5000);
        }, (err) => {
            // FAILURE: Something went wrong
            sendBtn.innerText = "PROTOCOL_FAILED";
            sendBtn.disabled = false;
            statusMsg.innerText = "CRITICAL_ERROR: " + (err.text || "UPLINK_TERMINATED");
            statusMsg.style.color = "#ff4444";
            console.error("Transmission Error:", err);
        });
});
