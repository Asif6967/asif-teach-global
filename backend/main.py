@app.route('/admin/all', methods=['GET'])
def get_all_data():
    conn = sqlite3.connect('asif_tech_global.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM inquiries ORDER BY id DESC")
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)