//importar libreria express
const express = require('express');
//libreria morgan para mostrar informacion de las peticiones
const morgan = require('morgan');


//crear servidor
const app = express();

//req: es la informacion del navagador
//los mildeger de peticiones son como un conjunto de instrucciones que se ejecutan en el servidor antes que lleguen a la ruta
//esta funcion es un middleware general para todas las peticiones
function middleware(req, res, next) {
    console.log(`RECIBIENDO PETICION ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

/* SETTINGS */
app.set('port', 3000);
app.set('view engine', 'ejs');

/* SECCION MIDDLEWARE */

//entender formato json
app.use(express.json());
//llamar a middleware
app.use(middleware);
//mostrar informacion de las peticiones
app.use(morgan('dev'));

//aqui va todas las verficaciones antes que se ejecuten las peticiones http
app.all('/user/:id', (req, res, next) => {
    //aqui terminaria la verificacion, si se desvia la peticion se ejecutaria el siguiente middleware
    //res.send('Hola mundo');
    console.log('por aqui pase papu' , req.method);
    next();
});

//este trozo de codigo es importante para que el servidor funcione
//el primer parametro es la ruta, el segundo es el callback
//con ruta siginifica que la ruta inicial es /, en este caso espesifico que la ruta inicial es /
/*app.get('/', (req, res) => {
    //estado de la respuesta con salida
    res.send('Hola Mundo bebe\n');
});*/

//ruta inicial
app.get('/', (req, res) => {
    //estado de la respuesta con salida
    const data = [{"name":"sebastian"},{"name":"cristian"},{"name":"juan"}];
    res.render('index.ejs', {data})
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
app.put('/user/:id', (req, res) => {
    //estado de la respuesta con salida
    console.log(req.body);
    res.send(`USER ${req.body.id} ${req.params.id} ACTUALIZADO \n`);
});

//crear metodo delete
app.delete('/user/:id', (req, res) => {
    //estado de la respuesta con salida
    res.send(`USER ${req.params.id} DELETED \n`);
});


//app estatica
app.use(express.static('public'));

//crear otro esucha para el 404
app.get('*', (req, res) => {
    //estado de la respuesta con salida
    res.send('404 \n');
});
//configurar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto 3000');
});