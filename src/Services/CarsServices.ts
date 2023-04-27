import CarsDomains from '../Domains/CarsDomains';
import ICars from '../Interfaces/ICars';

class CarsService {
  public createCars(cars: ICars): CarsDomains | null {
    if (cars) {
      return new CarsDomains(cars as ICars);
    }
    return null;
  }
}

export default CarsService;