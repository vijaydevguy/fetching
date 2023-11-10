function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var passwordConstraints = document.getElementById('passwordConstraints');
    var constraints = [];

    // Simple validation for username
    if (!username) {
        constraints.push('Username is required.');
    }

    // Simple validation for password
    if (!password) {
        constraints.push('Password is required.');
    } else {
        // Check password constraints
        if (password.length < 8) {
            constraints.push('Password must be at least 8 characters long.');
        }

        // Check if password contains at least one special character
        if (!/[@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            constraints.push('Password must contain at least one special character.');
        }

        // Check if password contains at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            constraints.push('Password must contain at least one uppercase letter.');
        }
    }

    // Display constraints
    if (constraints.length > 0) {
        passwordConstraints.textContent = constraints.join('\n');
        return false;
    }

    // If all validations pass, show success alert
    showSuccessAlert();
    return false; // Prevent form submission (remove this line in a real scenario)
}

function showSuccessAlert() {
    alert('Sign In Successful!');
}
