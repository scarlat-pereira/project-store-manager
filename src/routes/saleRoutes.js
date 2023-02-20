const express = require('express');
const { saleControler } = require('../controllers');

const router = express.Router();

router.get('/', saleControler.allSales); 

router.get('/:id', saleControler.salesById);

router.post('/', saleControler.insertSale);

module.exports = router;