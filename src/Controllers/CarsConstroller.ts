import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
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
    const cars: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
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

  public async getAll() {
    try {
      const { status, message } = await this.service.getAll();
      return this.res.status(status).json(message);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const { status, message } = await this.service.getById(id);
      return this.res.status(status).json(message);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const cars: ICar = { id, ...this.req.body };
    try {
      const { status, message } = await this.service.update(id, cars);
      return this.res.status(status).json(message);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarsController;