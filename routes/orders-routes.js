const router = require('express').Router();
const orderController = require('../controllers/orders-controller');

//menampilkan pesanan
router.get('/',orderController.getAllOrder);
//membuatpesanan
router.post('/addorder',orderController.addOrder);
//memperbarui status pesanan
router.put('/updateorder',orderController.updateOrder);
//menghapus user
router.delete('/', orderController.deleteOrder);

module.exports = router;
