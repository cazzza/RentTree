/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emissions-form');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const itemType = document.getElementById('item-type').value;
        const usageHours = parseFloat(document.getElementById('usage-hours').value);
        const energyRating = document.getElementById('energy-rating').value;

        // These values are placeholder estimates and should be replaced with more accurate data
        const emissionFactors = {
            'lightbulb': 0.1,
            'refrigerator': 2.0,
            'washer': 1.5,
            'dryer': 3.0,
            'dishwasher': 1.8
        };

        const ratingMultipliers = {
            'A': 0.8,
            'B': 0.9,
            'C': 1.0,
            'D': 1.1,
            'E': 1.2
        };

        const dailyEmissions = emissionFactors[itemType] * usageHours * ratingMultipliers[energyRating];
        const yearlyEmissions = dailyEmissions * 365;

        resultsDiv.innerHTML = `
            <h3>Emissions Results</h3>
            <p>Daily CO2 Emissions: ${dailyEmissions.toFixed(2)} kg</p>
            <p>Yearly CO2 Emissions: ${yearlyEmissions.toFixed(2)} kg</p>
            <p>These are estimated values. For more accurate results, consult with an energy professional.</p>
        `;
    });
});

//handling user authentication (sign up, login, logout)
    const signUpForm = document.getElementById('sign-up-form');
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');
    const authStatus = document.getElementById('auth-status');

    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('sign-up-username').value;
        const password = document.getElementById('sign-up-password').value;

        if (username && password) {
            localStorage.setItem('user', JSON.stringify({ username, password }));
            authStatus.textContent = 'Sign-up successful. Please log in.';
        } else {
            authStatus.textContent = 'Please fill in both fields.';
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            localStorage.setItem('loggedIn', 'true');
            authStatus.textContent = 'Login successful.';
        } else {
            authStatus.textContent = 'Invalid username or password.';
        }
    });
    
    //only show logout button if user is logged in
    if (localStorage.getItem('loggedIn') === 'true') {
        logoutButton.style.display = 'block';
    } else {
        logoutButton.style.display = 'none';
    }

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        authStatus.textContent = 'Logged out successfully.';
    });

    // Check login status on page load
    if (localStorage.getItem('loggedIn') === 'true') {
        authStatus.textContent = 'You are logged in.';
    } else {
        authStatus.textContent = 'You are not logged in.';
    };