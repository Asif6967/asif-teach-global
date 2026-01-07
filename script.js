// Optimized Logic for Asif Teach Global
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
        this.speedX = Math.random()*0.3 - 0.15;
        this.speedY = Math.random()*0.3 - 0.15;
    }
    update() { this.x += this.speedX; this.y += this.speedY; }
    draw() { ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
}

for(let i=0; i<50; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

// Background Auto-Changer
const bgImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920",
    "https://images.unsplash.com/photo-1510511459-1b41feff8829?q=80&w=1920"
];
let bgIndex = 0;
const bgEl = document.getElementById("global-bg");
setInterval(() => {
    bgIndex = (bgIndex + 1) % bgImages.length;
    bgEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${bgImages[bgIndex]}')`;
}, 8000);

// English Tech News
function updateNews() {
    const feed = document.getElementById('newsFeed');
    const news = [
        "AI Breakthrough: Business strategy meets machine learning.",
        "Cyber Security 2026: Protecting global digital assets.",
        "Python Performance: New updates for data scientists.",
        "Management Trends: Leadership in the digital age."
    ];
    feed.innerHTML = news.map(n => `<span>🔴 ${n}</span>`).join(' &nbsp;&nbsp;&nbsp; ');
}
updateNews();
<script>
  const bgVid = document.getElementById('bgVideo');
  bgVid.addEventListener('loadeddata', () => {
    bgVid.style.transition = 'opacity 0.5s ease';
    bgVid.style.opacity = '1';
  });
</script>
