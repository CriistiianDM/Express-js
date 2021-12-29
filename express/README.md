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
    //stado de la respuesta con salida
    res.send('Hola Mundo bebe\n');
    }); 
    ```
* Paso 4: colocar puerto de escucha del servidor
    ```
    app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
    });
    ```