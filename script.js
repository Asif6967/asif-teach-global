document.getElementById('sqlForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;

    // Asli API Call
    const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, service })
    });

    const result = await response.json();
    if(result.message === "Success") {
        alert("✅ Strategy Logged in SQL Database!");
        document.getElementById('inquiry-count').innerText = result.total + "+";
        e.target.reset();
    }
});
// 1. Typing Animation Logic
const textElement = document.getElementById("typing-text");
const phrases = ["Optimizing SQL...", "C++ Core Active", "MBA Strategy Ready", "Real-time Syncing..."];
let i = 0, j = 0;

function typeEffect() {
    if (j < phrases[i].length) {
        textElement.innerHTML += phrases[i].charAt(j);
        j++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (j > 0) {
        textElement.innerHTML = phrases[i].substring(0, j-1);
        j--;
        setTimeout(eraseEffect, 50);
    } else {
        i = (i + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    }
}

// 2. Automatic Live Data Fetcher (Hand-to-hand update)
async function fetchLiveStats() {
    try {
        // Ye aapke local Flask server se data lega
        const response = await fetch('http://127.0.0.1:5000/stats');
        const data = await response.json();
        
        document.getElementById('inquiry-count').innerText = data.total_inquiries + "+";
        document.getElementById('engine-status').innerText = "Online";
        document.getElementById('engine-status').style.color = "#22c55e";
        
        if(data.last_analysis) {
            document.getElementById('success-rate').innerText = data.last_analysis + "%";
        }
    } catch (e) {
        // Agar server off hai toh fallback data dikhayega
        console.log("Waiting for Python Engine...");
        document.getElementById('engine-status').innerText = "Connecting...";
    }
}

// 3. Form Submission (Automatic Insert)
const sqlForm = document.getElementById('sqlForm');
if(sqlForm) {
    sqlForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;

        try {
            const response = await fetch('http://127.0.0.1:5000/submit', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, service })
            });
            const result = await response.json();
            
            // Bina page refresh kiye turant update
            alert("✅ SQL Execution Successful!");
            fetchLiveStats(); // Hand-to-hand update call
            e.target.reset();
        } catch (error) {
            alert("Error: Python Server is not running!");
        }
    });
}

// Start everything
window.onload = () => {
    typeEffect();
    fetchLiveStats();
    setInterval(fetchLiveStats, 2000); // Har 2 second mein auto-check
};