// --- script.js (SIRF LOGIC) ---

console.log("System Online: JS Connected Successfully");

// 1. Contact Form Alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("✅ Message Sent! (Connected via script.js)");
    this.reset();
});

// 2. Charts Configuration
Chart.defaults.color = '#cbd5e1';
Chart.defaults.borderColor = 'rgba(255,255,255,0.1)';

// Tech Chart (Bar)
new Chart(document.getElementById('techChart'), {
    type: 'bar',
    data: {
        labels: ['Java', 'Python', 'CSS', 'SQL'],
        datasets: [{
            label: 'Proficiency %',
            data: [85, 80, 95, 85],
            backgroundColor: '#3b82f6'
        }]
    },
    options: {
        scales: { y: { beginAtZero: true, max: 100 } }
    }
});

// MBA Chart (Radar)
new Chart(document.getElementById('mbaChart'), {
    type: 'radar',
    data: {
        labels: ['Strategy', 'Finance', 'Marketing', 'Ops'],
        datasets: [{
            label: 'Skill Level',
            data: [88, 92, 75, 80],
            backgroundColor: 'rgba(239, 68, 68, 0.4)',
            borderColor: '#ef4444'
        }]
    }
});

// 3. Live News Fetcher
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
        document.getElementById('newsFeed').innerHTML = "<span>🔴 Asif Portfolio Live... Script Loaded!</span>";
    }
}
fetchNews();
