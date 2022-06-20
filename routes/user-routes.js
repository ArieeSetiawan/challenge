const router = require('express').Router();
const userController = require('../controllers/user-controller');

//register user
router.post('/register',userController.register);
//login user
router.get('/login',userController.login);
//menampilkan semua user tanpa password
router.get('/', userController.getAllUser);
//memperbarui password
router.put('/updatepassword',userController.updatePassword);
//menghapus user
router.delete('/', userController.deleteUser);

module.exports = router;
