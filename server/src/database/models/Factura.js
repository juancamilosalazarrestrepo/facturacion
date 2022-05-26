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
        timestamps: false,
        deletedAt: false,
    }

    const Factura = sequelize.define(alias,cols,config);

    Factura.associate = function(models) {
        Factura.belongsTo(models.Cliente,{
           as: "cliente",
           foreignKey:"idclientes"
        })

       

    }
   
   

    return Factura;
}