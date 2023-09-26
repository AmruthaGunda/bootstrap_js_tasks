function checkPasswordStrength() {
    const password = document.getElementById("passwordInput").value;
    const strengthIndicator = document.getElementById("passwordStrength");

    // Define criteria for password strength
    const minLength = 8;
    const minUpperCase = 1;
    const minLowerCase = 1;
    const minNumbers = 1;
    const minSpecialChars = 1;

    // Check the length
    const isLengthValid = password.length >= minLength;

    // Check for uppercase letters
    const hasUpperCase = /[A-Z]/.test(password);

    // Check for lowercase letters
    const hasLowerCase = /[a-z]/.test(password);

    // Check for numbers
    const hasNumbers = /\d/.test(password);

    // Check for special characters
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    // Calculate password strength
    let strength = 0;
    if (isLengthValid) strength++;
    if (hasUpperCase) strength++;
    if (hasLowerCase) strength++;
    if (hasNumbers) strength++;
    if (hasSpecialChars) strength++;

    // Display password strength
    let message = "";
    if (strength === 0) {
        message = "Very Weak";
    } else if (strength === 1) {
        message = "Weak";
    } else if (strength === 2) {
        message = "Moderate";
    } else if (strength === 3) {
        message = "Strong";
    } else if (strength === 4) {
        message = "Very Strong";
    }

    strengthIndicator.textContent = message;
}
