import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Tests /cars services', function () {
  const service = new CarService();

  it('Should create a car successfully', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput: Car = new Car({
      ...carInput,
      id: '53468fafae523468',
    });
    Sinon.stub(Model, 'create').resolves(carOutput);

    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Should get the list of cars in the database', async function () {
    const carListMock: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    const carListOutput: Car[] = carListMock.map((car) => new Car(car));
    Sinon.stub(Model, 'find').resolves(carListOutput);
    const result = await service.getAll();
    expect(result).to.be.deep.equal(carListOutput);
  });

  it('Should find a car by its id', async function () {
    const idInput = '634852326b35b59438fbea2f';
    const carMock: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput: Car = new Car(carMock);
    Sinon.stub(Model, 'findById').resolves(carOutput);
    const result = service.findById(idInput);
    expect(result).to.be.deep.equal(carOutput);
  });

  afterEach(function () {
    Sinon.restore();
  });
});
