import {
  Model,
  Schema,
  model,
  models,
  UpdateQuery,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarsModel {
  public schema: Schema;
  public model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }
  
  public async getById(id: string): Promise<ICar | null> {
    return this.model.findOne({ _id: id });
  }

  public async update(id: string, obj: Partial<ICar>):
  Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<ICar>,
    );
  }
}

export default CarsModel;
