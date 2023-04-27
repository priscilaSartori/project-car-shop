import {
  Model,
  Schema,
  model,
  models,
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
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.CarsDomains || model('Cars', this.schema);
  }

  public async create(cars: ICar): Promise<ICar> {
    return this.model.create({ ...cars });
  }
}

export default CarsModel;
