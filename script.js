// --- script.js ---

function selectPlan(planName) {
    // Alert user (Simulation of adding to cart)
    alert("Great Choice! You selected the " + planName + " plan.");
    
    // Console mein message (Developer tools ke liye)
    console.log("User selected:", planName);
    
    // Button ka text change karna
    const buttons = document.querySelectorAll('.btn-buy');
    buttons.forEach(btn => btn.innerText = "Processing...");
    
    setTimeout(() => {
        buttons.forEach(btn => btn.innerText = "Redirecting to Payment...");
    }, 1000);
}
