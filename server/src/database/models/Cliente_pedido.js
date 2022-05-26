module.exports = (sequelize,dataTypes) => {
    let alias = "Cliente_pedido";
    let cols = {
        idcliente_pedido : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idclientes: {
            type: dataTypes.INTEGER
        },
        idpedidos: {
            type: dataTypes.INTEGER
        },
        
    };
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,
    }

    const Cliente_pedido = sequelize.define(alias,cols,config);
   
   

    return Cliente_pedido;
}