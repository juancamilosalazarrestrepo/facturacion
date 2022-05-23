const express = require('express');
const router = express.Router();

const {getClientes} = require('../controllers/api.controller');

const usuario = {
    nombre:'Juan',
    apellido:'salazar'
}

router.get('/',getClientes);

/*
router.get('/bicicletas',getAllbicicle);
*/


  



module.exports = router;