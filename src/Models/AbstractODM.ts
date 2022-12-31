import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
import CustomError from '../Error/CustomError';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async update(_id: string, obj: Partial<T>):
  Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomError('Invalid mongo id', 422);
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CustomError('Invalid mongo id', 422);
    return this.model.findById(id);
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }
}

export default AbstractODM;
