from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Ye function index.html ko browser par dikhayega
    return render_template('index.html')

if __name__ == '__main__':
    # Debug=True ka matlab hai code change karte hi server refresh ho jayega
    app.run(debug=True)