var socket = io();

//Listenner
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Listenner
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Envio de informacion
socket.emit('enviarMensaje', {
    usuario: 'Arturo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta srver: ', resp);
});

//Listenner
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});