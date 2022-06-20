const { items } = require('../models');

class ItemController {
  static async addItem(req, res) {
    try {
      if (!req.body.name) throw {
        status: 400,
        message: 'name cannot be empty'
      }

      if (!req.body.price) throw {
        status: 400,
        message: 'price cannot be empty'
      }

      if (!req.body.stock) throw {
        status: 400,
        message: 'stock cannot be empty'
      }

      if (!req.body.updated_by) throw {
        status: 400,
        message: 'updated_by cannot be empty'
      }

      const newItem = {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        updated_by: req.body.updated_by,
      }
  
      await items.create(newItem);
  
      return res.status(201).json({
        message: 'Successfully add Item ' + newItem.name
      })
    } catch (err) {
      return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
    }
  }

   static async getByID(req, res) {
    const itemID = req.params.id
    const rows = await items.findAll({
      where:{
        id: itemID,
        }
    }
  );
  if (rows == 0){
    return res.status(404).json({
      message: "Item not Found"
    })
  }
  else{
    return res.status(200).json({
      message: 'Succesfully get Item',
      data: rows
    })}
  }

  static async getAllItem(req, res) {
    const rows = await items.findAll({
    });

    return res.status(200).json({
      message: 'Successfully get all items',
      data: rows
    })
  }

  static async updateItem(req, res) {
    const itemID = req.params.id;
    const newPrice = req.body.price;

    await items.update({price: newPrice},{
      where:{
        id:itemID
      }
    })

    return res.status(200).json({
      message: 'Succesfully change item price with ID ' + itemID,
    })
  }

  static async deleteItem(req, res) {
    try {
      if (!req.body.id) throw { status: 400, message: 'ID cannot be empty' };

      await items.destroy({
        where: { id: req.body.id }
      });

      return res.status(200).json({
        message: 'Successfully delete item with ID ' + req.body.id
      })
    } catch (err) {
      return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
    }
  }
}

module.exports = ItemController;