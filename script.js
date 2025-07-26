// JavaScript for interactive functionality of the login page

// Wait for the DOM to fully load
window.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const messageBox = document.getElementById('messageBox');

  // Function to show messages
  function showMessage(message, isError = false) {
    messageBox.textContent = message;
    messageBox.style.color = isError ? 'red' : 'green';
  }

  // Form submit event
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!username || !password) {
      showMessage('Please enter both username and password.', true);
      return;
    }

    // Simulate login process (replace with real authentication logic)
    if (username === 'admin' && password === 'password123') {
      showMessage('Login successful! Redirecting...');
      // Redirect or perform other actions here
      setTimeout(() => {
        window.location.href = '/dashboard.html';
      }, 1500);
    } else {
      showMessage('Invalid username or password.', true);
    }
  });
});
