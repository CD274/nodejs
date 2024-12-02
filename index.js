// Protocolo de intercambio
var http = require('http');

// Creación de servidor por http
var server = http.createServer(function (req, resp) {
    // Estado de tipo satisfactorio, mensaje de tipo JSON
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    // Escribo el mensaje de texto plano
    resp.write('CalosGordillo: Este es el mensaje que debe de recibir el movil.'); //cambia el codigo 
    resp.end();
});

// El servidor escucha en el puerto 3000
server.listen(3000, function () {
    console.log('Servidor escuchando en el puerto 3000, funciona!!!'); // Imprime mensaje de inicio del servidor
});
