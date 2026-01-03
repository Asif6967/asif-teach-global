k// --- script.js (LIVE ENGLISH NEWS ENGINE) ---
console.log("Asif Teach Global: News Engine Online");

// 1. PARTICLES (Optimized)
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
class Particle {
    constructor() {
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*1.5;
        this.speedX = Math.random()*0.4 - 0.2;
        this.speedY = Math.random()*0.4 - 0.2;
    }
    update() { this.x += this.speedX; this.y += this.speedY; }
    draw() { ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
}
for(let i=0; i<50; i++) particles.push(new Particle());
function animate() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
animate();

// 2. LIVE ENGLISH NEWS (Auto-Updating Headlines)
function updateLiveNews() {
    const newsBox = document.getElementById('newsFeed');
    const headlines = [
        "Global Tech Summit 2026: AI integration in Business Management.",
        "New Cyber Security Protocols released for Enterprise Systems.",
        "Python 3.14 Updates: Faster Execution for Machine Learning.",
        "MBA Strategies shifting towards Data-Driven Decision Making.",
        "Full Stack Development Trends: Rise of Serverless Architecture.",
        "Global Markets reacting to New Digital Transformation Policies.",
        "Asif Teach Global: Bridging the gap between Strategy and Code."
    ];
    
    // Sabhi headlines ko ek lambi line mein jodd dena
    newsBox.innerHTML = headlines.map(h => `<span>🔴 ${h}</span>`).join(' &nbsp;&nbsp;&nbsp; ');
}
updateLiveNews();
// Har 10 minute mein news refresh hogi (Live Feel)
setInterval(updateLiveNews, 600000);
