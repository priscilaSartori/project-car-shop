import { Router } from 'express';
import CarsConstroller from '../Controllers/CarsConstroller';

const carRoute = Router();

carRoute.post(
  '/cars',
  (req, res, next) => new CarsConstroller(req, res, next).create(),
);

carRoute.get(
  '/cars',
  (req, res, next) => new CarsConstroller(req, res, next).getAll(),
);

carRoute.get(
  '/cars/:id',
  (req, res, next) => new CarsConstroller(req, res, next).getById(),
);

carRoute.put(
  '/cars/:id',
  (req, res, next) => new CarsConstroller(req, res, next).update(),
);

export default carRoute;
