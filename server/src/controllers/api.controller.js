const {Cliente,Producto,Factura,Pedido} = require('../database/models');

const apiCtrl = {}



apiCtrl.getClientes = async (req,res)=>{

    const clientes = await Cliente.findAll({
        include:[{association:"pedidos"}]
    });
    const clientesJson = JSON.stringify(clientes);
    res.json(clientes);

}

apiCtrl.getClienteByID = async (req,res)=>{
    let id = req.params.id;
    const cliente = await Cliente.findByPk(id,{
        include:[{association:"pedidos"}]
    });

    const clientesJson = JSON.stringify(cliente);
    res.json(cliente);

}


apiCtrl.getProductos= async (req,res)=>{

    const productos = await Producto.findAll(
        
    );
    const productosJson = JSON.stringify(productos);
    res.json(productos);

}

 // obtener facturas
 
apiCtrl.getFacturas= async (req,res)=>{

    const facturas = await Factura.findAll(
        {
            include: [{association: "cliente"},{association: "pedido"}]
        }
    );
    const facturasJson = JSON.stringify(facturas);
    res.json(facturas);

}

apiCtrl.getPedidos= async (req,res)=>{

    const pedidos = await Pedido.findAll(
        
        {
            include:[{association:"producto"}]
        }
    );
    const pedidosJson = JSON.stringify(pedidos);
    res.json(pedidos);

}

apiCtrl.getPedidosByID= async (req,res)=>{

    const pedido = await Pedido.findByPk(
        
        {
            include:[{association:"producto"}]
        }
    );
    const pedidosJson = JSON.stringify(pedido);
    res.json(pedido);

}

apiCtrl.createCliente= async (req,res)=>{
try{

    const { nombre, apellido, cedula, celular} = req.body;
    await Cliente.create({
        nombre,
        apellido,
        cedula,
        celular
    });
    
    return res.send("correcto");
}catch (error) {
    return res.send(error);
}
    
   

}

apiCtrl.crearProducto= async (req,res)=>{
    try{
    
        const { nombreproducto, descripcion, precio} = req.body;
        await Producto.create({
            nombreproducto,
            descripcion,
            precio //utilizar un convertidos de string a real
            
        });
        
        return res.send("correcto");
    }catch (error) {
        return res.send(error);
    }
        
       
    
    }


   

   //------------------------------------------------------------


module.exports = apiCtrl;