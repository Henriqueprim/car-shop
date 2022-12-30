import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  model = new CarODM();

  private carDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const createdCar = await this.model.create(car);
    return this.carDomain(createdCar);
  }

  public async getAll() {
    const carList = await this.model.getAll();
    const carsArray = carList.map((car) => this.carDomain(car));
    return carsArray;
  }
}

export default CarService;
