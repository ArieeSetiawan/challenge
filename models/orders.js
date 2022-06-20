'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    item_id: DataTypes.NUMBER,
    user_id: DataTypes.NUMBER,
    amount: DataTypes.NUMBER,
    total_price: DataTypes.NUMBER,
    status_order: DataTypes.STRING,
    updatedAt: {
      name: 'updated_at',
      field: 'updated_at',
      type: DataTypes.DATE
    },
    createdAt: {
      name: 'created_at',
      field: 'created_at',
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};