import CarsDomains from '../Domains/Car';
import ICar from '../Interfaces/ICar';

class CarsService {
  public createCars(cars: ICar): CarsDomains | null {
    if (cars) {
      return new CarsDomains(cars as ICar);
    }
    return null;
  }
}

export default CarsService;