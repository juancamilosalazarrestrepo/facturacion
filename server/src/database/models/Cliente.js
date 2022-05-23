module.exports = (sequelize,dataTypes) => {
    let alias = "Cliente";
    let cols = {
        idclientes : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255)
        },
        apellido: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,
    }

    const Cliente = sequelize.define(alias,cols,config);
   
   

    return Cliente;
}