'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('cidades', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      cid_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      cid_estado: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },

      cid_pais: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      cid_regiao: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },

      cid_continente: {
        type: Sequelize.STRING(15),
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
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cidades');
  }
};