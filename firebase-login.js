<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login - Asif Tech Global</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #007bff, #00bfff);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .login-box {
      background: white;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      width: 350px;
      padding: 30px;
      text-align: center;
    }
    input {
      width: 90%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }
    button {
      width: 95%;
      padding: 10px;
      border: none;
      margin: 5px 0;
      color: white;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
    }
    #loginBtn { background: #007bff; }
    #signupBtn { background: #0066cc; }
    #googleBtn { background: #db4437; }
  </style>
</head>
<body>
  <div class="login-box">
    <h2>Login</h2>
    <input type="email" id="email" placeholder="Email" required />
    <input type="password" id="password" placeholder="Password" required />
    <button id="loginBtn">Login</button>
    <button id="signupBtn">Sign Up</button>
    <button id="googleBtn">Login with Google</button>
  </div>

  <script type="module" src="./firebase-login.js"></script>
</body>
</html>
