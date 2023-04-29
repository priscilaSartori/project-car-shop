import { isValidObjectId } from 'mongoose';
import MotorcyclesDomains from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesModel from '../Models/MotorcyclesODM';

class MotorcyclesService {
  public async createMotorcycles(motorcycles: IMotorcycle) {
    const motorcyclesModel = new MotorcyclesModel();
    const motorcycle = await motorcyclesModel.create(motorcycles);
    if (motorcycle) {
      return new MotorcyclesDomains(motorcycle);
    }
    return null;
  }

  public async getAll() {
    const motorcyclesModel = new MotorcyclesModel();
    const motorcycles = await motorcyclesModel.getAll();
    const motorcyclesArray = motorcycles.map((motorcycle) => {
      if (motorcycle) return new MotorcyclesDomains(motorcycle);
      return null;
    }); 
    return { status: 200, message: motorcyclesArray };
  }

  public async getById(id: string) {
    const motorcyclesModel = new MotorcyclesModel();
    if (!isValidObjectId(id)) return { status: 422, message: { message: 'Invalid mongo id' } };
    const motorcycles = await motorcyclesModel.getById(id);
    if (motorcycles === null) return { status: 404, message: { message: 'Motorcycle not found' } };
    const newMotorcycles = motorcycles ? new MotorcyclesDomains(motorcycles) : null;
    return { status: 200, message: newMotorcycles };
  }

  public async update(id: string, motorcycles: IMotorcycle) {
    const motorcyclesModel = new MotorcyclesModel();
    if (!isValidObjectId(id)) return { status: 422, message: { message: 'Invalid mongo id' } };
    const motorcyclesUpdate = await motorcyclesModel.update(id, motorcycles);
    if (motorcyclesUpdate === null) {
      return { 
        status: 404, message: { message: 'Motorcycle not found' } };
    }
    const newMotorcycles = motorcyclesUpdate ? new MotorcyclesDomains(motorcycles) : null;
    return { status: 200, message: newMotorcycles };
  }
}

export default MotorcyclesService;
