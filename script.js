// Optimized Performance for Google Compliance
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
class Particle {
    constructor() {
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*1.2;
        this.speedX = Math.random()*0.2 - 0.1;
        this.speedY = Math.random()*0.2 - 0.1;
    }
    update() { this.x += this.speedX; this.y += this.speedY; }
    draw() { ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); }
}
function init() { for(let i=0; i<40; i++) particles.push(new Particle()); }
function animate() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
init(); animate();

async function fetchNews() {
    try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/TheHackersNews');
        const data = await res.json();
        if(data.status === 'ok') {
            document.getElementById('newsFeed').innerHTML = data.items.map(i => `<span>🔴 ${i.title}</span>`).join(' &nbsp;&nbsp;&nbsp; ');
        }
    } catch(e) { document.getElementById('newsFeed').innerHTML = "<span>🔴 Asif Teach Global: Providing Professional Tech & Business Insights.</span>"; }
}
fetchNews();
