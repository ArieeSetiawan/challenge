const { orders } = require('../models/');
const { items } = require('../models');

class OrderController {
  static async addOrder(req, res) {
    try {
      if (!req.body.itemID) throw {
        status: 400,
        message: 'ItemID cannot be empty'
      }

      if (!req.body.userID) throw {
        status: 400,
        message: 'UserID cannot be empty'
      }

      if (!req.body.amount) throw {
        status: 400,
        message: 'amount cannot be empty'
      }

      if (!req.body.status_order) throw {
        status: 400,
        message: 'status order cannot be empty'
      }

      const orderItem = await items.findOne({
        where:{
            id:req.body.itemID
        }
      })

      const newOrder = {
        item_id: req.body.itemID,
        user_id: req.body.userID,
        amount: req.body.amount,
        status_order: req.body.status_order,
        total_price: req.body.amount*orderItem.dataValues.price,
      }
  
      await orders.create(newOrder);
  
      return res.status(201).json({
        message: 'Successfully add Order'
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

  static async getAllOrder(req, res) {
    const rows = await orders.findAll({
    });

    return res.status(200).json({
      message: 'Successfully get all orders',
      data: rows
    })
  }

  static async updateOrder(req, res) {
    const orderID = req.body.orderID;
    const newStatus = req.body.status_order;

    await orders.update({status_order: newStatus},{
      where:{
        id:orderID
      }
    })

    return res.status(200).json({
      message: 'Succesfully change status with ID ' + orderID,
    })
  }
  static async deleteOrder(req, res) {
    try {
      if (!req.body.id) throw { status: 400, message: 'ID cannot be empty' };

      await orders.destroy({
        where: { id: req.body.id }
      });

      return res.status(200).json({
        message: 'Successfully delete Order'
      })
    } catch (err) {
      return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
    }
  }
 }

module.exports = OrderController;