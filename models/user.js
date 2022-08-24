"use strict";
const { Model } = require("sequelize");
const { isBefore } = require("date-fns");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    //Users -> users
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        field: "first_name",
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNull: true,
          notEmpty: true,
        },
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNull: true,
          notEmpty: true,
        },
      },
      email: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNull: true,
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        field: "password_hash",
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
          isNull: true,
          notEmpty: true,
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isValidDate(value) {
            if (isBefore(new Date(), new Date(value))) {
              throw new Error(`check your birthday`);
            }
          },
        },
      },
      isMale: { field: "is_male", type: DataTypes.BOOLEAN },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
    }
  );
  return User;
};
