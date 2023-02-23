const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect, use } = chai;
chai.use(sinonChai);
const { productService } = require('../../../src/services');
const { productControler } = require('../../../src/controllers');

const { products, productOneMock } = require('./mocks/product.controller.mock');

describe('Testes unitários da camada Controller', function () {
  describe('Listando os produtos', function() {
    it('Recuperando a lista de todos os produtos cadastrados', async function () {
      // arrange
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'allProducts')
        .resolves({ products });

      // act
      await productControler.allProducts(req, res);

      // assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products);
    });
  });
it('Retorna erro caso o ID do produto não exista', async function () {
    const res = {};
    const req = {
      params: { id: 10 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'productById').resolves({  type: 'INVALID_VALUE', message: 'Product not found' });

    await productControler.productById(req, res);

    expect(res.status).to.have.been.calledWith(404);
     expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Recuperando um produto pelo seu ID', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'productById').resolves( productOneMock );

   const result = await productControler.productById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(result);
  });

   it('Deleta um produto com sucesso pelo id', async function () {
    const req = { params: { id: 1} };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'deleteById').resolves({ type: null, message: '' });

    await productControler.deleteById(req, res);

       expect(res.status).to.have.been.calledWith(204);
       expect(res.json).to.have.been.calledWith();
   });
  
    it('Retorna erro ao deletar produtos que não estão cadastrados no banco de dados', async function () {
    const req = { params: { id: 5 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'deleteById').resolves({ type: 404, message: 'Product not found' });

    await productControler.deleteById(req, res);

       expect(res.status).to.have.been.calledWith(404);
       expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
   });
  
  afterEach(function () {
    sinon.restore();
  });
});