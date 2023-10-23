// Espera a que termine la animación de desvanecimiento
document.getElementById('logo-container').addEventListener('animationend', function () {
    // Redirige al usuario a login.html después de la animación
    window.location.href = 'login.html';
});


/*ALTAUSER*/


document.getElementById('generate-qr-button').addEventListener('click', function () {
    var curp = document.getElementById('curp').value;
    var qrcode = new QRCode(document.getElementById('qrcode'), {
        text: curp, // Texto para el QR (en este caso, la CURP)
        width: 128,
        height: 128
    });
});
