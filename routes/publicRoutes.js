const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.home);
router.get('/item/:id', itemController.detalhes);
router.get('/sobre', itemController.sobre);

module.exports = router;
