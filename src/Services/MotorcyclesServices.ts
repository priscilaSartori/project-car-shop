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
}

export default MotorcyclesService;
