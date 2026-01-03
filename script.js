// --- script.js (FINAL COMPLETED VERSION) ---
console.log("System Online: All Modules Loaded");

// 1. PARTICLES ANIMATION (Moving Dots)
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
        if (this.size <= 0.2) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
        }
    }
    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
function initParticles() {
    for (let i = 0; i < 60; i++) particlesArray.push(new Particle());
}
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}
initParticles();
animateParticles();

// 2. BACKGROUND AUTO-CHANGER
const bgImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920"
];
let bgIndex = 0;
const globalBg = document.getElementById("global-bg");

// Set initial background immediately
globalBg.style.background = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${bgImages[0]}')`;
globalBg.style.backgroundSize = "cover";
globalBg.style.backgroundPosition = "center";
globalBg.style.backgroundAttachment = "fixed";

setInterval(() => {
    bgIndex = (bgIndex + 1) % bgImages.length;
    globalBg.style.background = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${bgImages[bgIndex]}')`;
    globalBg.style.backgroundSize = "cover";
    globalBg.style.backgroundPosition = "center";
    globalBg.style.backgroundAttachment = "fixed";
}, 5000);

// 3. CHARTS
Chart.defaults.color = '#cbd5e1';
Chart.defaults.borderColor = 'rgba(255,255,255,0.1)';
new Chart(document.getElementById('techChart'), {
    type: 'bar',
    data: { labels: ['Java', 'Python', 'CSS', 'SQL'], datasets: [{ label: '%', data: [85, 80, 95, 85], backgroundColor: '#3b82f6' }] },
    options: { scales: { y: { beginAtZero: true, max: 100 } } }
});
new Chart(document.getElementById('mbaChart'), {
    type: 'radar',
    data: { labels: ['Strategy', 'Finance', 'Marketing', 'Ops'], datasets: [{ label: 'Skill', data: [88, 92, 75, 80], backgroundColor: 'rgba(239, 68, 68, 0.4)', borderColor: '#ef4444' }] }
});

// 4. NEWS TICKER (Fixed & Completed)
async function fetchNews() {
    try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews');
        const data = await res.json();
        let newsHtml = "";
        if(data.status === 'ok') {
            data.items.forEach(item => {
                newsHtml += `<span>🔴 ${item.title}</span>`;
            });
            document.getElementById('newsFeed').innerHTML = newsHtml;
        }
    } catch(e) {
        document.getElementById('newsFeed').innerHTML = "<span>🔴 Asif Cyber Portfolio is Live... Systems Online.</span>";
    }
}
fetchNews();

// 5. Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("✅ Message Sent! (Github Pages Demo)");
    this.reset();
});
