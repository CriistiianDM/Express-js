# Conceptos BASICOS DE LA CREACION DE UN SERVIDOR CON EXPRESS

* Paso 1: llamar la libreria express 
  ```
  const express = require('express');
  ```
* Paso 2: Crear el servidor
  ```
  const app = express();
  ```
* Paso 3: configuracion del servidor
    ```
    app.get('/', (req, res) => {
    //estado de la respuesta con salida
    res.send('Hola Mundo bebe\n');
    }); 
    ```
* Paso 4: colocar puerto de escucha del servidor
    ```
    app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
    });
    ```

## METODOS HTTP 

* GET: obtener datos
    ```
    app.get('/get', (req, res) => {
    //estado de la respuesta con salida
    res.send(' METODO GET \n');
    });

* POST: crear datos
    ```
    app.post('/post', (req, res) => {
    //estado de la respuesta con salida
    res.send(' METODO POST \n');
    });

    ```

* PUT: actualizar datos
    ```
  app.put('/put', (req, res) => {
    //estado de la respuesta con salida
    res.send(' METODO PUT \n');
  });

    ```

* DELETE: eliminar datos
    ```
    app.delete('/delete', (req, res) => {
    //estado de la respuesta con salida
    res.send(' METODO DELETE \n');
    });

    ```

## OBJECTOS

* Express necesita importar una liberia para cada tipo de objecto que necesitemos identificar como lo puede ser el formato json.
   EJEMPLO: 
    ```
    //Este comando hace que nuestro servidor pueda entender peticiones de tipo json
    app.use(express.json());

    //Este comando nos mostrara informacion de las peticiones
    const morgan = require('morgan');

    //mostrar informacion de las peticiones
    app.use(morgan('dev'));

    ```

## EJEMPLOS DE CONEXIONES BASICOS EN EXPRESS

* Para hacer peticiones de tipo post y ver lo que nos regresa se hara de la siguiente forma:
    ```
    app.post('/user', (req, res) => {
    //estado de la respuesta con salida
    console.log(req.body);
    res.send(' METODO POST \n');
    });

    ```

* Para recibir parametros en la url:

    ```
    app.post('/user/:id', (req, res) => {
    //estado de la respuesta con salida
    console.log(req.body);
    console.log(req.params);
    res.send(' METODO POST \n');
    });

    ```

* Para ejecutar comandos antes de que se ejecuten las peticiones http
  
    ```
    //aqui va todas las verficaciones antes que se ejecuten las peticiones http
    app.all('/user', (req, res, next) => {
    //aqui terminaria la verificacion, si se desvia la peticion se ejecutaria el siguiente middleware
    //res.send('Hola mundo');
    console.log('Hola mundo');
    next();
    });
    ```
##  SETTING

* Son como variables que sirven para optimizar y reducir codigo 
   Ejemplo: app.set('namevariable','valor de la variable')

##  MIDDLEWARE

* los mildeger de peticiones son como un conjunto de instrucciones que se ejecutan en  el servidor antes que lleguen a la ruta

    ```
    //esta funcion es un middleware general para todas las peticiones
    function middleware(req, res, next) {
         console.log(`RECIBIENDO PETICION ${req.protocol}://${req.get('host')}${req.originalUrl}`);
        next();
    }

    //entender formato json
    app.use(express.json());
    //llamar a middleware
    app.use(middleware);
    ```

## TEMPLATES

* Hay varios templates y uno de esos y mas popular es el ejs donde se le pasa la consulta de la base de datos y se pinta en html lo que se necesita

Ejemplo de syntaxis:

    ```
    //primero es agregar en lo settings el template 
    app.set('view engine', 'ejs');

    //ruta inicial
    //acomodar la ruta inicial con index.ejs 
    app.get('/', (req, res) => {

    //esta seria la consulta en la base de datos
    const data = [{"name":"sebastian"},{"name":"cristian"},{"name":"juan"}];
    //aca se le especifica el archivo y se le pasa la consulta
    res.render('index.ejs', {data})
    });

    <% for (var i = 0; i < data.length; i++) { %>
        <p><%= data[i].name %></p>
    <% } %>
    ```