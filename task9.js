 // Function to calculate multiplication
 function calculateMultiplication() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        document.getElementById('result').textContent = `The Result is: ${result}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
    }
}

// Function to calculate division
function calculateDivision() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
            const result = num1 / num2;
            document.getElementById('result').textContent = `The Result is: ${result}`;
        } else {
            document.getElementById('result').textContent = 'Cannot divide by zero.';
        }
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
    }
}