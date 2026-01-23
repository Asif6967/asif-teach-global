# Future backend API
# This file will expose C++ logic via REST API
from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Database initialization
def init_db():
    conn = sqlite3.connect('logic/asif_tech_global.db') # Path based on your folder
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS inquiries 
                      (id INTEGER PRIMARY KEY, name TEXT, email TEXT, message TEXT)''')
    conn.commit()
    conn.close()

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    conn = sqlite3.connect('logic/asif_tech_global.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)", 
                   (data['name'], data['email'], data['message']))
    conn.commit()
    conn.close()
    return jsonify({"status": "success", "message": "Asif Tech: Data Saved!"})

if __name__ == '__main__':
    init_db()
    print("Server running on http://127.0.0.1:5000")
    app.run(debug=True)
    def predict_sales(last_three_months):
    # Simple AI Logic: Moving Average + Growth Factor
    prediction = sum(last_three_months) / len(last_three_months) * 1.10 
    return round(prediction, 2)

# Example use for your dashboard
print(f"Next Month Predicted Sales: ₹{predict_sales([12000, 15000, 20000])}")