import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcyclesServices';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async create() {
    const Motorcycles: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycles = await this.service.createMotorcycles(Motorcycles);
      return this.res.status(201).json(newMotorcycles);
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
    const cars: IMotorcycle = { id, ...this.req.body };
    try {
      const { status, message } = await this.service.update(id, cars);
      return this.res.status(status).json(message);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;
