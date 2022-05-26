module.exports = (sequelize,dataTypes) => {
    let alias = "Factura";
    let cols = {
        idfacturas : {
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
        valortotal: {
            type: dataTypes.REAL
        }
    };
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,
    }

    const Factura = sequelize.define(alias,cols,config);
   
   

    return Factura;
}