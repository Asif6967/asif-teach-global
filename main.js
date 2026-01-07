// 🧠 ASIF TECH AI BRAIN (FIXED & CLEAN)

// 👇👇 APNI KEY YAHAN DALEIN 👇👇
const part_A = "AIzaSy";  // Ye waisa hi rahega
const part_B = "AIzaSyCiDabjU1TESXqtRUyKTeUGW8VE9qSSt_0"; // <-- SIRF YAHAN KEY DALEIN

const FINAL_KEY = part_A + part_B;

// 1. Chat Open/Close Logic
function toggleChat() {
    const chat = document.getElementById('ai-chat-box');
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'flex';
        document.getElementById('userInput').focus();
    } else {
        chat.style.display = 'none';
    }
}

// 2. Enter Button Logic
function handleEnter(e) {
    if (e.key === 'Enter') sendMessage();
}

// 3. Message Send Logic
async function sendMessage() {
    const input = document.getElementById('userInput');
    const messages = document.getElementById('messages');
    const text = input.value.trim();

    if (!text) return;

    // User Message Show karo
    messages.innerHTML += `
        <div style="align-self: flex-end; background: #007bff; color: white; padding: 10px 15px; border-radius: 15px 15px 0 15px; max-width: 85%; margin-bottom: 5px;">
            ${text}
        </div>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Loading Bubble (Thinking...)
    const loading = document.createElement('div');
    loading.id = 'loading-bubble';
    loading.innerHTML = '<span style="color:#666; font-size:12px; margin-left:10px;">Thinking... 🧠</span>';
    messages.appendChild(loading);
    messages.scrollTop = messages.scrollHeight;

    try {
        // Gemini Pro API Call
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${FINAL_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are Asif Tech AI. Answer in Hinglish (Hindi+English). Keep it short. User: ${text}`
                    }]
                }]
            })
        });

        const data = await response.json();

        // Loading hatao
        const loader = document.getElementById('loading-bubble');
        if(loader) loader.remove();

        // Error Check
        if (data.error) {
            throw new Error(data.error.message);
        }

        const reply = data.candidates[0].content.parts[0].text.replace(/\*\*/g, ""); 

        // AI Reply Show karo
        messages.innerHTML += `
            <div style="align-self: flex-start; background: white; padding: 10px 15px; border-radius: 15px 15px 15px 0; border: 1px solid #e9ecef; box-shadow: 0 2px 5px rgba(0,0,0,0.05); max-width: 85%;">
                ${reply}
            </div>`;

    } catch (error) {
        const loader = document.getElementById('loading-bubble');
        if(loader) loader.remove();
        console.error(error);
        messages.innerHTML += `<div style="color: red; font-size: 12px; margin: 5px;">⚠️ Error: ${error.message || "Key Problem"}</div>`;
    }
    messages.scrollTop = messages.scrollHeight;
}
