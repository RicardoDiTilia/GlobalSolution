document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Registro bem-sucedido!');
    window.location.href = 'index.html';
});
