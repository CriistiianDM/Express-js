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