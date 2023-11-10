function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var passwordConstraints = document.getElementById('passwordConstraints');
    var constraints = [];

    // Simple validation for username
    if (!username) {
        constraints.push('Username is required.');
    }

    // Simple validation for email
    if (!email) {
        constraints.push('Email is required.');
    } else {
        // Basic email format validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            constraints.push('Invalid email format.');
        }
    }

    // Simple validation for password
    if (!password) {
        constraints.push('Password is required.');
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        constraints.push('Password and Confirm Password do not match.');
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
    alert('Sign Up Successful!');
}
