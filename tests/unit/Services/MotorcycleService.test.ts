import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import IMotorcyle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Tests /motorcycles services', function () {
  const service = new MotorcycleService();
  // afterEach(function () {
  //   Sinon.restore();
  // });

  it('Shoud create a motorcycle successfully', async function () {
    const bikeInput: IMotorcyle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const bikeOutput: Motorcycle = new Motorcycle({
      ...bikeInput,
      id: '53468fafae523468',
    });
    Sinon.stub(Model, 'create').resolves(bikeOutput);
    const result = await service.create(bikeInput);
    expect(result).to.be.deep.equal(bikeOutput);
  });

  it('Should get the list of motorcycles in the database', async function () {
    const bikeListMock: IMotorcyle[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
    const bikeListOutput: Motorcycle[] = bikeListMock.map((bike) => new Motorcycle(bike));
    Sinon.stub(Model, 'find').resolves(bikeListOutput);
    const result = await service.getAll();
    expect(result).to.be.deep.equal(bikeListOutput);
  });

  it('Should find a motorcycle by its id', async function () {
    const idInput = '634852326b35b59438fbea2f';
    const bikeMock: IMotorcyle = {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.900,
      category: 'Street',
      engineCapacity: 1000,
    };
    const bikeOutput: Motorcycle = new Motorcycle(bikeMock);
    Sinon.stub(Model, 'findById').resolves(bikeOutput);
    const result = await service.findById(idInput);
    expect(result).to.be.deep.equal(bikeMock);
  });
});
