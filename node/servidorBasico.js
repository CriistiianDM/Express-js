//llamado de la libreria http
const http = require('http');

//configuracion del servidor
const server = http.createServer((req, res) => {
    //stado de la respuesta
    res.status = 200;
    //tipo de contenido
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //contenido de la respuesta
    res.end('Hola Mundo bebe\n');
})

//escuchar el servidor
server.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
})