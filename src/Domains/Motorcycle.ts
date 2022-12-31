import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(bike: IMotorcycle) {
    this.id = bike.id;
    this.model = bike.model;
    this.year = bike.year;
    this.color = bike.color;
    this.status = bike.status;
    this.buyValue = bike.buyValue;
    this.category = bike.category;
    this.engineCapacity = bike.engineCapacity;
  }

  getId() {
    return this.id;
  }
  
  setId(id: string) {
    this.id = id;
  }

  getModel() {
    return this.model;
  }

  setModel(model: string) {
    this.model = model;
  }

  getYear() {
    return this.year;
  }

  setYear(year: number) {
    this.year = year;
  }

  getColor() {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status: boolean) {
    this.status = status;
  }

  getBuyValue() {
    return this.buyValue;
  }

  setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  getCategory() {
    return this.category;
  }

  setCategory(category: string) {
    this.category = category;
  }

  getEngineCapacity() {
    return this.engineCapacity;
  }

  setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;
