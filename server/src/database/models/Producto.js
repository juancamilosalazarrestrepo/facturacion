module.exports = (sequelize,dataTypes) => {
    let alias = "Producto";
    let cols = {
        idproductos : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreproducto: {
            type: dataTypes.STRING(255)
        },
        descripcion: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,
    }

    const Producto = sequelize.define(alias,cols,config);
   
   

    return Producto;
}