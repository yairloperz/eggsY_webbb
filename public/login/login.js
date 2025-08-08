// login/login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Solo tú puedes acceder (puedes cambiar usuario y contraseña)
  if (user === 'yair' && pass === '1000733797') {
    window.location.href = '../dashboard/index.html';
  } else {
    document.getElementById('error').textContent = 'Credenciales incorrectas';
  }
});
