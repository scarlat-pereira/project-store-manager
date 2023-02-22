const sales = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
]

const saleById = [
  {
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
]

const invalidProductId = [
  {
    "productId": 999,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const invalidQuantity = [
  {
    "productId": 1,
    "quantity": 0
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const quantityRequired = [
  {
    "productId": 1,
    "quantity": ''
  },
  {
    "productId": 2,
    "quantity": 5
  }
]
const response = {
  id: 1,
  ItemsSold: [
     {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
  ]
}

const validateCorrect = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

module.exports = {
  sales,
  saleById,
  invalidProductId,
  invalidQuantity,
  quantityRequired,
  validateCorrect,
  response,
};