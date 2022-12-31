import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcyleODM';

class MotorcycleService {
  model = new MotorcycleODM();

  private bikeDomain(bike: IMotorcycle | null): Motorcycle | null {
    if (bike) {
      return new Motorcycle(bike);
    }
    return null;
  }

  public async create(bike: IMotorcycle) {
    const createdBike = await this.model.create(bike);
    return this.bikeDomain(createdBike);
  }
}

export default MotorcycleService;