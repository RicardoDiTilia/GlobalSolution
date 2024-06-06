// login.js

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulação de lógica de login
  if (username === 'admin' && password === 'admin') {
      alert('Login bem-sucedido!');
      // Redirecionar para outra página ou realizar outras ações de login
  } else {
      alert('Usuário ou senha incorretos.');
  }
}
