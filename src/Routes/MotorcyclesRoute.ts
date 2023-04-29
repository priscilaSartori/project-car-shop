import { Router } from 'express';
import MotorcyclesConstroller from '../Controllers/MotorcyclesController';

const MotorcyclesRoute = Router();

MotorcyclesRoute.post('/', (req, res, next) => new MotorcyclesConstroller(req, res, next).create());
MotorcyclesRoute.get('/', (req, res, next) => new MotorcyclesConstroller(req, res, next).getAll());
MotorcyclesRoute.get(
  '/:id',
  (req, res, next) => new MotorcyclesConstroller(req, res, next).getById(),
);

export default MotorcyclesRoute;
