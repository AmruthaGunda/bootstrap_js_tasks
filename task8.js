// Get the input field and output element by their IDs
const inputField = document.getElementById('inputField');
const outputElement = document.getElementById('output');

// Add an input event listener to the input field
inputField.addEventListener('input', function() {
    // Get the current value of the input field
    const inputValue = inputField.value;
    
    // Reverse the input value and update the output
    const reversedValue = reverseString(inputValue);
    outputElement.textContent = reversedValue;
});

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
