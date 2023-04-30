import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarsServices';
import { validCarWithStatus, carOutput, allCars, newCar, updatedCar } from '../../mocks/car.mock';

describe('Testando carros', function () {
  describe('Testando o endpoint para cadastrar carros', function () {
    it('Cadastra um carro com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(carOutput);
      const service = new CarService();
      const result = await service.createCars(validCarWithStatus);
      expect(result).to.be.deep.equal(carOutput);
    });
  });

  // eslint-disable-next-line mocha/max-top-level-suites
  describe('Testando o endpoint para listar carros', function () {
    it('Com parâmetros válidos, lista todos os carros com Sucesso', async function () {
      sinon.stub(Model, 'find').resolves(allCars);
      const service = new CarService();
      const result = await service.getAll();
      expect(result).to.be.deep.equal({ status: 200, message: allCars });
    });

    it('Com parâmetros válidos, lista um carro específico com sucesso', async function () {
      sinon.stub(Model, 'findOne').resolves(newCar);
      const service = new CarService();
      const result = await service.getById('63319d80feb9f483ee823ac5');
      expect(result).to.be.deep.equal({ status: 200, message: newCar });
    });

    it('Com parâmetros inválidos, lança uma exceção', async function () {
      sinon.stub(Model, 'findById').resolves();
      const service = new CarService();
      const result = await service.getById('id invalido');
      expect(result).to.be.deep.equal({ status: 422, message: { message: 'Invalid mongo id' } });
    });

    // it('Será validado que não é possível listar um carro que não existe', async function () {
    //   sinon.stub(Model, 'findOne').resolves();
    //   const service = new CarService();
    //   const result = await service.getById('1111222233330000ffffcccc');
    //   expect(result).to.be.deep.equal({ status: 200, message: { message: 'Car not found' } });
    // });
  
    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Testando o endpoint para atualizar um carro', function () {
    it('Altera um carro com sucesso', async function () {
      const update = sinon.stub(Model, 'findByIdAndUpdate').resolves(newCar);
      const service = new CarService();
      await service.update('63319d80feb9f483ee823ac5', updatedCar);
      expect(update.calledOnce).to.be.deep.equal(true);
    });

    // eslint-disable-next-line mocha/no-hooks-for-single-case
    afterEach(function () {
      sinon.restore();
    });
  });
});