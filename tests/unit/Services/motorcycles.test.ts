import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyclesServices from '../../../src/Services/MotorcyclesServices';
import { 
  validMotorcycleWithStatus,
  motorcyclesOutput, 
  // allMotorcycles, 
  newMotorcycle, 
  updatedMotorcycle, 
} from '../../mocks/motorcycles.mock';

describe('Testando motos', function () {
  describe('Testando o endpoint para cadastrar motos', function () {
    it('Cadastra uma moto com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(motorcyclesOutput);
      const service = new MotorcyclesServices();
      const result = await service.createMotorcycles(validMotorcycleWithStatus);
      expect(result).to.be.deep.equal(motorcyclesOutput);
    });
  });

  // eslint-disable-next-line mocha/max-top-level-suites
  describe('Testando o endpoint para listar motos', function () {
  // it('Com parâmetros válidos, lista todos as motos com Sucesso', async function () {
  //   sinon.stub(Model, 'find').resolves(allMotorcycles);
  //   const service = new MotorcyclesServices();
  //   const result = await service.getAll();
  //   expect(result).to.be.deep.equal({ status: 200, message: allMotorcycles });
  // });

    it('Com parâmetros válidos, lista uma moto específica com sucesso', async function () {
      sinon.stub(Model, 'findOne').resolves(newMotorcycle);
      const service = new MotorcyclesServices();
      const result = await service.getById('365874563b35b59438fbea2f');
      expect(result).to.be.deep.equal({ status: 200, message: newMotorcycle });
    });

    it('Com parâmetros inválidos, lança uma exceção', async function () {
      sinon.stub(Model, 'findById').resolves();
      const service = new MotorcyclesServices();
      const result = await service.getById('id invalido');
      expect(result).to.be.deep.equal({ status: 422, message: { message: 'Invalid mongo id' } });
    });

    // it('Será validado que não é possível listar uma moto que não existe', async function () {
    //   sinon.stub(Model, 'findOne').resolves();
    //   const service = new MotorcyclesServices();
    //   const result = await service.getById('1111222233330000ffffcccc');
    //   expect(result).to.be.deep.equal({ status: 200, message: { message: 'Motorcycle not found' } });
    // });
  
    afterEach(function () {
      sinon.restore();
    });
  });

  // eslint-disable-next-line mocha/max-top-level-suites
  describe('Testando o endpoint para atualizar uma moto', function () {
    it('Altera uma moto com sucesso', async function () {
      const update = sinon.stub(Model, 'findByIdAndUpdate').resolves(newMotorcycle);
      const service = new MotorcyclesServices();
      await service.update('365874563b35b59438fbea2f', updatedMotorcycle);
      expect(update.calledOnce).to.be.deep.equal(true);
    });

    // eslint-disable-next-line mocha/no-hooks-for-single-case
    afterEach(function () {
      sinon.restore();
    });
  });
});
