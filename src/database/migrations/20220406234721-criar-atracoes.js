'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('atracoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      cidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'cidades', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      atr_nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      atr_local: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      atr_tipo: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },

      atr_acesso: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('atracoes');
  }
};
