const API_KEY = "AIzaSyBTakKG28BRjfkhMqbGpVAhA-3loJ2brZE";

async function sendMsg() {
    const input = document.getElementById('chat-input');
    const display = document.getElementById('chat-display');
    const userText = input.value.trim();

    if (!userText) return;

    // User ka message screen par dikhayein
    display.innerHTML += `<div style="margin-bottom:10px; color:#3b82f6;"><b>You:</b> ${userText}</div>`;
    input.value = "";
    display.innerHTML += `<div id="loading" style="color:#eab308;">Asif AI is thinking...</div>`;
    display.scrollTop = display.scrollHeight;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: userText }] }] })
        });
        
        const data = await response.json();
        const aiText = data.candidates[0].content.parts[0].text;
        
        // AI ka jawab dikhayein
        document.getElementById('loading').remove();
        display.innerHTML += `<div style="margin-bottom:10px;"><b>Asif AI:</b> ${aiText}</div>`;
    } catch (error) {
        document.getElementById('loading').innerHTML = "<span style='color:red;'>Error! Check API key or connection.</span>";
    }
    display.scrollTop = display.scrollHeight;
}

function toggleChat() {
    const box = document.getElementById('chat-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}
