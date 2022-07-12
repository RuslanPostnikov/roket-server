'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .createTable('Categories', {
        id: {
          type: Sequelize.INTEGER,
          unique: true,
          autoIncrement: true,
          primaryKey: true,
        },

        title: {
          type: Sequelize.STRING,
          // unique: true,
          allowNull: false,
        },
      })
      .then(() => {
        return queryInterface.createTable('News', {
          id: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
          },

          image: {
            type: Sequelize.TEXT,
            allowNull: false,
          },

          title: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
          },

          date: {
            type: Sequelize.STRING,
            allowNull: false,
          },

          shortDescription: {
            type: Sequelize.TEXT,
            allowNull: false,
          },

          likesQuantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },

          categoryId: {
            type: Sequelize.INTEGER,
            references: { model: 'Categories', key: 'id' },
          },
        });
      });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('News').then(() => {
      return queryInterface.dropTable('Categories');
    });
  },
};
