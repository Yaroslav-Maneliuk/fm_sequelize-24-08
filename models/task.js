'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate (models) {
      Task.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  }
  Task.init(
    {
      body: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      isDone: {
        field: 'is_done',
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
        validate: {
          notNull: true,
        },
      },
      deadLine: {
        field: 'dead_line',
        type: DataTypes.DATE,
        validate: { isDate: true },
      },
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
      underscored: true,
    }
  );
  return Task;
};
