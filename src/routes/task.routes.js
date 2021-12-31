//importar libreria de router de express
const { Router } = require('express');
const { getTask, postTask , putTask, deleteTask } = require('../controllers/task.controllers');
//iniciar router
const router = Router();


//capturar get de la pagina principal /
router.get('/', getTask);


//methos post
router.post('/', postTask );


//methos put
router.put('/', putTask );


//methos delete
router.delete('/', deleteTask);


//404 route
router.get('*', (req, res) => {
    res.send('404 not found');
});


//exportar el router
module.exports = router;