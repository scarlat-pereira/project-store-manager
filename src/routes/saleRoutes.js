const express = require('express');
const { saleControler } = require('../controllers');

const router = express.Router();

router.get('/', saleControler.allSales); 

router.get('/:id', saleControler.salesById);

router.post('/', saleControler.insertSale);

// router.put('/:id', saleControler.updateById);

router.delete('/:id', saleControler.deleteById);

module.exports = router;