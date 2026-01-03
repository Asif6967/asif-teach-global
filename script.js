// Particles
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
class Particle {
    constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 2 + 1; this.speedX = Math.random() * 1 - 0.5; this.speedY = Math.random() * 1 - 0.5; }
    update() { this.x += this.speedX; this.y += this.speedY; }
    draw() { ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
}
function init() { for (let i = 0; i < 60; i++) particlesArray.push(new Particle()); }
function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); particlesArray.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
init(); animate();

// News
async function fetchNews() {
    try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews');
        const data = await res.json();
        if(data.status === 'ok') {
            document.getElementById('newsFeed').innerHTML = data.items.map(i => `<span>🔴 ${i.title}</span>`).join('');
        }
    } catch(e) { document.getElementById('newsFeed').innerHTML = "<span>🔴 Asif Teach Global is Live...</span>"; }
}
fetchNews();
// 1. AUTO-CHANGING BACKGROUND
const bgImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920", // Space/Earth
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920", // Cyber/Tech
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920"  // Business/Tech
];
let currentBg = 0;
const bgElement = document.getElementById("global-bg");

function changeBackground() {
    bgElement.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${bgImages[currentBg]}')`;
    currentBg = (currentBg + 1) % bgImages.length;
}
setInterval(changeBackground, 7000); // Har 7 second mein change hoga
changeBackground();

// 2. PARTICLES
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
class Particle {
    constructor() { this.x = Math.random()*canvas.width; this.y = Math.random()*canvas.height; this.size = Math.random()*2; this.speedX = Math.random()*0.5 - 0.25; this.speedY = Math.random()*0.5 - 0.25; }
    update() { this.x += this.speedX; this.y += this.speedY; if(this.x<0 || this.x>canvas.width) this.speedX *= -1; if(this.y<0 || this.y>canvas.height) this.speedY *= -1; }
    draw() { ctx.fillStyle = 'white'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
}
for(let i=0; i<80; i++) particles.push(new Particle());
function animate() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
animate();

// 3. REAL NEWS
async function fetchNews() {
    try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews');
        const data = await res.json();
        if(data.status === 'ok') {
            document.getElementById('newsFeed').innerHTML = data.items.map(i => `<span>🔴 ${i.title}</span>`).join(' &nbsp;&nbsp;&nbsp; ');
        }
    } catch(e) { document.getElementById('newsFeed').innerHTML = "<span>🔴 Asif Teach Global is Live... Real-time Updates Active.</span>"; }
}
fetchNews();
