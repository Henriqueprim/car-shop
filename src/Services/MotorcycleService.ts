import Motorcycle from '../Domains/Motorcycle';
import CustomError from '../Error/CustomError';
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

  public async getAll() {
    const bikeList = await this.model.getAll();
    const bikeArray = bikeList.map((bike) => this.bikeDomain(bike));
    return bikeArray;
  }

  public async findById(id: string) {
    const bike = await this.model.findById(id);
    if (!bike) {
      throw new CustomError('Motorcycle not found', 404);
    }
    return this.bikeDomain(bike);
  }

  public async update(id: string, obj: Partial<IMotorcycle>) {
    const updateBike = await this.model.update(id, obj);
    if (!updateBike) {
      throw new CustomError('Motorcycle not found', 404);
    }
    return this.bikeDomain(updateBike);
  }
}

export default MotorcycleService;