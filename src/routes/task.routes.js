//importar libreria de router de express
const { Router } = require('express');

//iniciar router
const router = Router();


//capturar get de la pagina principal /
router.get('/', (req, res) => {
    res.send('Method GET');
});


//methos post
router.post('/', (req, res) => {
   res.send('Method POST');
});


//methos put
router.put('/', (req, res) => {
    res.send('Method PUT');
});


//methos delete
router.delete('/', (req, res) => {
    res.send('Method DELETE');
});


//404 route
router.get('*', (req, res) => {
    res.send('404 not found');
});


//exportar el router
module.exports = router;