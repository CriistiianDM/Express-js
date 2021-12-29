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

