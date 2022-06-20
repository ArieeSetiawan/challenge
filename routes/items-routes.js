const router = require('express').Router();
const itemController = require('../controllers/items-controller');

//menampilkan semua item
router.get('/', itemController.getAllItem);
//menampilkan item dari ID --
router.get('/:id', itemController.getByID);
//menambah item
router.post('/', itemController.addItem);
//mengupdate item dengan id
router.put('/:id', itemController.updateItem);
//menghapus item
router.delete('/', itemController.deleteItem);

module.exports = router;
