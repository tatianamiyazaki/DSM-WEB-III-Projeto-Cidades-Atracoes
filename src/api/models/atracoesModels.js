const { Model, DataTypes } = require('sequelize');

class Atracoes extends Model {
    static init(sequelize) {
        super.init({
            cidade_id: DataTypes.INTEGER,
            atr_nome: DataTypes.STRING,
            atr_local: DataTypes.STRING,
            atr_tipo: DataTypes.STRING,            
            atr_acesso: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'atracoes',

            hooks: {
                beforeCreate: () => {
                    console.log("Excecutando ... BeforeCreate")
                },

                afterCreate: () => {
                    console.log("Excecutando ... AfeterCreate")
                },
            }
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Cidades, {
            foreignKey: "cidade_id",
            as: "cidade"
        })
    }
}

module.exports = Atracoes