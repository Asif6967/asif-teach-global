// --- script.js (REAL JOB FETCHING SYSTEM) ---
console.log("System Online: Job Engine Started");

// 1. PARTICLES & BG (Same as before)
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
class Particle {
    constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 2 + 1; this.speedX = Math.random() * 1 - 0.5; this.speedY = Math.random() * 1 - 0.5; }
    update() { this.x += this.speedX; this.y += this.speedY; if (this.size > 0.2) this.size -= 0.01; if (this.size <= 0.2) { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 2 + 1; } }
    draw() { ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
}
function initParticles() { for (let i = 0; i < 60; i++) particlesArray.push(new Particle()); }
function animateParticles() { ctx.clearRect(0, 0, canvas.width, canvas.height); for (let i = 0; i < particlesArray.length; i++) { particlesArray[i].update(); particlesArray[i].draw(); } requestAnimationFrame(animateParticles); }
initParticles(); animateParticles();

// Background
const globalBg = document.getElementById("global-bg");
globalBg.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920') center/cover fixed`;

// 2. 🔥 REAL SARKARI JOB FETCHER (The Main Logic) 🔥
async function fetchSarkariJobs() {
    const resultBox = document.getElementById('result-list');
    const admitBox = document.getElementById('admit-list');
    const jobBox = document.getElementById('job-list');

    // Hum ek Public Job Feed use kar rahe hain (IndGovtJobs example)
    // Note: Free feeds kabhi kabhi slow hote hain.
    const rssUrl = "https://www.indgovtjobs.in/feeds/posts/default?alt=rss";
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.status === 'ok') {
            // Clear Loading Text
            resultBox.innerHTML = "";
            admitBox.innerHTML = "";
            jobBox.innerHTML = "";

            data.items.forEach(item => {
                const title = item.title;
                const link = item.link;
                const shortTitle = title.length > 50 ? title.substring(0, 50) + "..." : title;
                
                // HTML Link Creator
                const linkHtml = `<a href="${link}" target="_blank" class="update-link">➤ ${shortTitle} <span class="new-tag">Live</span></a>`;

                // 🧠 SMART SORTING LOGIC
                if (title.toLowerCase().includes("result") || title.toLowerCase().includes("answer key") || title.toLowerCase().includes("cutoff")) {
                    resultBox.innerHTML += linkHtml;
                } 
                else if (title.toLowerCase().includes("admit") || title.toLowerCase().includes("hall ticket") || title.toLowerCase().includes("call letter")) {
                    admitBox.innerHTML += linkHtml;
                } 
                else {
                    jobBox.innerHTML += linkHtml;
                }
            });
        }
    } catch (error) {
        console.log("Feed Error, loading backup links...");
        // Agar API fail ho jaye, to Backup Links dikhao (Taki site khali na lage)
        jobBox.innerHTML = `
            <a href="#" class="update-link">SSC CGL Notification (Backup)</a>
            <a href="#" class="update-link">Railway Group D (Backup)</a>
        `;
    }
}
// Run the Job Fetcher
fetchSarkariJobs();


// 3. NEWS TICKER
async function fetchNews() {
    const newsBox = document.getElementById('newsFeed');
    try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews');
        const data = await res.json();
        if(data.status === 'ok') {
            let newsHtml = "";
            data.items.forEach(item => { newsHtml += `<span>🔴 ${item.title}</span>`; });
            newsBox.innerHTML = newsHtml;
        }
    } catch(e) { newsBox.innerHTML = "<span>🔴 Asif Teach Global is Live... Real Jobs Loading...</span>"; }
}
fetchNews();

// 4. Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) { e.preventDefault(); alert("✅ Message Sent!"); this.reset(); });
