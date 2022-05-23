const {Cliente} = require('../database/models');

const clientesCtrl = {}



clientesCtrl.getClientes = async (req,res)=>{

    const clientes = await Cliente.findAll();
    const clientesJson = JSON.stringify(clientes);
    res.json(clientes);

}




module.exports = clientesCtrl;