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

  public async findById(id: string) {
    const car = await this.model.findById(id);
    if (!car) {
      throw new Error('Car not found');
    }
    return this.carDomain(car);
  }
}

export default CarService;
