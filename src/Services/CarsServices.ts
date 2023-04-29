import { isValidObjectId } from 'mongoose';
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

  public async getAll() {
    const carsModel = new CarsModel();
    const cars = await carsModel.getAll();
    const carsArray = cars.map((car) => {
      if (car) return new CarsDomains(car);
      return null;
    }); 
    return { status: 200, message: carsArray };
  }

  public async getById(id: string) {
    const carsModel = new CarsModel();
    if (!isValidObjectId(id)) return { status: 422, message: { message: 'Invalid mongo id' } };
    const cars = await carsModel.getById(id);
    if (cars === null) return { status: 404, message: { message: 'Car not found' } };
    const newCars = cars ? new CarsDomains(cars) : null;
    return { status: 200, message: newCars };
  }

  public async update(id: string, cars: ICar) {
    const carsModel = new CarsModel();
    if (!isValidObjectId(id)) return { status: 422, message: { message: 'Invalid mongo id' } };
    const carsUpdate = await carsModel.update(id, cars);
    if (carsUpdate === null) return { status: 404, message: { message: 'Car not found' } };
    const newCars = carsUpdate ? new CarsDomains(cars) : null;
    return { status: 200, message: newCars };
  }
}

export default CarsService;