/*login*/
document.getElementById('login-button').addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Verifica las credenciales (esto es un ejemplo simple, en la vida real, deberías verificar contra una base de datos)
    if (username === 'jornalero' && password === '123') {
        window.location.href = 'jornalero_menu.html'; // Redirige al menú de jornalero
    } else if (username === 'admin' && password === 'adminpass') {
        window.location.href = 'admin_menu.html'; // Redirige al menú de administrador
    } else {
        alert('Credenciales incorrectas');
    }
}
);

document.getElementById('scan-qr-button').addEventListener('click', function () {
    // Aquí puedes implementar la lógica para escanear un QR (por ejemplo, usando una biblioteca de escaneo de QR).
    // Luego, redirige al usuario a la página adecuada según el resultado del escaneo.
    // Ejemplo:
    // window.location.href = 'jornalero-menu.html'; // Redirige al menú de jornalero
});
