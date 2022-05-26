const {Cliente,Producto} = require('../database/models');

const apiCtrl = {}



apiCtrl.getClientes = async (req,res)=>{

    const clientes = await Cliente.findAll();
    const clientesJson = JSON.stringify(clientes);
    res.json(clientes);

}


apiCtrl.getProductos= async (req,res)=>{

    const productos = await Producto.findAll();
    const productosJson = JSON.stringify(productos);
    res.json(productos);

}




module.exports = apiCtrl;