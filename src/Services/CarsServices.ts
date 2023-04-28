import CarsDomains from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/CarsModel';

class CarsService {
  public async createCars(cars: ICar) {
    const carsModel = new CarsModel();
    const car = await carsModel.create(cars);
    if (car) {
      return new CarsDomains(car);
    }
    return null;
  }
}

export default CarsService;