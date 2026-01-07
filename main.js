// 🧠 ASIF TECH AI BRAIN (FINAL VERSION)

// 👇👇 APNI NAYI KEY YAHAN DALEIN (Quotes "" ke andar) 👇👇
const MY_KEY = "AIzaSyA4wDGOSRkKPCDWBqGEQcH7Nb-JSMJHQlg";

// Chat Toggle
function toggleChat() {
    const chat = document.getElementById('ai-chat-box');
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'flex';
        document.getElementById('userInput').focus();
    } else {
        chat.style.display = 'none';
    }
}

// Enter Key
function handleEnter(e) {
    if (e.key === 'Enter') sendMessage();
}

// Send Message
async function sendMessage() {
    const input = document.getElementById('userInput');
    const messages = document.getElementById('messages');
    const text = input.value.trim();

    if (!text) return;

    // User Message
    messages.innerHTML += `
        <div style="align-self: flex-end; background: #007bff; color: white; padding: 10px 15px; border-radius: 15px 15px 0 15px; max-width: 85%; margin-bottom: 5px;">
            ${text}
        </div>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Loading Bubble
    const loading = document.createElement('div');
    loading.id = 'loading-bubble';
    loading.innerHTML = '<span style="color:#666; font-size:12px; margin-left:10px;">Thinking... 🧠</span>';
    messages.appendChild(loading);
    messages.scrollTop = messages.scrollHeight;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${MY_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are Asif Tech AI. Keep answers short and in Hinglish. User: ${text}`
                    }]
                }]
            })
        });

        const data = await response.json();

        // Loading hatao
        const loader = document.getElementById('loading-bubble');
        if(loader) loader.remove();

        if (data.error) {
            throw new Error(data.error.message);
        }

        const reply = data.candidates[0].content.parts[0].text.replace(/\*\*/g, ""); 

        // AI Reply
        messages.innerHTML += `
            <div style="align-self: flex-start; background: white; padding: 10px 15px; border-radius: 15px 15px 15px 0; border: 1px solid #e9ecef; box-shadow: 0 2px 5px rgba(0,0,0,0.05); max-width: 85%;">
                ${reply}
            </div>`;

    } catch (error) {
        const loader = document.getElementById('loading-bubble');
        if(loader) loader.remove();
        // Error Message Check
        console.error(error);
        messages.innerHTML += `<div style="color: red; font-size: 12px; margin: 5px;">⚠️ Error: ${error.message || "Key Problem"}</div>`;
    }
    messages.scrollTop = messages.scrollHeight;
}
