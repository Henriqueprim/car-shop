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
});