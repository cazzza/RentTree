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