const fs = require('fs');

// Read the file synchronously
const input = fs.readFileSync('day_1.txt', 'utf-8');

// Split the input into an array of lines
const lines = input.split('\n');

// Initialize the sum
let sum = 0;

// Iterate over each line
lines.forEach(line => {
    // Find the first and last digits in the line
    const firstDigitMatch = line.match(/\d/);
    const lastDigitMatch = line.match(/\d(?=\D*$)/);

    // Check if both digits are found
    if (firstDigitMatch && lastDigitMatch) {
        // Extract the first and last digits
        const firstDigit = parseInt(firstDigitMatch[0]);
        const lastDigit = parseInt(lastDigitMatch[0]);

        // Check if both extracted digits are valid numbers
        if (!isNaN(firstDigit) && !isNaN(lastDigit)) {
            // Calculate the calibration value and add it to the sum
            sum += (firstDigit * 10 + lastDigit);
        }
    }
});

// Print the final result
console.log('Sum of calibration values:', sum);
