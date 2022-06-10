const router = require('express').Router();
const orderController = require('../controllers/orders-controller');

router.get('/statusorder',orderController.status);
router.post('/buatorder',orderController.buat);
router.put('/perbaruiorder',orderController.perbarui);

module.exports = router;
