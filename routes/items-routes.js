const router = require('express').Router();
const itemController = require('../controllers/items-controller');

router.get('/', itemController.getItems);

module.exports = router;
