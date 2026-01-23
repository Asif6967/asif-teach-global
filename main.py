from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import requests
import xml.etree.ElementTree as ET

app = Flask(__name__)
CORS(app)

# --- AI LOGIC ---
def predict_sales(last_three_months):
    prediction = sum(last_three_months) / len(last_three_months) * 1.10 
    return round(prediction, 2)

# --- DATABASE ---
def init_db():
    try:
        conn = sqlite3.connect('logic/asif_tech_global.db') 
        cursor = conn.cursor()
        cursor.execute('''CREATE TABLE IF NOT EXISTS inquiries 
                          (id INTEGER PRIMARY KEY, name TEXT, email TEXT, message TEXT)''')
        conn.commit()
        conn.close()
    except:
        pass

# --- JOB STATION (With Backup Plan) ---
@app.route('/api/jobs', methods=['GET'])
def get_jobs():
    jobs = []
    try:
        # Koshish 1: Internet se Live Data
        response = requests.get('https://www.sarkariresult.com/rss.xml', timeout=5)
        root = ET.fromstring(response.content)
        for item in root.findall('.//item')[:10]:
            jobs.append({
                "title": item.find('title').text,
                "link": item.find('link').text
            })
    except:
        print("Internet fetch failed, switching to backup...")
    
    # Koshish 2: Agar Internet fail ho ya list khali ho, toh Backup Data dikhao
    if len(jobs) == 0:
        jobs = [
            {"title": "🔥 UP Police Constable Recruitment 2026 (Verified)", "link": "https://uppbpb.gov.in"},
            {"title": "🏦 SBI PO Online Form 2026 (Active)", "link": "https://sbi.co.in"},
            {"title": "🚆 Railway RRB NTPC Notification (Coming Soon)", "link": "https://indianrailways.gov.in"},
            {"title": "🎓 SSC CGL Exam Date Announced", "link": "https://ssc.nic.in"}
        ]
        
    return jsonify(jobs)

# --- HEALTH CHECK ---
@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "online"})

if __name__ == '__main__':
    init_db()
    print(f"Next Month Predicted Sales: ₹{predict_sales([12000, 15000, 20000])}")
    print("Server running on http://127.0.0.1:5000")
    app.run(debug=True)