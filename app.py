 from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    result = None
    
    # Jab koi Calculator ka button dabayega (POST request)
    if request.method == 'POST':
        try:
            # HTML form se data lena
            amount = float(request.form.get('amount'))
            rate = float(request.form.get('rate'))
            years = float(request.form.get('years'))

            # Python Logic: EMI Calculation Formula
            # Formula: P x R x (1+R)^N / [(1+R)^N-1]
            r = rate / (12 * 100) # Monthly interest rate
            n = years * 12        # Total months
            
            emi = amount * r * ((1 + r)**n) / (((1 + r)**n) - 1)
            total_payment = emi * n
            interest = total_payment - amount

            # Result ko format karna (comma aur 2 decimal tak)
            result = {
                'emi': f"{emi:,.2f}",
                'total_interest': f"{interest:,.2f}",
                'total_payment': f"{total_payment:,.2f}"
            }
        except:
            result = "Error"

    return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)