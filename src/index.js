//libreria express
const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/task.routes');

//esjuctar express 
const app = express();

/*    SETTINGS    */
app.set('port', 4500);


/*    MIDDLEWARES    */
app.use(express.json());
app.use(morgan('dev'));
app.use(taskRoutes);


//escucha del servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

