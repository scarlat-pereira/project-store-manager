const express = require('express');
const { productControler } = require('../controllers');
const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', productControler.allProducts); // dessa forma é redundate

router.get('/:id', productControler.productById);

router.post('/', validateName, productControler.createProduct);

module.exports = router;
