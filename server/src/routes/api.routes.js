const express = require('express');
const router = express.Router();

const {getClientes,getProductos} = require('../controllers/api.controller');

const usuario = {
    nombre:'Juan',
    apellido:'salazar'
}

router.get('/',getClientes);
router.get('/productos',getProductos);


/*
router.get('/bicicletas',getAllbicicle);
*/


  



module.exports = router;