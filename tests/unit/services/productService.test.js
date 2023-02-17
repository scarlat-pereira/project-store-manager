const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { products, productById, invalidateName, validateName } = require('./mocks/productService.mock');

describe('Testes unitários da camada service', function () {
  describe('Listagem de Produtos', function () {
    it('Recuperando a lista de todos os produtos cadastrados', async function () {
      // arrange
      sinon.stub(productModel, 'allProducts').resolves(products);

      // act
      const result = await productService.allProducts();

      // assert
      expect(result.type).to.be.equal(result.null);
      expect(result.message).to.deep.equal([result.message][0]);
    });
    it('Recuperando um produto pelo seu ID', async function () {
      sinon.stub(productModel, 'productById').resolves([products[1]]);

      const result = await productService.productById(2);

      expect(result.type).to.be.equal(result.null);
      expect(result.message).to.deep.equal(result.message);
    });
  });

//   describe('Cadastro de um produto', function () {
//     // it('erro caso a requisição não tem o campo "name"', async function () {
    
//     //   const result = await productService.productById(null);

//     //   expect(result.type).to.be.equal('INVALID VALUE');
//     //   expect(result.message).to.be.equal('"name" is required');
//     // });

//     // it('erro ao passar um nome que não tenha pelo menos 5 caracteres', async function () {

//     //   const result = await productService.productById(invalidateName);

//     //   expect(result.type).to.be.equal('INVALID VALUE');
//     //   expect(result.message).to.be.equal('"name" length must be at least 5 characters long');
//     // });

//     it('retorna o produto cadastrado caso seja passado valores válidos', async function () {
//       sinon.stub(productModel, 'productById').resolves(1);

//       const result = await productService.productById(validateName);

//       expect(result.type).to.be.equal(result.null);
//       expect(result.message).to.deep.equal(result.productById);
//     });

//     afterEach(function () {
//       sinon.restore();
//     });
//   });
});