document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
      alert('Login bem-sucedido!');
      window.location.href = 'main.html';
  } else {
      alert('Usuário ou senha incorretos!');
  }
});
