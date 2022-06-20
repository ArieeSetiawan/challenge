'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  items.init({
    // id:{
    //   field: "item_id",
    //   name:"item_id",
    //   type:DataTypes.NUMBER,
    //   primaryKey: true
    // },
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    stock: DataTypes.NUMBER,
    updated_by: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      name: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      name: 'updated_at',
      type: DataTypes.DATE
  }
    
},{ 
    sequelize,
    modelName: 'items',
  });
  return items;
};