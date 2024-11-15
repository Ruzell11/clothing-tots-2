document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('Username').value.trim();
    const password = document.getElementById('Password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        if (username === storedUser.username && password === storedUser.password) {
            alert('Login successful!');
            window.location.href = 'index_logout.html'; // Redirect to your index.html
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('No user found. Please sign up first.');
    }
});
