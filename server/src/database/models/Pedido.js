module.exports = (sequelize,dataTypes) => {
    let alias = "Pedido";
    let cols = {
        idpedidos : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idproductos: {
            type: dataTypes.INTEGER,
        },
        valorunitario: {
            type: dataTypes.REAL
        },
        valorpedido: {
            type: dataTypes.REAL
        }
    };
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,
    }

    const Pedido = sequelize.define(alias,cols,config);
    Pedido.associate = function(models){
        Pedido.belongsTo(models.Producto,{
            as: "producto",
            foreignKey: "idproductos"
        }),
        Pedido.belongsToMany(models.Cliente,{
            as:'clientes',
            through:'cliente_pedidos',
            foreignKey:'idpedidos',
            otherKey:'idclientes',
            timestamps:false,
        })
    }
   

    return Pedido;
}