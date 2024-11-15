document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('Username').value.trim();
    const email = document.getElementById('Email').value.trim();
    const password = document.getElementById('Password').value;

    if (username && email && password) {
        // Save user data to localStorage
        const user = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(user));
        alert('Sign up successful!');
        window.location.href = 'login.html'; // Redirect to login
    } else {
        alert('Please fill in all fields.');
    }
});
