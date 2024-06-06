function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha o nome de usuário e a senha.');
      return;
    }
  

    alert('Login bem-sucedido! Redirecionando para a página principal.');
    window.location.href = 'main.html'; 
  }
  