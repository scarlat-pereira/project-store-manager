// const express = require('express');
// const { productController } = require('../controllers');

// const router = express.Router();

// router.get('/', productController.allProducts);

// router.get('/:id', productController.productById);

// router.post('/', productController.createProduct);

// module.exports = router;

const express = require('express');
const { productControler } = require('../controllers');
// const validateName = require('../middlewares/validateName');

const router = express.Router();

router.get('/', productControler.allProducts); // dessa forma é redundate

router.get('/:id', productControler.productById);

router.post('/', productControler.createProduct);

module.exports = router;
