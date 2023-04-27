import { NextFunction, Request, Response } from 'express';
import ICars from '../Interfaces/ICars';
import CarsService from '../Services/CarsServices';

class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async create() {
    const cars: ICars = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCars = await this.service.createCars(cars);
      return this.res.status(201).json(newCars);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarsController;