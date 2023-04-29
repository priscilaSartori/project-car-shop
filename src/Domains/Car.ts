import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(cars: ICar) {
    super(cars);
    this.doorsQty = cars.doorsQty;
    this.seatsQty = cars.seatsQty;
  }
}

export default Car;
