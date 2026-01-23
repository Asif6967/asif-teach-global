// --- 1. Navigation & UI Logic ---
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    if (nav) nav.classList.toggle('active');
}

// --- 2. Job Station Auto-Fetch (Verified) ---
async function loadJobs() {
    const jobList = document.getElementById('job-list');
    if (!jobList) return;

    try {
        // Aapke local Flask server se verified jobs lena
        const response = await fetch('http://127.0.0.1:5000/api/jobs');
        const data = await response.json();
        
        jobList.innerHTML = ''; 
        data.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            card.innerHTML = `
                <div class="job-title" style="color:#38bdf8; font-weight:bold;">${job.title}</div>
                <a href="${job.link}" target="_blank" class="apply-btn" style="margin-top:10px; display:inline-block; background:#facc15; color:#000; padding:5px 10px; border-radius:4px; text-decoration:none;">View Official Form</a>
            `;
            jobList.appendChild(card);
        });
    } catch (e) {
        // Error handling agar backend offline ho
        jobList.innerHTML = `<p style="color:#ff4444;">Backend Offline: Please run 'python main.py' in terminal.</p>`;
    }
}

// --- 3. Expert Metric Counters (MBA Dashboard) ---
let triggered = false;
function runCounters() {
    if (triggered) return;
    const counters = document.querySelectorAll("[data-count]");
    
    counters.forEach(counter => {
        const target = +counter.dataset.count;
        let value = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
            value += step;
            if (value >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = value;
            }
        }, 40);
    });
    triggered = true;
}

// Scroll detection for metrics
window.addEventListener("scroll", () => {
    const section = document.querySelector(".metrics");
    if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
        runCounters();
    }
});

// Initial Load Functions
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('job-list')) loadJobs();
});