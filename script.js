kasync function fetchJobs() {
    const urls = [
        "https://api.rss2json.com/v1/api.json?rss_url=https://www.indgovtjobs.in/feeds/posts/default?alt=rss"
    ];

    try {
        const res = await fetch(urls[0]);
        const data = await res.json();
        if(data.status === 'ok') {
            document.getElementById('job-list').innerHTML = "";
            data.items.slice(0, 10).forEach(item => {
                document.getElementById('job-list').innerHTML += `<a href="${item.link}" target="_blank" class="update-link">➤ ${item.title}</a>`;
            });
        }
    } catch(e) {
        document.getElementById('job-list').innerHTML = "<p style='color:red'>Connection Busy. Refreshing...</p>";
    }
}
fetchJobs();
