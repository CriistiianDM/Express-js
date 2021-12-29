//importar libreria express
const express = require('express');

//crear servidor
const app = express();

//este trozo de codigo es importante para que el servidor funcione
//el primer parametro es la ruta, el segundo es el callback
//con ruta siginifica que la ruta inicial es /, en este caso espesifico que la ruta inicial es /
app.get('/', (req, res) => {
    //stado de la respuesta con salida
    res.send('Hola Mundo bebe\n');
});

//configurar servidor
app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});