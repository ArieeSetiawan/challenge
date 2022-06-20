const { users } = require('../models');

class userController {
  static async register(req, res) {
    try {
      if (!req.body.name) throw {
        status: 400,
        message: 'name cannot be empty'
      }

      if (!req.body.email) throw {
        status: 400,
        message: 'email cannot be empty'
      }

      if (!req.body.password) throw {
        status: 400,
        message: 'password cannot be empty'
      }

    const newUser = {
      name: req.body.name,
      email: req.body.email,
      pass: req.body.password,
    }
  
      await users.create(newUser);
  
      return res.status(201).json({
        message: 'Successfully add user',
        user_email: newUser.email
      })
    } catch (err) {
      return res
        .status(err.status ||  500)
        .json({ message: err.message || 'Internal server error' })
    }
  }

  static async login(req,res){
    try {
        let user = await users.findOne({
          attributes: ['id', 'name', 'email'],
          where: {
            email: req.body.email,
            pass: req.body.password
          }
        })
    
        user = user?.dataValues;
    
        if (!user) throw {
          status: 400,
          message: 'Wrong Username/Password'
        }
      
        return res.status(201).json({
          message: 'Successfully Login.',
          user: req.body.email
        })
      } catch (err) {
        return res
          .status(err.status || 500)
          .json({
            message: err.message || 'Internal server error.',
          })
      }
    }

    static async getAllUser(req, res) {
        const rows = await users.findAll({
            attributes:{exclude:['pass']}
        });
    
        return res.status(200).json({
          message: 'Successfully get all User',
          data: rows
        })
      }

    static async updatePassword(req, res) {
   
        await users.update({pass: req.body.newpass},{
          where:{
            email:req.body.email
          }
        });
        return res.status(200).json({
            message: "Successfully change password."
        })
    } catch (err) {
        return res
          .status(err.status || 500)
          .json({
            message: err.message || 'Internal server error.',
          })
      }

      static async deleteUser(req, res) {
        try {
          if (!req.body.id) throw { status: 400, message: 'ID cannot be empty' };
    
          await users.destroy({
            where: { id: req.body.id }
          });
    
          return res.status(200).json({
            message: 'Successfully delete User'
          })
        } catch (err) {
          return res
            .status(err.status ||  500)
            .json({ message: err.message || 'Internal server error' })
        }
      }
}


module.exports = userController;