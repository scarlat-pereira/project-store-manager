const express = require('express');
const { productControler } = require('../controllers');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/search', productControler.selectByName);

router.get('/', productControler.allProducts); 

router.get('/:id', productControler.productById);

router.post('/', validateName, productControler.createProduct);

router.put('/:id', validateName, productControler.updateById);

router.delete('/:id', productControler.deleteById);

module.exports = router;