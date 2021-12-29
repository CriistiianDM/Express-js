//importar libreria express
const express = require('express');

//crear servidor
const app = express();

//entender formato json
app.use(express.json());

//este trozo de codigo es importante para que el servidor funcione
//el primer parametro es la ruta, el segundo es el callback
//con ruta siginifica que la ruta inicial es /, en este caso espesifico que la ruta inicial es /
app.get('/', (req, res) => {
    //estado de la respuesta con salida
    res.send('Hola Mundo bebe\n');
});

//crear otro esucha para la ruta /hola
app.get('/about', (req, res) => {
    //estado de la respuesta con salida
    res.send('about \n');
});

//crear una ruta de login
app.get('/login', (req, res) => {
    //estado de la respuesta con salida
    res.send('<h1>login</h1> \n');
});


/* METODOS USADOS EN EL SERVIDOR */
//GET: obtener datos
//POST: crear datos
//PUT: actualizar datos
//DELETE: eliminar datos

//crear metodo get
app.get('/user', (req, res) => {
    //estado de la respuesta con salida
    res.json({
        "username": "juan",
        "email": "sebastian@gmail.com"
    });
});

//crear metodo post
app.post('/user/:id', (req, res) => {
    //estado de la respuesta con salida
    console.log(req.body);
    console.log(req.params);
    res.send(' METODO POST \n');
});

//crear metodo put
app.put('/put', (req, res) => {
    //estado de la respuesta con salida
    res.send(' METODO PUT \n');
});

//crear metodo delete
app.delete('/delete', (req, res) => {
    //estado de la respuesta con salida
    res.send(' METODO DELETE \n');
});

//crear otro esucha para el 404
app.get('*', (req, res) => {
    //estado de la respuesta con salida
    res.send('404 \n');
});

//configurar servidor
app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});