const { Model, DataTypes } = require('sequelize')

class Cidades extends Model {
    static init(sequelize) {
        super.init({
            cid_nome: DataTypes.STRING,
            cid_estado: DataTypes.STRING,
            cid_regiao: DataTypes.STRING,
            cid_pais: DataTypes.STRING,
            cid_continente: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'cidades',

            hooks:{
                beforeCreate: () => {
                    console.log("Executando --->>> BeforeCreate")
                },

                afterCreate: () => {
                    console.log("Executando --->>> AfterCreate")
                }
            }

        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Atracoes, {foreignKey: "cidade_id", as: 'cidade' })
    }
}
 
module.exports = Cidades


