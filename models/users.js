'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    updatedAt: {
      name: 'updated_at',
      field: 'updated_at',
      type: DataTypes.DATE
    },
    createdAt: {
      name: 'created_at',
      field: 'created_at',
      type: DataTypes.DATE
    },
    pass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};