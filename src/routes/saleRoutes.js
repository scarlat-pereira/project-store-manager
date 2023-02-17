const express = require('express');
const { saleControler } = require('../controllers');

const router = express.Router();

// router.post('/', saleControler.createController);

router.get('/', saleControler.allSales); 

router.get('/:id', saleControler.salesById);

module.exports = router;