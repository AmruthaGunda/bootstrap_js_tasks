// Get references to the input and result elements
const numberInput = document.getElementById('numberInput');
const reversedNumber = document.getElementById('reversedNumber');

// Function to reverse a number
function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

// Event listener for the input field
numberInput.addEventListener('input', function() {
    const inputValue = numberInput.value;

    // Check if the input is a valid number
    if (!isNaN(inputValue)) {
        const reversed = reverseNumber(inputValue);
        reversedNumber.textContent = reversed;
    } else {
        reversedNumber.textContent = 'Invalid input';
    }
});
